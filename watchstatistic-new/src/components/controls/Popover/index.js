import React from "react";
import Popover from "@mui/material/Popover";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#18161E",
      color: "#ffffffCC",
    },
    marginTop: "10px",
  },
}));

const PopoverM = ({ anchor, setAnchor, message }) => {
  const classes = useStyles();

  return (
    <Popover
      className={classes.root}
      style={{ pointerEvents: "none" }}
      open={Boolean(anchor)}
      anchorEl={anchor}
      onClose={() => {
        setAnchor(null);
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Typography style={{ margin: "5px" }}>{message}</Typography>
    </Popover>
  );
};

export default PopoverM;
