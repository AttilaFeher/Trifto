import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <img src="../src/assets/triftologo.svg" alt="" className="h-16" />
        <h1 className="text-4xl font-bold">Trifto</h1>
      </Link>
    </div>
  );
}

export default Logo;
