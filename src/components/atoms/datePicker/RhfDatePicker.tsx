import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { RhfTextField } from "src/components/atoms/textFiled/RhfTextField";
import { useState } from "react";
import { parse } from "date-fns";

/** 日付フォーマットyyyy/MM/ddを文字列とみなした時の長さは10 */
const DATE_FORMAT_LENGTH = 10;

export type RhfDatePickerProps<T extends FieldValues> = UseControllerProps<T>;

export const RhfDatePicker = <T extends FieldValues>(
  props: RhfDatePickerProps<T>
) => {
  const { name, control } = props;
  const {
    field: { onChange },
  } = useController<T>({ name, control });
  const [dateValue, setDateValue] = useState<Date | null>(null);

  const onSelectDate = (e: Date | null) => {
    setDateValue(e);
    onChange(e);
  };

  const onChangeText = (value: string) => {
    // MUIのDatePickerはデフォルトで10文字より多く入力できてしまうため、10文字を超えた分は省略する
    // ex) yyyy/MM/dd{任意の文字}のように入力できてしまう
    if (value.length > DATE_FORMAT_LENGTH) {
      onChange(
        parse(value.slice(0, DATE_FORMAT_LENGTH), "yyyy/MM/dd", new Date())
      );
      return;
    }
    onChange(parse(value, "yyyy/MM/dd", new Date()));
  };
  return (
    <DatePicker
      value={dateValue}
      onChange={(e: Date | null) => onSelectDate(e)}
      renderInput={(params) => (
        <RhfTextField
          {...params}
          inputProps={{
            ...params.inputProps,
            placeholder: "日付を選択してください",
          }}
          onChange={(e) => onChangeText(e.target.value)}
          defaultValue={undefined}
          name={name}
          control={control}
        />
      )}
    />
  );
};
