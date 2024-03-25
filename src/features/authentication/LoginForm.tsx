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
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="ime@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variation="primary" type="submit">
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
