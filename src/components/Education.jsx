import * as React from "react";
import "./home.css";
import {
  Avatar,
  Card,
  Grid2,
  CardContent,
  Typography,
  CssBaseline,
  Link,
} from "@mui/material";
import { projects } from "../data";
import * as icons from "simple-icons";

export default function Experience(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid2
        container
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Typography variant="h3" sx={{ fontWeight: 100 }}>
          Projects
        </Typography>
        {/* Left Section */}
        <Grid2 container spacing={3}>
          {projects.map((exp, index) => (
            <Grid2 item key={index} size={{ md: 4, xl: 4, xs: 12, lg: 4 }}>
              <Card sx={{ margin: "1rem 2rem" }}>
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
                        {exp.title}
                      </Typography>
                    </Grid2>
                    <Typography variant="p" sx={{ fontWeight: 300 }}>
                      {exp.data}
                    </Typography>
                    <Typography variant="p">
                      <Link
                        target="_blank"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                        href={exp.github}
                      >
                        <Avatar
                          className="social-icon"
                          variant="square"
                          src={`https://cdn.simpleicons.org/${icons["siGithub"].slug}`}
                        />
                      </Link>
                    </Typography>
                  </Grid2>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {/* Right Section */}
      </Grid2>
    </React.Fragment>
  );
}
