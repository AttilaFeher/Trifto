import { ProductsType } from '../../types/collection';

type ProductItemType = {
  product: ProductsType;
};

function ProductItem({ product }: ProductItemType) {
  return <li>{product.brand}</li>;
}

export default ProductItem;
