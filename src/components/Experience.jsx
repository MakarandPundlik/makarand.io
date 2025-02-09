import * as React from "react";
import "./home.css";
import {
  Avatar,
  Card,
  Grid2,
  CardContent,
  Box,
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
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
        marginLeft="10%"
      >
        {/* Left Section */}
        <Grid2 item size={{ lg: 12, sx: 12, xl: 6, md: 12 }}>
          <Typography variant="h2" sx={{ fontWeight: 100 }}>
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
          spacing={2}
          size={{ lg: 6, sx: 12, xl: 6, md: 6 }}
          alignItems="center"
          justifyContent="center"
          // sx={{ marginRight: "1rem" }}
        >
          {experience.map((exp, index) => (
            <Grid2 item key={index} size={{ md: 6, xl: 6, xs: 12, lg: 6 }}>
              <Card sx={{ marginRight: "2rem", marginTop: "2rem" }}>
                <CardContent>
                  <Grid2 container spacing={2}>
                    <Grid2 item>
                      <Avatar
                        sx={{
                          height: "3rem",
                          width: "3rem",
                        }}
                        variant="rounded"
                        src={exp.image}
                      />
                    </Grid2>
                    <Grid2 item>
                      <Typography variant="h6" sx={{ fontWeight: 400 }}>
                        {exp.position}
                      </Typography>
                    </Grid2>
                    <Typography variant="p" sx={{ fontWeight: 300 }}>
                      {exp.data}
                    </Typography>
                    <Typography variant="p">{exp.dates}</Typography>
                  </Grid2>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </React.Fragment>
  );
}
