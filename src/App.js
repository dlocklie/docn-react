import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">App</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          className="App-link"
          href="https://www.linkedin.com/in/dlocklie/"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
        >
          Drew Lockliear's Linkedin
        </Button>

        <br></br>
      </header>
    </div>
  );
}

export default App;
