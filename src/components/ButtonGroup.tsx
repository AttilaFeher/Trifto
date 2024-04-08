import { ChildrenType } from '../types/reusableTypes';

function ButtonGroup({ children }: ChildrenType) {
  return <div className="flex gap-4">{children}</div>;
}

export default ButtonGroup;
