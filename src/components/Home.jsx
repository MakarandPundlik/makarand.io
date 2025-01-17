import * as React from "react";
import "./home.css";
import { Avatar, Box, Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import * as icons from "simple-icons";

export default function Home(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="home">
        <Grid2 container>
          <Grid2 size={6}>
            <Box className="box">
              <Typography variant="h1">Hi I am Makarand</Typography>
              <Typography variant="h4">I like to code</Typography>
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box className="box">
              <Avatar
                variant="rounded"
                src="/landing.svg"
                style={{ height: "60vh", width: "80vh" }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </React.Fragment>
  );
}
