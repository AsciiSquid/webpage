import {ReactComponent as Logo} from './image/asciilogo.svg';
import Waves from './waves.js'
import './style/App.css';

function App() {
  let colors = {
    logo : "#fc9003",
    secondary : "#c94c16",
    background :  "#01377e"
  }
  return (
    <div className="App">
      <Waves/>
      <header className="App-header">
        <Logo fill={colors.logo} className="App-logo" width="40vmin" alt="logo" />
        <p>
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
      </header>
    </div>
  );
}

export default App;
