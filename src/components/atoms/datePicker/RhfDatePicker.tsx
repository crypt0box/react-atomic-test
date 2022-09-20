import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { RhfTextField } from "src/components/atoms/textFiled/RhfTextField";
import { useState } from "react";

export type RhfDatePickerProps<T extends FieldValues> = UseControllerProps<T>;

export const RhfDatePicker = <T extends FieldValues>(
  props: RhfDatePickerProps<T>
) => {
  const { name, control } = props;
  const [dateValue, setDateValue] = useState<string>("");
  return (
    <DatePicker
      value={dateValue}
      onChange={(e) => setDateValue(e || "")}
      inputFormat="yyyy年MM月dd日"
      mask="____年__月__日"
      renderInput={(params) => (
        <RhfTextField
          {...params}
          defaultValue={undefined}
          name={name}
          control={control}
        />
      )}
    />
  );
};
