import * as React from "react";
import "./home.css";
import { Avatar, Box, Grid2, Typography, CssBaseline } from "@mui/material";
import { about } from "../data";

export default function About(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="home">
        <Grid2 container>
          <Grid2 size={7}>
            <Box className="box">
              <Typography variant="h2">About Me</Typography>
              <Typography variant="p">{about.message}</Typography>
            </Box>
          </Grid2>
          <Grid2 size={5}>
            <Box className="box">
              <Avatar
                variant="rounded"
                src="./me2.jpeg"
                style={{ height: "45vh", width: "45vh" }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </React.Fragment>
  );
}
