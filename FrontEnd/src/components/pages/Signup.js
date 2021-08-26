import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "../Commum/Forms/IndividualComponents/TextField";
import Select from "../Commum/Forms/IndividualComponents/Select";
import DateTimePicker from "../Commum/Forms/IndividualComponents/DateTimePicker";
import Checkbox from "../Commum/Forms/IndividualComponents/CheckBox";
import Button from "../Commum/Forms/IndividualComponents/Button";
import region from "../../data/region.json";
import gender from "../../data/gender.json";
import wristSize from "../../data/wristSize.json";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8)
  }
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",
  birthday: "",
  gender: "",
  region: "",
  wristSize: "",
  message: "",
  termsOfService: false
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  userName: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must Match")
    .required("Required"),
  birthday: Yup.date().required("Required"),
  gender: Yup.string().required("Required"),
  region: Yup.string().required("Required"),
  wristSize: Yup.string().required("Required"),

  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted.")
});

const Signup = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Container maxWidth="md">
        <div className={classes.formWrapper}>
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Personal details</Typography>
                </Grid>

                <Grid item xs={6}>
                  <Textfield name="firstName" label="First Name" />
                </Grid>
                <Grid item xs={6}>
                  <Textfield name="lastName" label="Last Name" />
                </Grid>

                <Grid item xs={6}>
                  <Textfield name="email" label="Email" />
                </Grid>
                <Grid item xs={6}>
                  <Textfield name="userName" label="Username" />
                </Grid>

                <Grid item xs={6}>
                  <Textfield type="password" name="password" label="Password" />
                </Grid>
                <Grid item xs={6}>
                  <Textfield
                    type="password"
                    name="confirmPassword"
                    label="ConfirmPassword"
                  />
                </Grid>

                <Grid item xs={6}>
                  <DateTimePicker name="birthday" label="When were you born?" />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    name="gender"
                    label="Are You a man or a woman?"
                    options={gender}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Select
                    name="region"
                    label="What is your region?"
                    options={region}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    name="wristSize"
                    label="What is your wrist size?"
                    options={wristSize}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Textfield
                    name="message"
                    label="Message"
                    multiline={true}
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Checkbox
                    name="termsOfService"
                    legend="Terms Of Service"
                    label="I agree"
                  />
                </Grid>

                <Grid item xs={6}>
                  <Button>Submit Form</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </Container>
    </Grid>
  );
};

export default Signup;
