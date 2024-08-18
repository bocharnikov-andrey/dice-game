import { FC } from "react";
import {StyledSlider} from "@/components/ui/Slider/styled";
import { SliderProps } from "@mui/material/Slider";
import {useTheme} from "@mui/material";

type Props = SliderProps & {
  defaultValue?: number;
  min?: number;
  max?: number;
};

const Slider: FC<Props> = ({ defaultValue = 50, min = 1, max = 100, ...props }) => {
  const theme = useTheme();

  return (
    <StyledSlider theme={theme} defaultValue={defaultValue} valueLabelDisplay="on" min={min} max={max} {...props} />
  );
};

export default Slider;
