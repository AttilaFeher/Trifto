import Main from '../components/Main';
import NewProductForm from '../features/clothes/NewProductForm';

function NewProduct() {
  return (
    <div className="mx-[320px]">
      <Main>
        <NewProductForm />
      </Main>
    </div>
  );
}

export default NewProduct;
