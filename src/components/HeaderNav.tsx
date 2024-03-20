import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <nav>
      <ul>
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
    </nav>
  );
}

export default HeaderNav;
