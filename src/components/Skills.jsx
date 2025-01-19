import * as React from "react";
import "./home.css";
import { Avatar, Box, Grid2, Typography, CssBaseline } from "@mui/material";
import * as icons from "simple-icons";
import { skills } from "../data";

export default function Skills(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="home">
        <Grid2 container>
          <Grid2 size={6}>
            <Box className="box">
              <Typography variant="h3">Tech Stack</Typography>
              <Avatar
                variant="rounded"
                src="./skill.svg"
                style={{ height: "60vh", width: "80vh" }}
              />
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box className="box">
              {skills.map((skill) => {
                return (
                  <Box>
                    <Typography
                      variant="p"
                      sx={{ fontSize: 30, fontWeight: "light" }}
                    >
                      {skill.title}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      {skill.options?.map(({ slug }) => {
                        return (
                          <Avatar
                            sx={{ marginRight: "1rem" }}
                            className="social-icon"
                            variant="square"
                            src={`https://cdn.simpleicons.org/${icons[slug].slug}`}
                          />
                        );
                      })}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </React.Fragment>
  );
}
