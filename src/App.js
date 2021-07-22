import './App.css';
import dictionarybook from './dictionarybook.jpg';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={dictionarybook} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
        Coded by Valerie Roman De Jesus
        </small>
      </footer>
    </div>
    </div>
  );
}

export default App;

