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
        <Dictionary defaultKeyword="beach"/>
      </main>
      <footer className="App-footer">
        <small>
      This project is coded by <a href="https://www.linkedin.com/in/valerie-roman-dejesus/"target="_blank" rel="noreferrer">Valerie Roman De Jesus</a> and is <a href="https://github.com/valerieroman/dictionary-project" target="_blank"rel="noreferrer"> open sourced on GitHub</a> and <a href="https://serene-mcnulty-1eb989.netlify.app/" target="_blank" rel="noreferrer"> hosted on Netlify.</a>
        </small>
      </footer>
    </div>
    </div>
  );
}

export default App;

