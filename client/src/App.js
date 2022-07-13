import logo from './assets/logo.svg';
import './assets/App.css';
import './assets/global.css'
import { Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className = 'font-face-lulo'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Routes>
          <Route/>
        </Routes>
        <h1>Home</h1>
        <p>{ '\n' }</p>
        <h1>Resume</h1>
        <h1>Portfolio</h1>
        <h1>Contact</h1>
      </header>
    </div>
    </>
  );
}

export default App;
