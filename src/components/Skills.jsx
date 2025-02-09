import * as React from "react";
import "./home.css";
import {
  Avatar,
  Box,
  Grid2,
  Typography,
  CssBaseline,
  Tooltip,
} from "@mui/material";
import * as icons from "simple-icons";
import { skills } from "../data";

export default function Skills(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="home">
        <Grid2
          container
          spacing={10}
          alignItems="center"
          sx={{ minHeight: "100vh" }}
          marginLeft="10%"
        >
          <Grid2 item size={{ lg: 12, sx: 12, xl: 6, md: 12 }}>
            <Typography variant="h2" sx={{ fontWeight: 100 }}>
              Tech Stack
            </Typography>
            <Avatar
              variant="rounded"
              src="./skill.svg"
              style={{ height: "60vh", width: "80vh" }}
            />
          </Grid2>
          <Grid2 item size={{ lg: 12, sx: 12, xl: 6, md: 12 }}>
            {skills.map((skill) => {
              return (
                <Box margin="1rem">
                  <Typography
                    variant="p"
                    sx={{ fontSize: 30, fontWeight: 100 }}
                  >
                    {skill.title}
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    {skill.options?.map(({ slug, tooltip }) => {
                      return (
                        <Tooltip title={tooltip}>
                          <Avatar
                            sx={{ marginRight: "1rem" }}
                            className="social-icon"
                            variant="square"
                            src={`https://cdn.simpleicons.org/${icons[slug].slug}`}
                          />
                        </Tooltip>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Grid2>
        </Grid2>
      </Box>
    </React.Fragment>
  );
}
