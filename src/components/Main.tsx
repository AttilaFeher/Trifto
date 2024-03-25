import { ChildrenType } from '../types/reusableTypes';

function Main({ children }: ChildrenType) {
  return <div className="mx-auto mb-64 px-10">{children}</div>;
}

export default Main;
