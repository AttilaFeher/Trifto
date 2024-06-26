import { ProductsInsertType } from '../types/collection';
import supabase from './supabase';

// export async function getProducts({ userId }: { userId: string }) {
export async function getProducts() {
  let { data, error } = await supabase.from('products').select('*');
  // .eq('user_id', userId);

  return { data, error };
}

export async function createProduct(product: ProductsInsertType) {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select();

  return { data, error };
}
