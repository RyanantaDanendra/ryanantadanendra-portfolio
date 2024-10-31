import "../App.css";
import * as React from "react";
import { Container } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/material";
import Me from "../assets/hero.jpeg";
import Poppins from "../assets/font/Poppins-Regular.ttf";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
// TIMELINE
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const experienceListRow = () => {
  const experiences = [
    "2.5 Month internship  at PT. Bali Pustaka Digital as a web developer",
  ];

  return (
    <>
      {experiences.map((experience, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ textAlign: "justify" }}>
              {experience}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </>
  );
};

const About = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          height: "100%",
          marginTop: "20px",
          paddingTop: "50px",
          paddingBottom: "110px",
        }}
      >
        <Typography
          data-aos="fade-right"
          data-aos-delay="300"
          sx={{
            fontWeight: "bold",
            marginLeft: { xs: 0, lg: "130px" },
            fontSize: "3rem",
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          About
        </Typography>
        <Grid
          container
          spacing={3}
          className="about-gridcon"
          sx={{ paddingX: { lg: "130px", sm: "20px", xs: "5rem" } }}
        >
          <Grid
            item
            data-aos="fade-right"
            data-aos-delay="400"
            lg={6}
            sm={7}
            xs={12}
            sx={{ marginTop: "40px" }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: { lg: "justify", xs: "center" } }}
            >
              HEY THERE!
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "20px", textAlign: "justify" }}
            >
              My name is A. A. Ngurah Bagus Ryananta Danendra, you can call me
              Danend
              <br />
              <br />
              I was born on the 13th of April 2006 and im from Denpasar, Bali.
              <br />
              <br />
              Im a full - stack web developer and im currently a student at ITB
              Stikom Bali
            </Typography>
          </Grid>
          <Grid
            item
            data-aos="fade-left"
            data-aos-delay="400"
            lg={6}
            sm={5}
            xs={12}
            sx={{ marginTop: "40px" }}
          >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Experience
            </Typography>
            <Timeline>{experienceListRow()}</Timeline>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default About;
