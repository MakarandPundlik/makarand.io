import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";

const MotionAppBar = motion(AppBar);
const MotionTypography = motion(Typography);

export default function ElevateAppBar(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AnimatePresence mode="wait">
      <MotionAppBar 
        position="fixed" 
        sx={{ backgroundColor: 'background.paper' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <MotionTypography 
              variant={isMobile ? "h6" : "h5"} 
              component="div"
              sx={{ 
                flexGrow: 1,
                fontWeight: 300,
                color: 'rgba(255, 255, 255, 0.7)'
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                x: 10,
                transition: {
                  type: "inertia",
                  velocity: 300
                }
              }}
            >
              Makarand
            </MotionTypography>
          </Toolbar>
        </Container>
      </MotionAppBar>
      <Toolbar />
    </AnimatePresence>
  );
}
