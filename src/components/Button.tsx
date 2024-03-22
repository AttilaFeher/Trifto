import { ReactNode } from 'react';

const buttonStyles = {
  primary:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-5 rounded  border-none', //Blue
  secondary:
    'text-black hover:text-black font-bold py-2.5 px-5 rounded border-none  hover:border-2', //White
};

type ButtonType = {
  variation: 'primary' | 'secondary';
  type?: 'submit';
  onClick?: () => void;
  children: ReactNode;
};

function Button({ variation, onClick, type, children }: ButtonType) {
  return (
    <button className={buttonStyles[variation]} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
