import { Button, ButtonProps } from "@mui/material";

type MuiButtonPorps = ButtonProps & {
  children?: React.ReactNode;
};

export const MuiButton: React.FC<MuiButtonPorps> = ({ children, ...props }) => {
  return <Button {...props}>{children || "Button"}</Button>;
};
