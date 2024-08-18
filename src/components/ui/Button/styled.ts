import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import {COLOR_PRIMARY} from "@/theme/colors";
import {Theme} from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  backgroundColor: COLOR_PRIMARY,
  ...theme.typography.buttonLarge,

  "&:hover": {
    backgroundColor: "rgb(112, 49, 170)"
  }
}));
