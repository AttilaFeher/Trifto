import { useMutation } from '@tanstack/react-query';
import { signup as apiSignup } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: apiSignup,
    onSuccess: (user) => {
      toast.success('Molimo vas da potvrdite vaš nalog na vašem mailu.');
    },
  });

  return { signup, isPending };
}
