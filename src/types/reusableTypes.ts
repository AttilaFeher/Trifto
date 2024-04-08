import { ReactElement, ReactNode } from 'react';

export type ChildrenType = {
  children: ReactNode;
};

export type FormRowType = {
  label: string;
  error?: string;
  children: ReactElement<HTMLInputElement>;
};
