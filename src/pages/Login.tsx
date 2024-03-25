import LoginForm from '../features/authentication/LoginForm';

function Login() {
  return (
    <div className="flex">
      <LoginForm />
      <div>
        <img src="../../public/HeroImage.png" />
      </div>
    </div>
  );
}

export default Login;
