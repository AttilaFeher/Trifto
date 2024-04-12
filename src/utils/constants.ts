import { CategoryType, GenderType } from '../types/collection';

export type GenderOptionsType = {
  value: Exclude<GenderType, null | undefined>;
  label: string;
};

export const genderOptions: GenderOptionsType[] = [
  { value: 'unisex', label: 'Univerzalno' },
  { value: 'men', label: 'Muško' },
  { value: 'women', label: 'Žensko' },
  { value: 'children-boy', label: 'Dečaci' },
  { value: 'children-girl', label: 'Devojčice' },
];

export type CategoryOptionsType = {
  value: Exclude<CategoryType, null | undefined>;
  label: string;
};

export const categoryOptions: CategoryOptionsType[] = [
  { value: 't-shirt', label: 'Majice' },
  { value: 'hoodie', label: 'Hoodie' },
  { value: 'jeans', label: 'Farmerke' },
  { value: 'shorts', label: 'Šorcevi' },
  { value: 'pants', label: 'Pantalone' },
  { value: 'skirts', label: 'Suknje' },
  { value: 'sweatshirts', label: 'Duksevi' },
  { value: 'boots', label: 'Čizme' },
  { value: 'shoes', label: 'Cipele' },
  { value: 'sneakers', label: 'Patike' },
  { value: 'sport-shoes', label: 'Sportske patike' },
];
