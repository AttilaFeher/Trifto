import { Controller, useForm } from 'react-hook-form';
import FormRowVertical from '../../components/FormRow';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ProductsInsertType } from '../../types/collection';
import { useCreateProduct } from './useCreateProduct';
import { useUser } from '../authentication/useUser';
import {
  CategoryOptionsType,
  GenderOptionsType,
  categoryOptions,
  genderOptions,
} from '../../utils/constants';
import ReactSelect from 'react-select';
import TextArea from '../../components/TextArea';

type NewProductFormType = {
  title: string;
  category: CategoryOptionsType;
  brand: string;
  description: string;
  gender: GenderOptionsType;
  price: number;
};

const defaultValues: NewProductFormType = {
  title: '',
  category: categoryOptions[0],
  brand: '',
  description: '',
  gender: genderOptions[0],
  price: 1,
};

function NewProductForm() {
  const { userId } = useUser();
  const { isCreating, createProduct } = useCreateProduct();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  function onSubmit(data: NewProductFormType) {
    const newProduct: ProductsInsertType = {
      ...data,
      gender: data.gender.value,
      category: data.category.value,
      user_id: userId,
    };
    createProduct(newProduct, { onSuccess: () => reset() });
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
              placeholder="Beli Nike Tracksuit"
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
              placeholder="Nike"
              id="brand"
              disabled={isCreating}
              {...field}
            />
          )}
        />
      </FormRowVertical>
      <FormRowVertical label="Deskripcija" error={errors.description?.message}>
        <Controller
          name="description"
          control={control}
          rules={{
            required: 'Ovo polje je obavezno!',
          }}
          render={({ field }) => (
            <TextArea
              placeholder="Majica je nova crne boje, velicine M..."
              id="description"
              disabled={isCreating}
              {...field}
            />
          )}
        />
      </FormRowVertical>
      <FormRowVertical label="Kategorija" error={errors.category?.message}>
        <Controller
          name="category"
          control={control}
          rules={{
            required: 'Ovo polje je obavezno!',
          }}
          render={({ field }) => (
            <ReactSelect
              options={categoryOptions}
              {...field}
              placeholder="Majice"
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
          render={({ field }) => (
            <ReactSelect
              options={genderOptions}
              {...field}
              placeholder="Univerzalno"
            />
          )}
        />
      </FormRowVertical>
      <FormRowVertical label="Cena (DIN)" error={errors.price?.message}>
        <Controller
          name="price"
          control={control}
          rules={{
            required: 'Ovo polje je obavezno!',
            min: { value: 1, message: 'Unesite pozitivan broj.' },
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
