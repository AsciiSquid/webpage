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
      <Waves count={3} speed={1} height={56} amplitude={14} frequency={0.8} fill={colors.background}/>
      <header className="App-header">
        <Logo fill={colors.logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
