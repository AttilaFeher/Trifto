import { ProductsType } from '../../types/collection';

type ProductItemType = {
  product: ProductsType;
};

function ProductItem({ product }: ProductItemType) {
  return (
    <div className="transform overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src="../public/jordan1.jpg"
        className="h-64 w-full rounded-t-lg object-cover"
      />
      <div className="p-4">
        <div className="absolute left-[225px] top-[18px] rounded-full bg-black bg-opacity-25 p-3 font-medium text-white">
          NS
        </div>
        <h3 className="mb-1 text-lg font-semibold">{product.title} </h3>
        <p className=" text-gray-600">{product.description}</p>
        <div className="flex- mt-4 flex justify-between">
          <p className="font-medium text-gray-500">{product.price} DIN</p>
          <p className=" font-medium text-gray-500">M</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
