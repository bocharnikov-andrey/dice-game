import { FC } from "react";
import {StyledResultContainer} from "./styled";
import Typography from "@mui/material/Typography";

type Props = {
  resultNumber: number | null;
};

const ResultedNumberSection: FC<Props> = ({ resultNumber }) => {
 return (
  <StyledResultContainer>
   <Typography variant="h1">{resultNumber ?? "N/A"}</Typography>
  </StyledResultContainer>
 );
};

export default ResultedNumberSection;
