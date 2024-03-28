import { ReactNode } from 'react';

const buttonStyles = {
  primary:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-5 rounded  border-none', //Blue
  secondary:
    'bg-neutral-200 opacity-70 hover:bg-neutral-500 text-black hover:text-black font-bold py-2.5 px-5 rounded border-none  hover:border-2', //White
  icon: 'py-2 px-2 rounded hover:bg-gray-200',
};

type ButtonType = {
  variation: 'primary' | 'secondary' | 'icon';
  type?: 'submit';
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

function Button({ variation, onClick, type, className, children }: ButtonType) {
  return (
    <button
      className={`${buttonStyles[variation]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
