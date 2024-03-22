import { ChildrenType } from '../types/reusableTypes';

function ButtonGroup({ children }: ChildrenType) {
  return <div className="space-x-4">{children}</div>;
}

export default ButtonGroup;
