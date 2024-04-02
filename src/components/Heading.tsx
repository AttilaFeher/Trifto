import { ReactNode } from 'react';

type HeadingType = {
  type: 'h1' | 'h2';
  className?: string;
  children: ReactNode;
};

function Heading({ type, children, className = '' }: HeadingType) {
  if (type === 'h1')
    return (
      <h1 className={`text-3.2xl  text-6xl font-bold ${className}`}>
        {children}
      </h1>
    );
  if (type === 'h2')
    return <h2 className={`text-4xl font-bold ${className}`}>{children}</h2>;
}

export default Heading;
