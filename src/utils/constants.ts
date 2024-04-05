import { GenderType } from '../types/collection';

export type CategoryOptionsType = {
  value: Exclude<GenderType, null | undefined>;
  label: string;
}[];

export const categoryOptions: CategoryOptionsType = [
  { value: 'unisex', label: 'Univerzalno' },
  { value: 'men', label: 'Muško' },
  { value: 'women', label: 'Žensko' },
  { value: 'children-boy', label: 'Dečaci' },
  { value: 'children-girl', label: 'Devojčice' },
];

// const categoryOptionsValues: Record<
//   Exclude<GenderType, null | undefined>,
//   string
// > = {
//   unisex: 'Univerzalno',
//   men: 'Muško',
//   women: 'Žensko',
//   'children-boy': 'Dečaci',
//   'children-girl': 'Devojčice',
// };

// export type CategoryOptionsType = Array<
//   [Exclude<GenderType, null | undefined>, string]
// >;

// export const categoryOptions = Object.entries(
//   categoryOptionsValues,
// ) as CategoryOptionsType;
