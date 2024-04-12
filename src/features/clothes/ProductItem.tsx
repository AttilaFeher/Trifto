import { Link } from 'react-router-dom';
import { ProductsType } from '../../types/collection';
import { useUserInfo } from '../authentication/useUserInfo';

type ProductItemType = {
  product: ProductsType;
};

function ProductItem({ product }: ProductItemType) {
  const { price, brand, id, user_id } = product;
  const { userInfo } = useUserInfo({ userId: user_id });

  return (
    <div className="overflow-hidden bg-white shadow-md">
      <img
        src="../public/jordan1.jpg"
        alt="${product.ime}"
        className="h-64 w-full object-cover"
      />

      <div className="p-4">
        {userInfo?.nickname}
        <Link to={id.toString()}>
          <h3 className="mb-2 text-lg font-semibold">{brand}</h3>
        </Link>
        <p className="mb-2 text-gray-600">M</p>
        <p className="font-semibold text-gray-900">{price}DIN</p>
      </div>
    </div>
  );
}

export default ProductItem;
