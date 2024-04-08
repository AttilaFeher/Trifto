import { ChildrenType } from '../types/reusableTypes';

function Main({ children }: ChildrenType) {
  return <main className="mx-auto px-6">{children}</main>;
}

export default Main;
