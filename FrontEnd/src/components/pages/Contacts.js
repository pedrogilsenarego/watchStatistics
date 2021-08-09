import React from 'react'

import ImagesUpload from "../ImagesUpload"

import {Container, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const paperStyle={padding: "50px 20px", width: 600, margin: "20px auto"}

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8)
    }
}))



    


const Contacts = () => {

    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <div className={classes.formWrapper}>
        <ImagesUpload/>
            
            
                        
            </div>
        </Container>
        )}

export default Contacts