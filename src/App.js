// Font Awesome Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
// Logo and styles
import './style/App.css';
import STYLE from './style/StyleProps';
import {ReactComponent as Logo} from './image/asciilogo.svg';
// Components
import Waves from './waves.js';


function App() {
  return (
    <div className="App" style={STYLE}>
      <Waves count={3} speed={0.8} amplitude={14} frequency={0.8} fill={STYLE['--color-background']}/>
      <header className="App-header">
        <Logo fill={STYLE['--color-primary']} className="App-logo" alt="logo" />
        <hr></hr>
        <div className="App-links">
          <a href="https://twitter.com/thatstupidsquid">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/AsciiSquid">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:aciisquid@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
