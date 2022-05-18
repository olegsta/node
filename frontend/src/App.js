import monya from './monya.jpeg';
import axios from 'axios';
import './App.css';

function App() {
  const makeApiRequest = () => {
    axios.get("/api/currentUserApi").then(response => {
      console.log(response.data)
    })
  }

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
      <button onClick={makeApiRequest}> Click</button>
    </div>
  );
}

export default App;
