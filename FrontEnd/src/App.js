import React from 'react';


import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar/NavBar"
import ImagesUpload from "./components/ImagesUpload"

 


function App() {

  
     
  return (
    <div className="App">
      <header className="App-header">
        <ImagesUpload/>
        <Navbar/>
        
        <img src={logo} className="App-logo" alt="logo" />
      
        
      </header>
    </div>
  );
}

export default App;

