import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiProducts';
import { useUser } from '../authentication/useUser';

export function useProducts() {
  const { userId } = useUser() as { userId: string };

  const { data: products, isPending: isCreating } = useQuery({
    queryKey: ['myProducts'],
    queryFn: () => getProducts({ userId }),
  });

  return { isCreating, products };
}
