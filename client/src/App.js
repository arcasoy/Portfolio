//Import packages
import { BrowserRouter } from 'react-router-dom';

//Import assets
import logo from './assets/logo.svg';
import './assets/App.css';
import './assets/global.css'

//Import components
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
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
            <Parallax />
            <h1 id = 'resume'>Resume</h1>
            <h1 id = 'portfolio'>Portfolio</h1>
            <h1 id = 'contact'>Contact</h1>
            <h1 id = 'stay-updated'>Stay Updated</h1>
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
