import { FormEvent, useState } from 'react';
import { useLogin } from './useLogin';
import Button from '../../components/Button';
import Input from '../../components/Input';

function LoginForm() {
  const { login, isPending } = useLogin();
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('123123');

  if (isPending) return;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    // <form className="max-w-sm">
    //   <div className="mb-5">
    //     <label
    //       htmlFor="email"
    //       className="text-gray-90 mb-2 block text-sm font-medium"
    //     >
    //       Vaša email adresa
    //     </label>
    //     <input
    //       type="email"
    //       id="email"
    //       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    //       placeholder="ime@domen.com"
    //       required
    //     />
    //   </div>
    //   <div className="mb-5">
    //     <label className="text-gray- mb-2 block text-sm font-medium">
    //       Vaša lozinka
    //     </label>
    //     <input
    //       type="password"
    //       id="password"
    //       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    //       required
    //     />
    //   </div>
    //   <div className="mb-5 flex items-start">
    //     <div className="flex h-5 items-center">
    //       <input
    //         id="remember"
    //         type="checkbox"
    //         value=""
    //         className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
    //         required
    //       />
    //     </div>
    //     <label
    //       htmlFor="remember"
    //       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //     >
    //       Zapamti me
    //     </label>
    //   </div>
    //   <button
    //     type="submit"
    //     className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //   >
    //     Potvrdi
    //   </button>
    // </form>

    <form onSubmit={handleSubmit}>
      <label>Ime</label>
      <Input
        placeholder="ime@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="mt-2 block">Lozinka</label>
      <Input
        placeholder="password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input className="mt-4 inline-block" type="checkbox"></input> Ostani
      priljavjen/a
      <div className="align-center flex flex-col items-center">
        <div className="mt-4 w-full">
          <Button type="submit" variation="primary" className="w-full">
            Uloguj se
          </Button>
        </div>
        <div className="mb-2 mt-2 flex items-center gap-4">
          <span className="h-[2px] w-[228px] bg-gray-500"></span> ili
          <span className="h-[2px] w-[228px] bg-gray-500"> </span>
        </div>
        <Button
          variation="secondary"
          className="mx-auto mt-2 flex w-full items-center justify-center gap-4"
        >
          Uloguj se sa googleom{' '}
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
          Potrebna vam je nalog?{' '}
          <span className="text-blue-500">
            <a href="signup">Napravite ga</a>
          </span>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
