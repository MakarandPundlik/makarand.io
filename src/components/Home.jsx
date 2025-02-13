import * as React from "react";
import "./home.css";
import {
  Avatar,
  Box,
  Button,
  Grid2,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import * as icons from "simple-icons";
import { ReactTyped } from "react-typed";
import { landingPage } from "../data.js";

export default function Home(props) {
  return (
    <React.Fragment>
      <Box className="home">
        <Grid2
          container
          spacing={10}
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
          marginLeft="10%"
        >
          <Grid2 item size={{ lg: 12, sx: 12, xl: 6, md: 12 }}>
            <Typography variant="h4" sx={{ fontWeight: 100 }}>
              Hi, I am
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 100 }}>
              Makarand
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 100 }}>
              <ReactTyped
                strings={landingPage.messages}
                typeSpeed={40}
                backSpeed={60}
                loop
              ></ReactTyped>
            </Typography>

            <Box className="social-box">
              {landingPage.socials.map(({ slug, link, tooltip }) => {
                return (
                  <Link target="_blank" href={link}>
                    <Button>
                      <Tooltip title={tooltip}>
                        {" "}
                        <Avatar
                          className="social-icon"
                          variant="square"
                          src={`https://cdn.simpleicons.org/${icons[slug].slug}`}
                        />
                      </Tooltip>
                    </Button>
                  </Link>
                );
              })}
            </Box>
          </Grid2>
          <Grid2 item size={{ lg: 12, sx: 12, xl: 6, md: 12 }}>
            <Box className="box2">
              <Avatar
                variant="rounded"
                src="./landing.svg"
                style={{ height: "50vh", width: "60vh" }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </React.Fragment>
  );
}
