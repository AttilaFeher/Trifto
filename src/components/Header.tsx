import { Link } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import HeaderNav from './HeaderNav';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Logout from '../features/authentication/Logout';
import { FaRegUserCircle } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

function Header() {
  const { isAuthenticated } = useUser();

  return (
    <>
      <header className="mx-[160px] flex h-24 items-center justify-between  px-4">
        <Logo />
        <SearchBar />
        {isAuthenticated ? (
          <div className="flex flex-row items-center gap-4">
            <Button variation="primary">Postavite oglas</Button>
            <BsFillHeartFill className="h-[28px] w-[28px] cursor-pointer hover:text-red-500" />
            <MdMail className="h-[34px] w-[34px] cursor-pointer hover:text-green-300" />

            <div
              className="flex cursor-pointer items-center gap-0"
              id="#hover-container "
            >
              <FaRegUserCircle className="h-[32px] w-[32px] " />
              <FaAngleDown className="h-[16px] w-[16px]" />
            </div>
            <Logout></Logout>
          </div>
        ) : (
          <ButtonGroup>
            <Button variation="secondary">
              <Link to="login">Log In</Link>
            </Button>
            <Button variation="primary">
              <Link to="signup">Sign Up</Link>
            </Button>
          </ButtonGroup>
        )}
      </header>
    </>
  );
}

export default Header;
