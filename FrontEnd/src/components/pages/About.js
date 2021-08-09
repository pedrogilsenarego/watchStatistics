import React from 'react'

import LoginGoogle from "../Buttons/LoginGoogle"
import {makeStyles} from "@material-ui/core/styles";

import {Container} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8)
    }
}))

 


const About = () => {

    const classes = useStyles();
    
    return (
        <Container maxWidth="md">
        <div className={classes.formWrapper}>                   
            <LoginGoogle/>
            
            </div>
        </Container>
        )}

export default About