import { ProductsType } from '../../types/collection';

type ProductItemType = {
  product: ProductsType;
};

function ProductItem({ product }: ProductItemType) {
  return (
    <div className="overflow-hidden bg-white shadow-md">
      <img
        src="../public/jordan1.jpg"
        alt="${product.ime}"
        className="h-64 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{product.brand}</h3>
        <p className="mb-2 text-gray-600">M</p>{' '}
        <p className="font-semibold text-gray-900">2500DIN</p>{' '}
      </div>
    </div>
  );
}

export default ProductItem;
