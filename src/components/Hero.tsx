import { Link } from 'react-router-dom';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import { useUser } from '../features/authentication/useUser';

function Hero() {
  const { isAuthenticated } = useUser();
  return (
    <div className="backgroundHero">
      <div className="mx-auto flex max-w-[1280px] flex-col text-white">
        <h1 className="text-6xl font-bold">
          Style Resold, <br></br>Stories Retold.
        </h1>
        <p className="w-1/2 text-xl ">
          Explore and sell stylish clothes easily on our online store. Discover
          the latest fashion trends or showcase your own designs effortlessly.
        </p>
        <ButtonGroup>
          {isAuthenticated ? (
            <Button variation="secondary">
              <Link to="/chats">Contact</Link>
            </Button>
          ) : (
            <>
              <Button variation="secondary">
                <Link to="login">Log In</Link>
              </Button>
              <Button variation="primary">
                <Link to="signup">Sign Up</Link>
              </Button>
            </>
          )}
        </ButtonGroup>
      </div>
    </div>
  );
}
export default Hero;
