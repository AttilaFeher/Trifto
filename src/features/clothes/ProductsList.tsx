import { Element } from 'react-scroll';
import ProductItem from './ProductItem';
import { useProducts } from './useProducts';

function ProductsList() {
  const { isPending, products } = useProducts();

  if (isPending || !products?.data) return null;

  return (
    <Element name="productList">
      <ul>
        {products?.data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
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
