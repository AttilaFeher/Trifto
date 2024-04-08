import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiProducts';

export function useProducts() {
  const { data: products, isPending } = useQuery({
    queryKey: ['myProducts'],
    queryFn: getProducts,
  });

  return { isPending, products };
}
