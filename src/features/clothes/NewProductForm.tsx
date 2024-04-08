import { useForm } from 'react-hook-form';
import FormRowVertical from '../../components/FormRow';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ProductsInsertType } from '../../types/collection';
import { useCreateProduct } from './useCreateProduct';

function NewProductForm() {
  const { isCreating, createProduct } = useCreateProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductsInsertType>();

  function onSubmit(data: ProductsInsertType) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Naziv" error={errors.title?.message}>
        <Input
          placeholder="Naziv proizvoda"
          id="title"
          disabled={isCreating}
          {...register('title', {
            required: 'This field is required',
          })}
        />
      </FormRowVertical>

      <Button type="submit" variation="primary">
        Postavi novi proizvod
      </Button>
    </form>
  );
}

export default NewProductForm;
