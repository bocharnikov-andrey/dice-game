import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import { FC } from "react";
import { StyledAlert } from "./styled";
import Typography from "@mui/material/Typography";
import {COLOR_WHITE} from "@/theme/colors";

type Props = {
  isOpened: boolean;
  alertMessage: string;
  alertDescription: string;
  alertBackgroundColor: string;
  handleCloseAlert: () => void;
  subMessage?: string;
};

const SlideTransition: FC = (props: any) => {
  return <Slide {...props} direction="down" />;
};

const Alert: FC<Props> = ({ isOpened, alertMessage, alertBackgroundColor, handleCloseAlert, alertDescription }) => {
 return (
   <Snackbar
     open={isOpened}
     onClose={handleCloseAlert}
     TransitionComponent={SlideTransition}
     anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
     autoHideDuration={1500}
   >
     <StyledAlert onClose={handleCloseAlert} severity="info" backgroundColor={alertBackgroundColor}>
       <Typography variant="alertTitle" color={COLOR_WHITE}>{alertMessage}</Typography>
       <Typography variant="alertDescription" color={COLOR_WHITE}>{alertDescription}</Typography>
     </StyledAlert>
   </Snackbar>
 );
};

export default Alert;
