//Import packages
import { BrowserRouter } from 'react-router-dom';

//Import assets
import './assets/global.css'
import headshot from './assets/images/headshot.jpg'
import resume from './assets/Alexander Arcasoy Resume 2021.pdf'

//Import components
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import HomePanel from './components/HomePanel'
import StyledButton from './components/Button';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <div className="App">
          <Parallax imagePath = 'wenhao-ryan-zGx9P250WaE-unsplash.jpg' aspectRatio = '3'/>
          <HomePanel id = 'aboutPanel'>
            <h3>Nice to meet you. I'm a Mechanical Engineer based in Boston.</h3>
            <img src = { headshot } id = 'homepageHeadshot' alt = 'Headshot of Alex'></img>
            <h3>I'm passionate about optimizing systems, automated processes, and project-based learning.</h3>
          </HomePanel>
          <Parallax />
          <HomePanel id = 'resumePanel'>
            <h2>Resume</h2>
            <p>To view my resume, please click the button below.</p>
            <StyledButton onClick = {() => window.open(resume, '_blank', 'noopener,noreferrer')}>View</StyledButton>
          </HomePanel>
          <Parallax />
          <HomePanel id = 'portfolioPanel'>
            <h2>Portfolio</h2>
            <p>Click the images below to learn about each project.</p>
            <h3>Programming</h3>
            <h3>Mechanical</h3>
          </HomePanel>
          <Parallax />
          <HomePanel id = 'contactPanel'>
            <h2>Contact</h2>
            <form>
              <input type = 'text' placeholder = 'Name' className = 'textInput' />
              <input type = 'text' placeholder = 'Email' className = 'textInput' />
              <input type = 'text' placeholder = 'Subject' className = 'textInput' />
              <input type = 'text' placeholder = 'Type your message here...' className = 'textInput' />
              <input type = 'submit' value = 'Submit' />
            </form>
          </HomePanel>
          <h1 id = 'stay-updated'>Stay Updated</h1>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
