import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained">Drew Lockliear</Button>

        <br></br>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/dlocklie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linked in
        </a>
      </header>
    </div>
  );
}

export default App;
