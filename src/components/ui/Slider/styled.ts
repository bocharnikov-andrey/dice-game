import styled from "@emotion/styled";
import Slider from "@mui/material/Slider";
import {COLOR_PRIMARY, COLOR_TEXT_SECONDARY} from "@/theme/colors";
import {Theme} from "@mui/material/styles";

export const StyledSlider = styled(Slider)(({ theme }: { theme: Theme }) => ({
  color: COLOR_PRIMARY,

  "& .MuiSlider-thumb:hover": {
     boxShadow: "0 0 0 8px rgba(156, 39, 176, 0.16)",
  },

  ".MuiSlider-valueLabelOpen": {
    width: 40,
    height: 30,
    padding: "0 12px",
    borderRadius: 4,
    ...theme.typography.subtitle2,
  },

  "& .MuiSlider-markLabel": {
    ...theme.typography.body2,
    color: COLOR_TEXT_SECONDARY,

    "&[data-index='0']" : {
      left: "1% !important"
    },

    "&[data-index='5']" : {
      left: "97% !important",
    }
  },
}));
