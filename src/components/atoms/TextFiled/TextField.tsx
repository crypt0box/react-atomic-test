import {
  FormHelperText,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import styled from "styled-components";

export type TextFieldProps = MuiTextFieldProps & {
  inputRef?: MuiTextFieldProps["ref"];
  $errorMessage?: string;
};

const StyledTextField = styled(MuiTextField)`
  background-color: white;
`;

export const TextField: React.FC<TextFieldProps> = ({ inputRef, ...rest }) => {
  return (
    <>
      <StyledTextField ref={inputRef} {...rest} error={!!rest.$errorMessage} />
      {!!rest.$errorMessage && (
        <FormHelperText error>{rest.$errorMessage}</FormHelperText>
      )}
    </>
  );
};
