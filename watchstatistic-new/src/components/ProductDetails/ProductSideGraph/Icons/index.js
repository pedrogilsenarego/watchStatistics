import React, { useState } from "react";
import { Box } from "@mui/material";
import Popover from "../../../controls/Popover";

const Icons = ({ item, pos, returnLabel }) => {
  const [anchor, setAnchor] = useState(null);
  return (
    <>
      <Box
        onClick={(e) => {
          setAnchor(e.currentTarget);
        }}
        onMouseOver={(e) => {
          setAnchor(e.currentTarget);
        }}
        onMouseOut={() => {
          setAnchor(null);
        }}
        key={pos}
        style={{
          minHeight: "30px",
          minWidth: "30px",
          cursor: "pointer",
          backgroundColor: "#ffffff66",
          position: "absolute",
          marginTop: `${item.y}px`,
          marginLeft: `${item.x}px`,
        }}
      />
      <Popover
        anchor={anchor}
        setAnchor={setAnchor}
        message={returnLabel(pos)}
      />
    </>
  );
};

export default Icons;
