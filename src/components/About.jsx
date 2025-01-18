import * as React from "react";
import "./home.css";
import { Avatar, Box, Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import * as icons from "simple-icons";
import { ReactTyped } from "react-typed";

export default function About(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="home">
        <Grid2 container>
          <Grid2 size={6}>
            <Box className="box">
              <Typography variant="h2">About Me</Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor molestie tempor. Donec id felis et diam aliquam mattis.
                Etiam vestibulum ac massa eu commodo. Integer a accumsan ligula.
                In euismod diam nec posuere ultrices. Proin luctus tortor eget
                mauris aliquam, sit amet bibendum elit tincidunt. Aliquam arcu
                urna, sollicitudin eu velit nec, maximus laoreet lacus. Aliquam
                efficitur lorem ac est malesuada, sed ullamcorper risus aliquet.
                Quisque in euismod nunc. In in libero quis tortor ornare mollis
                vitae cursus leo. Phasellus dapibus lacus sed purus luctus, ut
                accumsan ligula laoreet. Sed tempor, dolor sit amet ultrices
                interdum, leo enim vehicula tortor, at lacinia quam justo ut
                lorem.
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box className="box">
              <Avatar
                variant="circle"
                src="/me2.jpeg"
                style={{ height: "50vh", width: "50vh" }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </React.Fragment>
  );
}
