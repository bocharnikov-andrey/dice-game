import { FC } from "react";
import {ButtonProps, useTheme} from "@mui/material";
import {StyledButton} from "@/components/ui/Button/styled";


const Button: FC<ButtonProps> = (props) => {
 const theme = useTheme();

 return (
  <StyledButton theme={theme} {...props} />
 );
};

export default Button;
