import Heading from '../components/Heading';
import Main from '../components/Main';
import LoginForm from '../features/authentication/LoginForm';

function Login() {
  return (
    <Main>
      <div className="mx-auto my-12 grid max-w-[1024px] grid-cols-2 shadow-xl">
        <div className="p-8">
          <Heading type="h2">Prijavi</Heading>
          <p className="mb-4 mt-2">
            Molimo vas da se prijavite kako biste nastavili sa svojim nalogom.
          </p>
          <LoginForm />
        </div>
        <div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(../../public/login.png)' }}
          role="img"
        >
          &nbsp;
        </div>
      </div>
    </Main>
  );
}

export default Login;
