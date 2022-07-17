import logo from './assets/logo.svg';
import './assets/App.css';
import './assets/global.css'

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
        <h1 id = 'home'>Home</h1>
        <h1 id = 'resume'>Resume</h1>
        <h1 id = 'portfolio'>Portfolio</h1>
        <h1 id = 'contact'>Contact</h1>
        <h1 id = 'stay-updated'>Stay Updated</h1>
      </header>
    </div>
    </>
  );
}

export default App;
