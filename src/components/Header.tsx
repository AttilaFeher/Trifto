import { Link } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import HeaderNav from './HeaderNav';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Logout from '../features/authentication/Logout';
import { FaHome, FaRegUserCircle } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa';
import { MdCreateNewFolder, MdMail } from 'react-icons/md';

function Header() {
  const { isAuthenticated } = useUser();
  console.log(isAuthenticated);
  return (
    <header className="mx-8 flex h-24 items-center justify-between gap-7 px-4">
      <Logo />
      <SearchBar />
      {isAuthenticated ? (
        <div className="flex items-center gap-4">
          <Link to="chats">
            <MdMail className="h-[34px] w-[34px] cursor-pointer hover:text-blue-500" />
          </Link>
          {/* <BsFillHeartFill className="h-[28px] w-[28px] cursor-pointer hover:text-red-500" /> */}
          <Link to="products/new">
            {/* <Button variation="primary">Postavite oglas</Button> */}
            <MdCreateNewFolder className="h-[34px] w-[34px] cursor-pointer hover:text-blue-500" />
          </Link>

          {/* <div
              className="flex cursor-pointer items-center gap-0"
              id="#hover-container "
            >
              <FaRegUserCircle className="h-[32px] w-[32px] " />
              <FaAngleDown className="h-[16px] w-[16px]" />
            </div> */}
          <Logout />
        </div>
      ) : (
        <ButtonGroup>
          <Button variation="secondary">
            <Link to="/login">Log In</Link>
          </Button>
          <Button variation="primary">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </ButtonGroup>
      )}
    </header>
  );
}

export default Header;
