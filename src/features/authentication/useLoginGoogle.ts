import { useMutation } from '@tanstack/react-query';
import { loginGoogle as apiLoginGoogle } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useLoginGoogle() {
  const { mutate: loginGoogle, isPending: isLogging } = useMutation({
    mutationFn: apiLoginGoogle,
    onSettled: () => toast.loading('Izaberite mail preko koga se logujete.'),
    // onSuccess: (user) => {
    //   console.log(user);
    //   queryClient.setQueryData(['user'], user.provider);
    //   navigate('/products', { replace: true });
    //   toast.success('Uspešno ste prijavljeni!');
    // },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password are incorect');
    },
  });

  return { loginGoogle, isLogging };
}
