import {
  FormHelperText,
  TextareaAutosize,
  TextareaAutosizeProps,
} from "@mui/material";
import styled from "styled-components";

export type MuiTextAreaProps = TextareaAutosizeProps & {
  inputRef?: TextareaAutosizeProps["ref"];
  error?: string;
};

const StyledTextArea = styled(TextareaAutosize)`
  background-color: white;
`;

export const MuiTextArea: React.FC<MuiTextAreaProps> = ({
  inputRef,
  ...rest
}) => {
  return (
    <>
      <StyledTextArea ref={inputRef} {...rest} />
      {!!rest.error && <FormHelperText error>{rest.error}</FormHelperText>}
    </>
  );
};
