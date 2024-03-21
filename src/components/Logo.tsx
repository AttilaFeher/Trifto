function Logo() {
  return (
    <div className="flex items-center">
      <a
        href=""
        className="flex items-center"
        onClick={() => window.location.reload()}
      >
        <img src="../src/assets/triftologo.svg" alt="" className="h-16" />
        <h1 className="text-4xl font-bold">Trifto</h1>
      </a>
    </div>
  );
}

export default Logo;
