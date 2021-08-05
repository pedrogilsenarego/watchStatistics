import React from 'react';
import { Route, Switch } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline";

import About from "./components/pages/About";

import Navbar from "./components/NavBar/NavBar"
import ImagesUpload from "./components/ImagesUpload"
import Student from "./components/Student"


//The theme is defined here for now

//import orange from '@material-ui/core/colors/orange';
//import green from '@material-ui/core/colors/green';

const theme = createTheme({
  typography: {
      h2:{
          fontSize:18,
      }
  },
  palette: {
    background: {
      default: "#FCFAF9",
    },

    primary: {
      main: "#FCFAF9",
    },
    secondary: {
      main: "#373332",
    },
  },
});
 
// not working yet, trying to import the theme from another file
//let theme2 = createTheme(darkTheme)
//import  darkTheme  from "./styles/DarkTheme"

function App() {  
     
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <div className="App">
        <header className="App-header">          
          <Navbar/>
          <Switch>
              <Route path="/about" exact component={About}/>              
          </Switch>
          <ImagesUpload/>
          <Student/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

