import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

const CookiePolicy = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Dialog open={open} style={{ color: "black" }}>
        <DialogTitle>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h6" component="div" style={{ color: "black" }}>
              This Website uses Cookies
            </Typography>
          </div>
        </DialogTitle>
        <DialogContent dividers></DialogContent>
      </Dialog>
    </div>
  );
};

export default CookiePolicy;
