import "./App.css";
import About from "./components/About";
import ElevateAppBar from "./components/AppBar";
import Home from "./components/Home";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

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
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ElevateAppBar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
      </ThemeProvider>
    </div>
  );
}

export default App;
