import { Element } from 'react-scroll';
import ProductItem from './ProductItem';
import { useProducts } from './useProducts';

function ProductsList() {
  const { isPending, products } = useProducts();

  if (isPending || !products?.data) return null;

  return (
    <Element name="productList">
      <div className="m-auto max-w-[1200px]">
        <h1 className="mb-4 mt-8 text-2xl font-bold">Najnoviji proizvodi</h1>
        <ul className="grid cursor-pointer grid-cols-4 gap-4">
          {products?.data.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </Element>
  );
}

export default ProductsList;
