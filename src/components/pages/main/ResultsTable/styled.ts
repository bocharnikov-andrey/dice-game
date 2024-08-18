import styled from "@emotion/styled";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import {Theme} from "@mui/material/styles";
import {COLOR_TEXT_PRIMARY} from "@/theme/colors";

export const StyledTableContainer = styled(TableContainer)`
    width: auto;
`;

export const StyledTable = styled(Table)(({ theme }: { theme: Theme }) => ({
  border: "none",

  ".MuiTableHead-root": {
    ...theme.typography.tableHeader,
    color: COLOR_TEXT_PRIMARY
  },

  ".MuiTableCell-root": {
    width: 200
  },

  ".MuiTableCell-body": {
    height: 32,
    paddingTop: 0,
    paddingBottom: 0,
    ...theme.typography.body2,
    color: COLOR_TEXT_PRIMARY
  },
}));

export const StyledResultedNumberCell = styled(TableCell, {
  shouldForwardProp: propName => propName !== "textColor",
})<{ textColor: string }>`
    &.MuiTableCell-body {
      color: ${({ textColor }) => textColor} !important;
    }
`;

