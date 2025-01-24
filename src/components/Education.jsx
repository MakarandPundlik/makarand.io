import * as React from "react";
import "./home.css";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid2,
  Typography,
  CssBaseline,
  CardMedia,
} from "@mui/material";
import { education } from "../data";

export default function Education(props) {
  return (
    <React.Fragment>
      <CssBaseline />

      <Grid2
        container
        padding="0"
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        {/* Left Section */}
        {/* <Grid2 item size={{ md: 12, xl: 6, xs: 12, lg: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 100 }}>
            Education
          </Typography>
          <Avatar
            variant="rounded"
            src="./education.png"
            style={{ height: "50vh", width: "60vh" }}
          />
        </Grid2> */}

        {/* Right Section */}
        {/* <Grid2
          container
          size={{ md: 12, xl: 6, xs: 12, lg: 6 }}
          justifyContent="center"
          spacing={10}
        > */}
        <Grid2 item size={{ md: 12, xl: 12, xs: 12, lg: 12 }}>
          <Typography variant="h3" sx={{ fontWeight: 100, marginLeft: "1%" }}>
            Education
          </Typography>
        </Grid2>
        {education.map((edu, index) => (
          <Grid2 item key={index} size={{ md: 6, xl: 4, xs: 12, lg: 6 }}>
            <Card sx={{ margin: "1rem", maxWidth: "25rem" }}>
              <CardMedia
                sx={{
                  height: "15rem",
                }}
                image={edu.image}
              />
              <CardContent>
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6">{edu.degree}</Typography>
                  <Typography variant="p" style={{ fontWeight: 200 }}>
                    {edu.coursework}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* </Grid2> */}
    </React.Fragment>
  );
}
