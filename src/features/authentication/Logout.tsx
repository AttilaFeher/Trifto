import { useLogout } from './useLogout';
import Button from '../../components/Button';

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <Button variation="primary" onClick={logout}>
      {isPending ? 'Loging out...' : 'Log Out'}
    </Button>
  );
}

export default Logout;
