import { Link } from 'react-router-dom';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import { useUser } from '../features/authentication/useUser';
import Heading from './Heading';
import { Link as LinkScroll } from 'react-scroll';
import { FaAnglesDown } from 'react-icons/fa6';

function Hero() {
  const { isAuthenticated } = useUser();
  return (
    <div
      className="flex h-[32rem] items-center rounded-sm bg-no-repeat"
      style={{ backgroundImage: 'url(../../public/HeroImage.png)' }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col text-white">
        <div className="px-10">
          <Heading type="h1" className="pb-6">
            Korak Po Korak do <br /> Savršenog Garderobera
          </Heading>
          <p className="w-1/2 pb-8 text-xl">
            Istražite i prodajte stilizovanu odeću lako na našoj online
            prodavnici. Otkrijte najnovije modne trendove ili jednostavno
            predstavite svoje sopstvene dizajne.
          </p>
          <ButtonGroup>
            {isAuthenticated ? (
              <>
                <Button variation="secondary">
                  <Link to="/products/new">Prodaj novo</Link>
                </Button>
                <LinkScroll to="productList" smooth={true} duration={300}>
                  <Button
                    variation="primary"
                    className="flex items-center gap-2"
                  >
                    Kupi novo <FaAnglesDown />
                  </Button>
                </LinkScroll>
              </>
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
