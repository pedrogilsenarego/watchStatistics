import logo from './logo.svg';
import './App.css';
import Navbar from "./NavBar/NavBar"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        App in Development
      </header>
    </div>
  );
}

export default App;
