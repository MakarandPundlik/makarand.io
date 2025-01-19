import * as React from "react";
import "./home.css";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid2,
  Typography,
  CssBaseline,
} from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import { education } from "../data";

export default function Education(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="home">
        <Grid2 container>
          <Box className="box">
            <Typography
              variant="h3"
              sx={{ fontWeight: 100, marginLeft: "1rem" }}
            >
              Education
            </Typography>
            <Box sx={{ display: "flex" }}>
              {education.map(
                ({ school, degree, startDate, endDate, coursework, logo }) => {
                  return (
                    <Grid2 size={4}>
                      <Card
                        variant="elevation"
                        sx={{ margin: "1rem", maxWidth: "30rem" }}
                      >
                        <CardContent>
                          <Box sx={{ display: "flex", marginBottom: "1rem" }}>
                            <Avatar
                              variant="rounded"
                              src={logo}
                              sx={{ marginRight: "1rem", height: "2rem" }}
                            />
                            <Typography variant="p" sx={{ fontWeight: 100 }}>
                              {school}
                            </Typography>
                          </Box>

                          <Box sx={{ display: "flex", marginBottom: "1rem" }}>
                            <SchoolRoundedIcon
                              sx={{ marginRight: "1rem", fontSize: "2rem" }}
                            />
                            <Typography variant="p" sx={{ fontWeight: 100 }}>
                              {degree}
                            </Typography>
                          </Box>

                          <Box sx={{ display: "flex", marginBottom: "1rem" }}>
                            <DateRangeRoundedIcon
                              sx={{ marginRight: "1rem", fontSize: "2rem" }}
                            />
                            <Typography variant="p" sx={{ fontWeight: 100 }}>
                              {!endDate
                                ? `${startDate.substring(0, 10)} - Present`
                                : `${startDate.substring(
                                    0,
                                    10
                                  )} - ${endDate.substring(0, 10)}`}
                            </Typography>
                          </Box>
                          <Typography variant="p">
                            Coursework: {" " + coursework}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid2>
                  );
                }
              )}
            </Box>
          </Box>
        </Grid2>
      </Box>
    </React.Fragment>
  );
}
