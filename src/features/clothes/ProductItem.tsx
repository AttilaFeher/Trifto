import { Link } from 'react-router-dom';
import { ProductsType } from '../../types/collection';
import { useUserInfo } from '../authentication/useUserInfo';

type ProductItemType = {
  product: ProductsType;
};

function ProductItem({ product }: ProductItemType) {
  const { price, title, description, id, user_id } = product;
  // const { userInfo } = useUserInfo({ userId: user_id });

  return (
    <li className="transform overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={id.toString()}>
        <img
          src="../public/jordan1.jpg"
          className="h-64 w-full rounded-t-lg object-cover"
        />
        <div className="p-4">
          <div className="absolute left-[225px] top-[18px] rounded-full bg-black bg-opacity-25 p-3 font-medium text-white">
            NS
          </div>
          <h3 className="mb-2 text-lg font-semibold">{title} </h3>
          <p className=" text-gray-600">{description}</p>
          <div className="flex- mt-4 flex justify-between">
            <p className="font-medium text-gray-500">{price} DIN</p>
            <p className=" font-medium text-gray-500">M</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
