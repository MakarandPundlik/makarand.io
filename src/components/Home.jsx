import * as React from "react";
import "./home.css";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Tooltip,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import * as icons from "simple-icons";
import { ReactTyped } from "react-typed";
import { landingPage } from "../data.js";

export default function Home(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="home" sx={{ minHeight: "100vh", py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "calc(100vh - 64px)" }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant={isSmallScreen ? "h5" : "h4"} 
                sx={{ fontWeight: 100, mb: 1 }}
              >
                Hi, I am
              </Typography>
              <Typography 
                variant={isSmallScreen ? "h2" : "h1"} 
                sx={{ fontWeight: 100, mb: 2 }}
              >
                Makarand
              </Typography>
              <Typography 
                variant={isSmallScreen ? "h6" : "h5"} 
                sx={{ fontWeight: 100, mb: 4 }}
              >
                <ReactTyped
                  strings={landingPage.messages}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
              </Typography>

              <Box 
                className="social-box"
                sx={{ 
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1,
                  flexWrap: 'wrap'
                }}
              >
                {landingPage.socials.map(({ slug, link, tooltip }) => (
                  <Link key={slug} target="_blank" href={link} underline="none">
                    <Button>
                      <Tooltip title={tooltip}>
                        <Avatar
                          className="social-icon"
                          variant="square"
                          src={`https://cdn.simpleicons.org/${icons[slug].slug}`}
                          sx={{
                            width: { xs: 32, sm: 40 },
                            height: { xs: 32, sm: 40 }
                          }}
                        />
                      </Tooltip>
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                p: { xs: 2, md: 4 }
              }}
            >
              <Avatar
                variant="rounded"
                src="./landing.svg"
                sx={{
                  height: { xs: '50vh', sm: '60vh', md: '70vh' },
                  width: { xs: '90%', sm: '85%', md: '80%' },
                  maxWidth: '800px',
                  maxHeight: '800px',
                  objectFit: 'contain',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                  }
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
