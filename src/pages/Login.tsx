import Heading from '../components/Heading';
import LoginForm from '../features/authentication/LoginForm';

function Login() {
  return (
    <div className="text mx-auto mt-12 flex w-[1024px] items-center shadow-xl">
      <div className="flex-col p-8">
        <Heading type="h2">Uloguj Se</Heading>
        <p className="mb-4 mt-2">
          Molimo vas da se prijavite kako biste nastavili sa svojim nalogom.
        </p>
        <LoginForm />
      </div>
      <img src="../../public/login.png" />
    </div>
  );
}

export default Login;
