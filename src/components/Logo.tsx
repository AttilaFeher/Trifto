import { Link } from 'react-router-dom';
import Heading from './Heading';

function Logo() {
  return (
    <div className="flex items-center">
      <Link to="/products" className="flex items-center">
        <img
          src="../src/assets/triftologo.svg"
          alt="Logo image"
          className="h-16"
        />
        <Heading type="h2">Trifto</Heading>
      </Link>
    </div>
  );
}

export default Logo;
