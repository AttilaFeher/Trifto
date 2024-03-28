import { ChildrenType } from '../types/reusableTypes';

function Main({ children }: ChildrenType) {
  return <main className="mx-auto">{children}</main>;
}

export default Main;
