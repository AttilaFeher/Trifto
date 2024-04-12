import { Element } from 'react-scroll';
import ProductItem from './ProductItem';
import { useProducts } from './useProducts';

function ProductsList() {
  const { isPending, products } = useProducts();

  if (isPending || !products?.data) return null;

  return (
    <Element name="productList">
      <h1 className="mx-[320px] mb-4 mt-8 text-xl font-bold">
        Najnoviji proizvodi
      </h1>
      <ul className="mx-[320px] grid grid-cols-4 gap-4">
        {products?.data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        {/* {products?.data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        {products?.data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))} */}
        {/* <div>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
        </div> */}
      </ul>
    </Element>
  );
}

export default ProductsList;
