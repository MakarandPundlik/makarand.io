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
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data";
import * as icons from "simple-icons";

const MotionCard = motion(Card);
const MotionTypography = motion(Typography);
const MotionAvatar = motion(Avatar);

export default function Experience(props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Grid2
          container
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh", marginTop: "10rem" }}
        >
          <MotionTypography 
            variant="h2" 
            sx={{ fontWeight: 100 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Projects
          </MotionTypography>
          {/* Left Section */}
          <Grid2 container spacing={3}>
            {projects.map((exp, index) => (
              <Grid2 item key={index} size={{ md: 4, xl: 4, xs: 12, lg: 4 }}>
                <MotionCard 
                  sx={{ margin: "1rem 2rem" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <CardContent>
                    <Grid2 container spacing={2}>
                      <Grid2 item>
                        <MotionAvatar
                          sx={{
                            height: "3rem",
                            width: "3rem",
                          }}
                          variant="rounded"
                          src={exp.image}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
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
                      <Grid2 container spacing={2}>
                        {exp.techStack?.map((icon) => {
                          return (
                            <Typography variant="p">
                              <Link
                                target="_blank"
                                color="inherit"
                                sx={{ textDecoration: "none" }}
                                href={icon.link}
                              >
                                <MotionAvatar
                                  className="social-icon"
                                  variant="square"
                                  src={`https://cdn.simpleicons.org/${
                                    icons[icon.slug].slug
                                  }`}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                                />
                              </Link>
                            </Typography>
                          );
                        })}
                      </Grid2>
                    </Grid2>
                  </CardContent>
                </MotionCard>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </motion.div>
    </AnimatePresence>
  );
}
