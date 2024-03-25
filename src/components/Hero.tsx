import { Link } from 'react-router-dom';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import { useUser } from '../features/authentication/useUser';
import Heading from './Heading';

function Hero() {
  const { isAuthenticated } = useUser();
  return (
    <div
      className="flex h-[32rem] items-center"
      style={{ backgroundImage: "url('../src/assets/HeroImage.png')" }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col text-white">
        <div className="px-16">
          <Heading type="h1" className="pb-10">
            Korak Po Korak do <br /> Savršenog Garderobera
          </Heading>
          <p className="w-1/2 text-xl">
            Istražite i prodajte stilizovanu odeću lako na našoj online
            prodavnici. Otkrijte najnovije modne trendove ili jednostavno
            predstavite svoje sopstvene dizajne.
          </p>
          <ButtonGroup>
            {isAuthenticated ? (
              <Button variation="primary">
                <Link to="/chats">Contact</Link>
              </Button>
            ) : (
              <>
                <Button variation="secondary">
                  <Link to="/login">Log In</Link>
                </Button>
                <Button variation="primary">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
export default Hero;
