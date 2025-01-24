import * as React from "react";
import "./home.css";
import {
  Avatar,
  Box,
  Card,
  Grid2,
  CardContent,
  CardMedia,
  Typography,
  CssBaseline,
} from "@mui/material";
import { experience } from "../data";

export default function Experience(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid2
        container
        spacing={10}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
        marginLeft="10%"
      >
        {/* Left Section */}
        <Grid2 item size={{ lg: 12, sx: 12, xl: 6, md: 12 }}>
          <Typography variant="h3" sx={{ fontWeight: 100 }}>
            Work Experience
          </Typography>
          <Avatar
            variant="rounded"
            src="./experience.svg"
            style={{ height: "60vh", width: "80vh" }}
          />
        </Grid2>

        {/* Right Section */}
        <Grid2
          container
          padding={0}
          margin={0}
          size={{ lg: 12, sx: 12, xl: 6, md: 12 }}
          alignItems="center"
          justifyContent="center"
        >
          {experience.map((exp, index) => (
            <Grid2 item key={index} size={{ md: 6, xl: 6, xs: 12, lg: 6 }}>
              <Card className="card">
                <CardMedia
                  sx={{
                    height: "8rem",
                  }}
                  image={exp.image}
                />
                <CardContent>
                  <Typography variant="h6">{exp.position}</Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </React.Fragment>
  );
}
