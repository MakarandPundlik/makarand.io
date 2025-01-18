import * as React from "react";
import "./home.css";
import { Avatar, Box, Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import * as icons from "simple-icons";
import { ReactTyped } from "react-typed";

export default function Home(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="home">
        <Grid2 container>
          <Grid2 size={6}>
            <Box className="box">
              <Typography variant="h3">Hi, I am </Typography>
              <Typography
                variant="p"
                sx={{ fontWeight: 100, fontSize: "5rem" }}
              >
                Makarand
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 100 }}>
                <ReactTyped
                  strings={["I like to code"]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                ></ReactTyped>
              </Typography>

              <Box className="social-box">
                {["siGmail", "siInstagram", "siGithub"].map((icon) => {
                  const slug = icons[icon].slug;
                  return (
                    <Avatar
                      className="social-icon"
                      variant="rounded"
                      src={`https://cdn.simpleicons.org/${slug}`}
                    />
                  );
                })}
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box className="box2">
              <Avatar
                variant="rounded"
                src="/landing.svg"
                style={{ height: "60vh", width: "80vh" }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </React.Fragment>
  );
}
