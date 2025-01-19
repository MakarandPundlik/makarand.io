import * as React from "react";
import "./home.css";
import {
  Avatar,
  Box,
  Card,
  Grid2,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

export default function Experience(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="home">
        <Grid2 container>
          <Grid2 size={6}>
            <Box className="box">
              <Typography variant="h3">Work Experience</Typography>
              <Avatar
                variant="rounded"
                src="./experience.svg"
                style={{ height: "60vh", width: "80vh" }}
              />
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box className="box">
              <Card className="card">
                <CardMedia
                  sx={{ height: "8rem" }}
                  image="./nice.webp"
                ></CardMedia>
                <CardContent>Software Engineer</CardContent>
              </Card>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </React.Fragment>
  );
}
