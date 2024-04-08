import { FormRowType } from '../types/reusableTypes';

function FormRowVertical({ label, error, children }: FormRowType) {
  return (
    <div className="flex flex-col gap-2 py-3">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span>{error}</span>}
    </div>
  );
}

export default FormRowVertical;
