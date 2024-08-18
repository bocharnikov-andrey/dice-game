import styled from "@emotion/styled";
import {Radio} from "@mui/material";
import {COLOR_PRIMARY, COLOR_TEXT_PRIMARY} from "@/theme/colors";
import {Theme} from "@mui/material/styles";

export const StyledRadio = styled(Radio)(({ theme }: { theme: Theme }) => ({
  padding: 0,
  width: 38,
  height: 38,

  ".MuiFormControlLabel-label": {
    ...theme.typography.body1,
    color: COLOR_TEXT_PRIMARY,
  },

  "&.Mui-checked": {
    color: COLOR_PRIMARY,
  },

  ".MuiSvgIcon-root": {
    width: 20,
    height: 20,
  },
}));
