import "./App.css";
import About from "./components/About";
import ElevateAppBar from "./components/AppBar";
import Home from "./components/Home";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#373b38",
    },
    text: {
      primary: "#fff",
    },
    primary: {
      main: "#373b38",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ElevateAppBar />
        <Home />
        <About />
      </ThemeProvider>
    </div>
  );
}

export default App;
