import {
  FormHelperText,
  TextareaAutosize,
  TextareaAutosizeProps,
} from "@mui/material";
import styled from "styled-components";

export type MuiTextAreaProps = TextareaAutosizeProps & {
  error?: string;
};

const StyledTextArea = styled(TextareaAutosize)`
  background-color: white;
`;

export const MuiTextArea: React.FC<MuiTextAreaProps> = ({ ...props }) => {
  return (
    <>
      <StyledTextArea {...props} />
      {!!props.error && <FormHelperText error>{props.error}</FormHelperText>}
    </>
  );
};
