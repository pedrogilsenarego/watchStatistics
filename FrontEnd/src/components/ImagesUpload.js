//uses Express send pictures to mysql

import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "./Commum/Forms/IndividualComponents/TextField";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8)
  }
}));

const INITIAL_FORM_STATE = {
  firstName: ""
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required")
});

export default function ImagesUpload() {
  const [firstName, setFirstName] = useState("");
  const [submitform, setSubmitForm] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get("/submitform");
      setSubmitForm(result.data.submitform);
    })();
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("firstName", firstName);
    const result = await axios.post("/submitForm", data);
    setSubmitForm([result.data, ...submitform]);
  };

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
          >
            <Form onSubmit={submit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Personal details2</Typography>
                </Grid>

                <Grid item xs={6}>
                  <Textfield
                    name="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <button type="submit">Submit</button>
              </Grid>
            </Form>
          </Formik>
          <main>
            {submitform.map((post) => (
              <figure key={post.id}>
                <figcaption>{post.firstName}</figcaption>
              </figure>
            ))}
          </main>
        </div>
      </Container>
    </Grid>
  );
}
