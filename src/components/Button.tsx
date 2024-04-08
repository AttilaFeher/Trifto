import { ReactNode } from 'react';

const buttonStyles = {
  primary:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-5 rounded  border-none', //Blue
  secondary:
    'hover:bg-gray-100 bg-white text-black font-bold py-2.5 px-5 rounded', //White
  icon: 'py-2 px-2 rounded hover:bg-gray-200',
};

type ButtonType = {
  variation: 'primary' | 'secondary' | 'icon';
  type?: 'submit' | 'button';
  className?: string;
  onClick?: () => void;
  isDisable?: boolean;
  children: ReactNode;
};

function Button({
  variation,
  onClick,
  type,
  isDisable = false,
  className,
  children,
}: ButtonType) {
  return (
    <button
      className={`${buttonStyles[variation]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={isDisable}
    >
      {children}
    </button>
  );
}

export default Button;
