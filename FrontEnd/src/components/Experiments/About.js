import React from 'react'
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from "@material-ui/core/TextField"
import {ThemeProvider} from "@material-ui/styles"
import {makeStyles} from "@material-ui/core/styles"
import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import "fontsource-roboto";
import  Typography  from '@material-ui/core/Typography'
import Container  from '@material-ui/core/Container'
import Paper  from '@material-ui/core/Paper'
import Grid  from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'



const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #333, #999)",
        
        border: 0,
        borderRadius: 15,
        color: "white",
        padding: "5 30px"
    }

})

const theme = createTheme({
    typography: {
        h2:{
            fontSize:18,
        }
    },
    palette: {
      primary: {
        main: orange[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

function ButtonStyled() {
    const classes = useStyles();
    return <Button className={classes.root}>Test Styled</Button>
}

function CheckBoxExample() {
    const [checked, setChecked] = React.useState(true)
    return (
            <FormControlLabel
            control={
                <Checkbox
                checked={checked}
                icon={<SaveIcon />}
                CheckedIcon={<SaveIcon />}
                onChange={(e)=>setChecked(e.target.checked)}
                inputProps={{
                    "aria-label": "secondary checkbox"
               }}
            />}
            label= "testing-checkbox"
            />
            
        
       

    )
}

const About = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <AppBar color="secondary">
                    <ToolBar>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">
                            MUI Theming
                        </Typography>
                        <Button>
                            Login
                        </Button>
                    </ToolBar>
                </AppBar>
                    <Typography variant="h2">
                        Welcome to MUI
                    </Typography>
                    <Typography variant="subtitle1">
                        Learn How to use material UI
                    </Typography>
                    <ButtonStyled/>
                    <Grid container spacing={4} justify="center">
                        <Grid item xs>
                            <Paper style={{height:75, width:"100%",}}/>                   
                        </Grid>
                        <Grid item xs={3} sm={6}>
                            <Paper style={{height:75, width:"100%",}}/>                   
                        </Grid>
                        <Grid item xs={3} lg={12}>
                            <Paper style={{height:75, width:"100%",}}/>                   
                        </Grid>
                    </Grid>
                    <TextField
                        variant = "outlined"
                        color = "secondary"
                        type = "date"
                        label = "birthDate"
                    />
                    <TextField
                    variant = "outlined"
                    color = "secondary"
                    type = "email"
                    label = "email"
                    placeholder = "some@email.com"
                    />
                    <CheckBoxExample/>
                    <ButtonGroup
                    variant="contained" 
                    color="primary"
                    >
                        <Button
                            startIcon={<SaveIcon />}                     
                            >
                                Save
                        </Button>
                        <Button
                            startIcon={<DeleteIcon />}                     
                            color="secondary"
                            >
                                Discard
                        </Button>
                    </ButtonGroup>
            </Container>
        
        </ThemeProvider>
    )
}

export default About