import Hero from '../components/Hero';
import Main from '../components/Main';
import ProductsList from '../features/clothes/ProductsList';

function Products() {
  return (
    <>
      <Hero />
      <Main>
        <ProductsList />
      </Main>
    </>
  );
}

export default Products;
