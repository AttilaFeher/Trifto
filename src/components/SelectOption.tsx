// import { forwardRef } from 'react';
// import { inputVariation } from '../styles/inputStyles';
// import { CategoryOptionsType } from '../utils/constants';

import ReactSelect from 'react-select';

// type SelectOptionType = {
//   options: CategoryOptionsType;
// };

// function SelectOption(
//   { options }: SelectOptionType,
//   ref: React.Ref<HTMLSelectElement>,
// ) {
//   // console.log(options);
//   return (
//     <select className={inputVariation.primary} ref={ref}>
//       {options.map(({ value, label }) => (
//         <option key={value} value={value} label={label} />
//       ))}
//     </select>
//   );
// }

// export default forwardRef<HTMLSelectElement, SelectOptionType>(SelectOption);
type OptionType = {
  value: string;
  label: string;
};

function SelectOption<
  Option extends OptionType,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: SelectProps<Option, IsMulti, Group> & { myCustomProp: string }) {
  // You can customize the theme or any other properties here
  return (
    <ReactSelect
      {...props}
      theme={(theme) => ({ ...theme, borderRadius: 0 })}
    />
  );
}

export default SelectOption;
