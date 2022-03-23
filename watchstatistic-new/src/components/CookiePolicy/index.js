import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { acceptCookiePolicy } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
  user: user,
});

const CookiePolicy = () => {
  const [open, setOpen] = useState(null);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(mapState);

  useEffect(
    () => {
      if (user.cookiePolicy === true) setOpen(false);
      else setOpen(true);
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
            improving the user experience.
          </Typography>
          <Typography style={{ color: "black", marginTop: "20px" }}>
            If you want to know more read our{" "}
            <b
              onClick={() => setPrivacyPolicy(!privacyPolicy)}
              style={{ cursor: "pointer" }}
            >
              Privacy policy
            </b>
          </Typography>
          {privacyPolicy && (
            <Typography style={{ color: "black", marginTop: "20px" }}>
              Lorem Ipsus
            </Typography>
          )}

          <Button
            onClick={() => {
              dispatch(acceptCookiePolicy(true));
              setOpen(false);
            }}
            style={{
              float: "right",
              fontSize: "20px",
              color: "darkBlue",
              fontWeight: "500",
              marginTop: "40px",
            }}
          >
            Accept Terms
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CookiePolicy;
