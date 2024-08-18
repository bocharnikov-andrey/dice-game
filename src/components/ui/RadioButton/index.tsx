import {FormControlLabel, useTheme} from "@mui/material";
import { StyledRadio } from "./styled";

type Props<T> = {
  value: T;
  label?: string;
  disabled?: boolean;
};

const RadioButton = <T,>({ label, value, disabled }: Props<T>) => {
  const theme = useTheme();

  return (
    <FormControlLabel value={value} control={<StyledRadio theme={theme} disabled={disabled} />} label={label} labelPlacement="start" />
  );
};

export default RadioButton;
