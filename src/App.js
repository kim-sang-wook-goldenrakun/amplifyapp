import logo from './logo.svg';
import login from './img/login.PNG'
import loginsvg from './login.svg'
import svgimg1 from './svgimg1.svg'
import svgimg2 from './img/svgimg1.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"/>
        <img src={login} className="App-login"/>
        <img src={loginsvg}/>
        <img src={svgimg1}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={svgimg2}/>
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
