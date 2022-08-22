import { FieldValues } from "react-hook-form";
import { MuiButton } from "src/components/atoms/button/Button";
import {
  RhfTextArea,
  RhfTextAreaProps,
} from "src/components/atoms/textarea/RhfTextArea";

export const SubmitForm = <T extends FieldValues>(
  props: RhfTextAreaProps<T>
) => {
  const { name, control } = props;
  return (
    <>
      <RhfTextArea name={name} control={control} />
      <MuiButton>aaa</MuiButton>
    </>
  );
};
