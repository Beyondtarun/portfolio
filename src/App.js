import './App.css';
import tarun from './images/tarun.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
         Tarun Goyal's Portfolio...
        </p>
        <img src={tarun} className="App-logo" alt="logo" />
        
        <div className='SocialLinks'>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/beyondtarun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon = {faLinkedin} className='social-icon'></FontAwesomeIcon>
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/beyondtarun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon = {faGithub} className='social-icon'></FontAwesomeIcon>
        </a>
        </div>

        
      </header>
    </div>
  );
}

export default App;
