import styled from "@emotion/styled";
import {Alert} from "@mui/material";
import {COLOR_WHITE} from "@/theme/colors";

export const StyledAlert = styled(Alert, {
  shouldForwardProp: propName => propName !== "backgroundColor"
})<{ backgroundColor: string }>`
  width: 600px;
  min-height: 48px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${COLOR_WHITE};
    
  .MuiAlert-message {
      display: flex;
      flex-direction: column;
  }
  
  .MuiAlert-icon {
    color: ${COLOR_WHITE};
  }
`;
