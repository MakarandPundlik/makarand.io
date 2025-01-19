import "./App.css";
import About from "./components/About";
import ElevateAppBar from "./components/AppBar";
import Home from "./components/Home";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const theme = createTheme({
  palette: {
    background: {
      default: "#212121",
      paper: "#3b3a3a",
    },
    text: {
      primary: "#fff",
    },
    primary: {
      main: "#212121",
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
        <Skills />
        <Experience />
      </ThemeProvider>
    </div>
  );
}

export default App;
