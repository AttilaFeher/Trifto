import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import { useProduct } from './useProduct';
import { useChats } from '../chats/useChats';

function ProductDetail() {
  const { product } = useProduct();
  const { chats, isLoading } = useChats();
  const navigate = useNavigate();

  if (!product || isLoading) return <Heading type="h2">No product</Heading>;

  const chatId =
    chats?.data.find((chat) =>
      chat.user_ids?.find((chatUser) => chatUser === product.user_id),
    )?.chat_id || `new/${product.user_id}`;
  // console.log(chats);
  // console.log(
  //   chats?.data.find((chat) =>
  //     chat.user_ids?.find((chatUser) => chatUser === product.user_id),
  //   ),
  // );
  // console.log(
  //   chats?.data.find((chat) =>
  //     chat.user_ids?.find((chatUser) => chatUser === product.user_id),
  //   )?.chat_id || `new/${product.user_id}`,
  // );
  // console.log(chatId);
  const {
    user_id,
    title,
    brand,
    price,
    category,
    description,
    created_at,
    gender,
  } = product;

  return (
    <div>
      <Heading type="h2">{title}</Heading>
      {/* <Link
        to={`/chats/${chatId !== 'new' ? chatId : createChat({ newChat: {}, user_id: Number(product.user_id) })}`}
      > */}
      <Button variation="primary" onClick={() => navigate(`/chats/${chatId}`)}>
        Pošalji poruku
      </Button>
      {/* </Link> */}
    </div>
  );
}

export default ProductDetail;
