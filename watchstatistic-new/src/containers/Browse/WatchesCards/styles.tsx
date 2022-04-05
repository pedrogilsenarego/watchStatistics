import { Grid as MuiGrid, styled, Paper as MuiPaper } from "@mui/material";

export const Grid = styled(MuiGrid)(() => ({
  paddingTop: "20px",
  paddingLeft: "20px",
  paddingRight: "20px",
}));

export const Paper = styled(MuiPaper)(() => ({
  alignItems: "center",
  backgroundColor: "#18161E !important",
  color: "white !important",
  padding: "15px",
  marginTop: "5px",
}));
