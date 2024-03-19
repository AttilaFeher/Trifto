type InputType = {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function Input({ placeholder, value, setValue }: InputType) {
  return (
    <input
      type="text"
      className="text-3xl underline"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;
