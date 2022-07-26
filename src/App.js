import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const updateDarkMode = (event) => {
    setDarkMode(event.target.checked);
  }

  const applicationClasses = () => {
    let classes = ["App"];
    return (darkMode ? classes.concat('dark-mode') : classes).join(" ")
  }

  return (
    <div className={applicationClasses()} data-testid="main-body-styles">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <div>
        <label>
          <input type="checkbox" checked={darkMode} onChange={updateDarkMode} />
          Dark Mode
        </label>
      </div>
    </div>
  );
}

export default App;
