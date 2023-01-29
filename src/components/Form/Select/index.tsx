import { ReactNode } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from "@mui/material";
// import {SelectChangeEvent} from "@mui/material/Select/SelectInput";
import { FieldPath, FieldValues } from "react-hook-form";

export interface ISelectOption {
  value: string | number;
  label: ReactNode;
}

type TSelectProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = {
  name: TName;
  label: string;
  options: ISelectOption[];
  // onChange: (value: string) => void,
  hasNoneOption: boolean;
} & Omit<SelectProps, "error">;

export function Select<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  name,
  label,
  options,
  // onChange,
  hasNoneOption = true,
}: TSelectProps<TFieldValues, TName>): JSX.Element {
  // const [value, setValue] = useState<ISelectOption["value"]>(hasNoneOption ? "" : options[0].value);

  // const onSelectChange = ({ target: { value : _value } }: SelectChangeEvent<HTMLSelectElement>) => {
  //   setValue(_value);
  //
  //   if (onChange) {
  //     onChange(_value);
  //   }
  // };

  return (
    <FormControl variant="standard" sx={{ minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <MuiSelect
        id="demo-simple-select-standard"
        name={name}
        // value={value}
        // onChange={onSelectChange}
        label="Age"
      >
        {hasNoneOption && (
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
