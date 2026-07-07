import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D4FF',
      light: '#4FC3F7',
      dark: '#0277BD',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#F5F5F5',
      dark: '#E0E0E0',
    },
    background: {
      default: '#0A0A0A',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Ubuntu", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navigation />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Landing />
          <Experience />
          <Projects />
          <Skills />
        </motion.div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
