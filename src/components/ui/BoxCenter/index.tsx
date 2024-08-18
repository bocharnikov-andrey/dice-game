import Box, {BoxProps} from "@mui/material/Box";
import {FC, PropsWithChildren} from "react";

const BoxCenter: FC<PropsWithChildren & BoxProps> = ({ children, ...props }) => {
 return (
   <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" {...props}>
     {children}
  </Box>
 );
};

export default BoxCenter;
