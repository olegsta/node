import logo from './logo.svg';
import monya from './monya.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          From monya with love
        </p>
        <img src={monya} className="App-logo" alt="logo" />
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
