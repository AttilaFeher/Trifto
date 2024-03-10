import { useState } from "react";
import { useLogin } from "../features/authentication/useLogin";
import Chats from "./Chats";

function Login() {
  const [click, setClick] = useState(false);
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123123");

  if (isLoading) return;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login({ email, password });
        setClick(true);
      }}>
      <input
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">s</button>
      {click && <Chats />}
    </form>
  );
}

export default Login;
