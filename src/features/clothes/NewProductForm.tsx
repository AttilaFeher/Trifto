import { Controller, useForm } from 'react-hook-form';
import FormRowVertical from '../../components/FormRow';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ProductsInsertType } from '../../types/collection';
import { useCreateProduct } from './useCreateProduct';
import { useUser } from '../authentication/useUser';
import SelectOption from '../../components/SelectOption';
import { categoryOptions } from '../../utils/constants';
import ReactSelect from 'react-select';

const initialValues: ProductsInsertType = {
  title: '',
  category: 't-shirt',
  brand: '',
  description: '',
  gender: 'unisex',
  price: 1,
};
type OptionType = {
  value: string;
  label: string;
};

const categoryOptionss: OptionType[] = [
  { value: 'unisex', label: 'Univerzalno' },
  { value: 'men', label: 'Muško' },
  { value: 'women', label: 'Žensko' },
  { value: 'children-boy', label: 'Dečaci' },
  { value: 'children-girl', label: 'Devojčice' },
];
const groupedOptions = [
  {
    label: 'Gender',
    options: categoryOptionss.map((option) => ({
      label: option.label,
      value: option.value,
    })),
  },
];

function NewProductForm() {
  const { userId } = useUser();
  const { isCreating, createProduct } = useCreateProduct();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { ...initialValues, user_id: userId },
  });

  function onSubmit(data: ProductsInsertType) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Naziv" error={errors.title?.message}>
        <Controller
          name="title"
          control={control}
          rules={{ required: 'Ovo polje je obavezno!' }}
          render={({ field }) => (
            <Input
              placeholder="Nike"
              id="title"
              disabled={isCreating}
              {...field}
            />
          )}
        />
      </FormRowVertical>
      <FormRowVertical label="Brend" error={errors.brand?.message}>
        <Controller
          name="brand"
          control={control}
          rules={{ required: 'Ovo polje je obavezno!' }}
          render={({ field }) => (
            <Input
              placeholder="1000"
              id="brand"
              type="text"
              disabled={isCreating}
              {...field}
            />
          )}
        />
      </FormRowVertical>
      <FormRowVertical label="Pol" error={errors.gender?.message}>
        <Controller
          name="gender"
          control={control}
          rules={{
            required: 'Ovo polje je obavezno!',
          }}
          render={({ field }) => {
            console.log(field);
            return <ReactSelect {...field} options={categoryOptions} />;
            // return <SelectOption options={categoryOptions} {...field} />;
          }}
        />
      </FormRowVertical>
      <FormRowVertical label="Cena" error={errors.price?.message}>
        <Controller
          name="price"
          control={control}
          rules={{
            required: 'Ovo polje je obavezno!',
            min: { value: 1, message: 'Enter a positive number.' },
          }}
          render={({ field }) => (
            <Input
              placeholder="1000"
              id="price"
              type="number"
              disabled={isCreating}
              {...field}
            />
          )}
        />
      </FormRowVertical>

      <Button type="submit" variation="primary">
        Postavi novi proizvod
      </Button>
    </form>
  );
}

export default NewProductForm;
