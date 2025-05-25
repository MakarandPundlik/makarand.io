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
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data";

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
          sx={{ minHeight: "100vh" }}
          marginLeft="10%"
        >
          {/* Left Section */}
          <Grid2 item size={{ lg: 12, sx: 12, xl: 6, md: 12 }}>
            <MotionTypography 
              variant="h2" 
              sx={{ fontWeight: 100 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Work Experience
            </MotionTypography>
            <MotionAvatar
              variant="rounded"
              src="./experience.svg"
              style={{ height: "60vh", width: "80vh" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </Grid2>

          {/* Right Section */}
          <Grid2
            container
            spacing={2}
            size={{ lg: 6, sx: 12, xl: 6, md: 6 }}
            alignItems="center"
            justifyContent="center"
          >
            {experience.map((exp, index) => (
              <Grid2 item key={index} size={{ md: 6, xl: 6, xs: 12, lg: 6 }}>
                <MotionCard 
                  sx={{ 
                    marginRight: "2rem", 
                    marginTop: "2rem",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
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
                </MotionCard>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </motion.div>
    </AnimatePresence>
  );
}
