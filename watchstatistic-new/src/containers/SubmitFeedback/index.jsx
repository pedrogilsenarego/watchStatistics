import React from "react";
import {
  Container,
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { useTheme } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ButtonMUI from "../forms/ButtonMUI";
import { apiInstance } from "./../../Utils";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const useStyles = makeStyles((theme) => ({
  textField: {
    "& .MuiOutlinedInput-input": { color: "white" },
    "& . MuiInputLabel-root": {
      color: "#ffffffB3",
    },
    "& .MuiInputLabel-root": { color: "grey" },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff",
      borderWidth: "2px",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "black",
    },
    "&:hover .MuiInputLabel-root": { color: "grey" },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffffB3",
    },
    "&  .MuiOutlinedInput-input": {
      color: "black",
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      color: "#ffffffB3",
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#ffffffB3" },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffffB3",
    },
  },
}));

const SubmitFeedback = () => {
  const { currentUser } = useSelector(mapState);
  const theme = useTheme();
  const classes = useStyles();

  const handleSubmit = async (event) => {
    const body = {
      message: "pizza",
      userName: currentUser.displayName,
      userEmail: currentUser.email,
    };
    try {
      const response = apiInstance.post("/submitfeedback", body);
      console.log(response);
    } catch {
      console.log("fail");
    }
  };

  const handleTest = async (event) => {
    const body = {
      message: "pizza",
      userName: currentUser.displayName,
      userEmail: currentUser.email,
    };
    try {
      const response = apiInstance.post("/submitfeedback", body);
      console.log(response);
    } catch {
      console.log("fail");
    }
  };

  return (
    <Grid
      container
      spacing={2}
      style={{ marginTop: "140px" }}
      justifyContent="center"
    >
      <Grid item xs={12} md={5}>
        <Container>
          <Typography style={{ paddingTop: "20px" }}>
            Submit Feedback
          </Typography>
          <Typography style={{ color: theme.palette.text.faded }}>
            Thank you for your contribution, this is a community project and the
            drive to strive further comes from the will from all of us.
          </Typography>
          <Divider
            style={{
              width: "100%",
              background: theme.palette.text.faded3,
              marginTop: "20px",
            }}
          />

          <Formik
            initialValues={{
              message: "",
            }}
            validationSchema={Yup.object().shape({
              message: Yup.string().required("Required"),
            })}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Form>
              <Typography
                style={{ color: theme.palette.text.faded, marginTop: "60px" }}
              >
                Message
              </Typography>
              <Container
                style={{
                  backgroundColor: theme.palette.textField.background,
                  height: "170px",
                  padding: "0px",
                  marginTop: "10px",
                  borderRadius: "4px",
                }}
              >
                <TextField
                  className={classes.textField}
                  multiline
                  rows={6}
                  InputLabelProps={{ shrink: false }}
                  name="message"
                  placeholder="Put your message here*"
                ></TextField>
              </Container>
              <ButtonMUI style={{ marginTop: "20px" }}>Submit</ButtonMUI>
            </Form>
          </Formik>
          <Button
            onClick={() => {
              handleTest();
            }}
          >
            Teste
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SubmitFeedback;
