import { ReactNode } from 'react';

const buttonStyles = {
  primary: '', //Blue
  secondary: '', //White
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
