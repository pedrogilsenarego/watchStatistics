import React from 'react';
import { Route, Switch } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles"

import About from "./components/pages/About";


import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar/NavBar"
import ImagesUpload from "./components/ImagesUpload"


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
    /*primary: {
      main: "#0A0908",
    },
    secondary: {
      main: "#F9F6F3",
    },*/
  },
});
 
// not working yet, trying to import the theme from another file
//let theme2 = createTheme(darkTheme)
//import  darkTheme  from "./styles/DarkTheme"

function App() {  
     
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ImagesUpload/>
          <Navbar/>
          
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
              <Route path="/about" exact component={About}/>
              
          </Switch>
          
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

