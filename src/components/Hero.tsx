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
          Korak Po Korak do<br></br> Savršenog Garderobera
        </h1>
        <p className="w-1/2 text-xl ">
          Istražite i prodajte stilizovanu odeću lako na našoj online
          prodavnici. Otkrijte najnovije modne trendove ili jednostavno
          predstavite svoje sopstvene dizajne.
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
