import { Link } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import HeaderNav from './HeaderNav';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Logout from '../features/authentication/Logout';

function Header() {
  const { isAuthenticated } = useUser();

  return (
    <>
      <header className="mx-auto flex h-24 max-w-[1600px] items-center justify-between  px-4">
        <Logo />
        <SearchBar />
        {isAuthenticated ? (
          <Logout />
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
      <HeaderNav />
    </>
  );
}

export default Header;
