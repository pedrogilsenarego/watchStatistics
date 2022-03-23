import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { acceptCookiePolicy } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
  currentUser: user,
});

const CookiePolicy = () => {
  const [open, setOpen] = useState(null);
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  useEffect(
    () => {
      if (currentUser.cookiePolicy === false) setOpen(true);
      else setOpen(false);
    },
    // eslint-disable-next-line
    []
  );

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
        <DialogContent dividers>
          <Typography style={{ color: "black" }}>
            The use of cookies on this website has only the finality of
            improving user experience.
          </Typography>
          <Typography style={{ color: "black", marginTop: "20px" }}>
            to accept, visit Privacy policy to know more
          </Typography>
          <Button
            onClick={() => {
              dispatch(acceptCookiePolicy(true));
              setOpen(false);
            }}
            style={{ color: "black", backgroundColor: "blue" }}
          >
            Click Here
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CookiePolicy;
