import { Link } from 'react-router-dom';

function HeaderNav() {
  return (
    <ul className="flex gap-8">
      <li>
        <Link to="">Women</Link>
      </li>
      <li>
        <Link to="">Men</Link>
      </li>
      <li>
        <Link to="">Kids</Link>
      </li>
      <li>
        <Link to="">Brands</Link>
      </li>
    </ul>
  );
}

export default HeaderNav;
