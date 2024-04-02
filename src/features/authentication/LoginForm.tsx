import { FormEvent, useState } from 'react';
import { useLogin } from './useLogin';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Link, useLocation } from 'react-router-dom';
import { useSignup } from './useSignup';
import LineText from '../../components/LineText';
import toast from 'react-hot-toast';
import FormRowVertical from '../../components/FormRowVertical';
import { useLoginGoogle } from './useLoginGoogle';

function LoginForm() {
  const { pathname } = useLocation();
  const isSignup = pathname === '/signup';
  const { login, isLogging } = useLogin();
  const { loginGoogle, isLogging: isLoggingGoogle } = useLoginGoogle();
  const { signup, isPending } = useSignup();
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('123123');
  const [passwordConfirm, setPasswordConfirm] = useState('123123');
  const isLoading = isLogging || isPending || isLoggingGoogle;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password)
      return toast.error('Uneli ste neispravan mail ili lozinku!');

    const userEmailPass = { email, password };
    if (!isSignup) {
      login(userEmailPass);
    } else {
      if (password !== passwordConfirm) toast.error('Unesite iste lozinke!');
      else signup(userEmailPass);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormRowVertical label="Ime:">
        <Input
          placeholder="ime@gmail.com"
          value={email}
          id="name"
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Lozinka:">
        <Input
          placeholder="password"
          value={password}
          type="password"
          id="password"
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      {isSignup && (
        <FormRowVertical label="Potvrdi lozinku:">
          <Input
            placeholder="password"
            value={passwordConfirm}
            type="password"
            id="passwordConfirm"
            disabled={isLoading}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </FormRowVertical>
      )}
      <input className="mt-4 inline-block" type="checkbox"></input> Ostani
      priljavjen/a
      <div className="mt-4 flex flex-col items-center">
        <Button
          type="submit"
          variation="primary"
          className="w-full"
          isDisable={isLoading}
        >
          Prijavi se
        </Button>
        <LineText>ili</LineText>
        <Button
          variation="secondary"
          type="button"
          className="mx-auto mt-2 flex w-full items-center justify-center gap-4"
          isDisable={isLoading}
          onClick={loginGoogle}
        >
          Uloguj se preko googla
          <svg
            className="h-[32px] w-[32px]"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
        </Button>

        <p className="mt-8">
          {!isSignup ? (
            <>
              Potrebna vam je nalog?
              <span className="text-blue-500">
                &nbsp;&nbsp;<Link to="/signup">Napravite nalog</Link>
              </span>
            </>
          ) : (
            <>
              Imate postojeći nalog?
              <span className="text-blue-500">
                &nbsp;&nbsp;<Link to="/login">Logujte se</Link>
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
