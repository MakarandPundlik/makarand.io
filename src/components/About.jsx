import * as React from "react";
import "./home.css";
import {
  Avatar,
  Box,
  Grid2,
  Typography,
  CssBaseline,
  Button,
} from "@mui/material";
import { about } from "../data";

export default function About(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="home">
        <Grid2 container>
          <Grid2 item size={{ lg: 6, sx: 12, xl: 6, md: 12 }}>
            <Box className="box">
              <Button sx={{}}>My Latest Resume</Button>
              <Typography variant="h2" sx={{ fontWeight: 100 }}>
                About Me
              </Typography>
              <Typography variant="p">{about.message}</Typography>
            </Box>
          </Grid2>
          <Grid2 item size={{ lg: 6, sx: 12, xl: 6, md: 12 }}>
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
