import { useParams } from 'react-router-dom';
import { useProducts } from './useProducts';

export function useProduct() {
  const { productId } = useParams();
  const { products, isPending } = useProducts();

  if (!products?.data || !productId || isPending) return { product: null };
  const product = products.data.find((item) => item.id === +productId);
  return { product };
}
