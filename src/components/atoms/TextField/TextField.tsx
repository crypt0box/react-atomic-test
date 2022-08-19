import { TextField, TextFieldProps } from '@mui/material';

export type MuiTextFieldProps = TextFieldProps;

export const MuiTextField: React.FC<MuiTextFieldProps> = ({ ...props }) => {
  return <TextField {...props} />;
};
