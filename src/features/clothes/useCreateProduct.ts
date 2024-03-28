import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct as apiCreateProduct } from '../../services/apiProducts';
import toast from 'react-hot-toast';

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate: createProduct, isPending: isCreating } = useMutation({
    mutationFn: apiCreateProduct,

    onSuccess: () => {
      toast.success('Uspešno kreiran novi produkt!');
      queryClient.invalidateQueries({ queryKey: ['myProducts'] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProduct };
}
