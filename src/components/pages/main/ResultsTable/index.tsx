import {FC} from "react";
import {useTheme} from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {NumberConditionTypes, ResultItem} from "@/types";
import {formatDate} from "@/utils/formatDate";
import {StyledResultedNumberCell, StyledTable, StyledTableContainer} from "./styled";
import {COLOR_ERROR_DARK, COLOR_SUCCESS_DARK} from "@/theme/colors";
import {getIsUserWon} from "@/components/pages/main/helpers";

type Props = {
  results: ResultItem[];
};

const ResultsTable: FC<Props> = ({ results }) => {
  const theme = useTheme();

  if (!results.length) {
    return null;
  }

  return (
    <StyledTableContainer>
      <StyledTable theme={theme} aria-label="results-table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Guess</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {results.map((result) => {
          const formattedPlayingDate = formatDate(result.playingDate);
          const isUserWon = getIsUserWon(
            result.guessNumber,
            result.resultedNumber,
            result.resultedNumberCondition
          );

          return (
          <TableRow
            key={result.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {formattedPlayingDate}
            </TableCell>
            <TableCell component="th" scope="row">
              {result.resultedNumberCondition === NumberConditionTypes.OVER ? "Over" : "Under"} {result.guessNumber}
            </TableCell>
            <StyledResultedNumberCell
              component="th"
              scope="row"
              textColor={isUserWon ? COLOR_SUCCESS_DARK : COLOR_ERROR_DARK}
            >
              {result.resultedNumber}
            </StyledResultedNumberCell>
          </TableRow>
          )})}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default ResultsTable;
