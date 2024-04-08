import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLogging } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(['user'], user.user);
      navigate('/products', { replace: true });
      toast.success('Successfully loged in!');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password are incorect');
    },
  });

  return { login, isLogging };
}
