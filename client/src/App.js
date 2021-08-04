import React, {useState, useEffect} from 'react';
import Axios from "axios";

import logo from './logo.svg';
import './App.css';
import Navbar from "./NavBar/NavBar"
 


function App() {

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")

  const submitUser = () => {
    Axios.post("http://localhost:3001/api/insert", {
      userName: userName, 
      email: email,
    }).then(()=>{
        alert("sucessfuk insert");
    });

  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <label>Name</label>
        <input type="text" name="userName" onChange={(e)=>{
            setUserName(e.target.value)
        }}/>
        <label>Email</label>
        <input type="text" name="email" onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <button onClick={submitUser}>Submit</button>
      </header>
    </div>
  );
}

export default App;
