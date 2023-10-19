import './App.css';
import tarun from './images/tarun.jpg';

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
          LinkedIn
        </a>
        </div>

        
      </header>
    </div>
  );
}

export default App;
