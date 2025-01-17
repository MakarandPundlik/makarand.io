import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Makarand Pundlik
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
