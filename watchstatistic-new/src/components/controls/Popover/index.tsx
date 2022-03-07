import React from "react";
import Popover from "@mui/material/Popover";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#18161E",
      color: "#ffffffCC",
      boxShadow: "0 0 0.2rem hsl(0 0% 100%)",
    },
    marginTop: "10px",
  },
}));

interface Iprops {
  anchor: Element;
  setAnchor: React.Dispatch<React.SetStateAction<Boolean>>;
  message: string;
}

const PopoverM = ({ anchor, setAnchor, message }: Iprops) => {
  const classes = useStyles();

  return (
    <Popover
      className={classes.root}
      style={{ pointerEvents: "none" }}
      open={Boolean(anchor)}
      anchorEl={anchor}
      onClose={() => {
        setAnchor(false);
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
