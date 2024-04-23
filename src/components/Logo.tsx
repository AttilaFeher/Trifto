import { Link } from 'react-router-dom';
import Heading from './Heading';

function Logo() {
  return (
    <div className="flex items-center">
      <Link to="/products" className="flex items-center">
        <img src="../public/thriftop.png" alt="Logo image" className="h-12" />
        <Heading type="h2" className="ml-2">
          Thriftop
        </Heading>
      </Link>
    </div>
  );
}

export default Logo;
