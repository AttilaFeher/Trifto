import { Outlet, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import Main from '../components/Main';
import ProductsList from '../features/clothes/ProductsList';

function Products() {
  const { productId } = useParams();
  return (
    <>
      {productId ? <Outlet /> : <Hero />}
      <Main>
        <ProductsList />
      </Main>
    </>
  );
}

export default Products;
