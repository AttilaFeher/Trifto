import { ProductsInsertType } from '../types/collection';
import supabase from './supabase';

export async function getProducts({ userId }: { userId: string }) {
  let { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('user_id', userId);

  return { data, error };
}

type CreateProductType = {
  product: ProductsInsertType;
};

export async function createProduct({ product }: CreateProductType) {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select();

  return { data, error };
}
