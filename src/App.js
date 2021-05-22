// Font Awesome Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
// Logo and styles
import './style/App.css';
import {ReactComponent as Logo} from './image/asciilogo.svg';
// Components
import Waves from './waves.js';


function App() {
  let colors = {
    logo : "#fc9003",
    secondary : "#c94c16",
    background :  "#01377e"
  }
  return (
    <div className="App">
      <Waves count={3} speed={0.8} amplitude={14} frequency={0.8} fill={colors.background}/>
      <header className="App-header">
        <Logo fill={colors.logo} className="App-logo" alt="logo" />
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
