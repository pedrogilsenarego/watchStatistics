
//uses Express send pictures to mysql

import { useState, useEffect } from 'react'
import axios from "axios"
import { Container, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from './Forms/IndividualComponents/TextField';
import Button from './Forms/IndividualComponents/Button';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  userName: '',
  password: '',
  confirmPassword: '',
  birthday: '',
  gender: '',
  region: '',
  wristSize: '',
  message: '',
  termsOfService: false
};


const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  userName: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must Match")
    .required("Required"),
  birthday: Yup.date()
    .required('Required'),
  gender: Yup.string()
    .required('Required'),
  region: Yup.string()
    .required('Required'),
  wristSize: Yup.string()
    .required('Required'),
  
  
  
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});




export default function ImagesUpload() {
  
  const [firstName, setFirstName] = useState("")
  const [submitform, setSubmitForm] = useState([])

  useEffect(() => {
    (async() => {
      const result = await axios.get('/submitform')
      setSubmitForm(result.data.submitform)
    })()
  }, [])

  const submit = async event => {
    event.preventDefault()
    const data = new FormData()
    data.append('firstName', firstName)
    const result = await axios.post('/submitForm', data)
    setSubmitForm([result.data, ...submitform])    
  }
  
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
            <Typography>
              Personal details
            </Typography>
          </Grid>

          <Grid item xs={6}>
          <Textfield          
                      name="firstName"
                      label="First Name"                    
                      value={firstName}                     
                      onChange={e => setFirstName(e.target.value)}                     
                    />
                </Grid>
                <Grid item xs={6}>
                <input                
                onChange={e => setFirstName(e.target.value)}
                type="text"
                >
                </input>
              </Grid>
                <button type="submit">Submit</button>

                <Button/>

                
              </Grid>
                
            </Form>
            </Formik>
            <main>
        {submitform.map(post => (
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