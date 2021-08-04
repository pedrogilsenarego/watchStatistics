import React from 'react';


import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar/NavBar"
import Student from './components/Student';
 


function App() {

  
     
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        
        <img src={logo} className="App-logo" alt="logo" />
        <Student/>
        
      </header>
    </div>
  );
}

export default App;

