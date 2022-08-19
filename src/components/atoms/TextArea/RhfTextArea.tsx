import {
  DeepMap,
  FieldError,
  FieldValues,
  RefCallBack,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { MuiTextArea, MuiTextAreaProps } from "./TextArea";

export type RhfTextAreaProps<T extends FieldValues> = MuiTextAreaProps &
  UseControllerProps<T>;

/**
 * react-hook-formラッパー
 */
export const RhfTextArea = <T extends FieldValues>(
  props: RhfTextAreaProps<T>
) => {
  const { name, control } = props;
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <MuiTextArea
      ref={ref}
      {...rest}
      error={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
    />
  );
};
