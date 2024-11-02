import "../App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import Html from "../assets/Logo/html.png";
import Css from "../assets/Logo/css.png";
import Php from "../assets/Logo/php.png";
import Js from "../assets/Logo/js.png";
import Git from "../assets/Logo/git.png";
import Github from "../assets/Logo/github.png";
import Vscode from "../assets/Logo/vscode.png";
import Wp from "../assets/Logo/wordpress1.png";
import Bootstrap from "../assets/Logo/bootstrap.png";
import Tailwind from "../assets/Logo/tailwind.png";
import ReactLogo from "../assets/Logo/react.png";
import Mui from "../assets/Logo/mui.png";
import Laravel from "../assets/Logo/laravel.png";
import Mysql from "../assets/Logo/mysql.png";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const languagesData = () => {
  const languageImages = [Html, Css, Js, Php];

  return languageImages.map((image, index) => {
    return (
      <Box
        key={index}
        data-aos="fade-up"
        data-aos-delay="600"
        sx={{ width: { lg: "150px", xs: "100px" }, marginTop: "2rem" }}
        className="skills-image-wrapper"
      >
        <img
          src={image}
          alt=""
          className="skills-image"
          style={{ objectFit: "contain", width: "12rem", height: "12rem" }}
        />
      </Box>
    );
  });
};

const frameworksData = () => {
  const frameworkImages = [Bootstrap, Tailwind, ReactLogo, Laravel, Mui];

  return frameworkImages.map((image, index) => {
    return (
      <Box
        key={index}
        data-aos="fade-up"
        data-aos-delay="600"
        sx={{ width: "150px", marginTop: "2rem" }}
      >
        <img
          src={image}
          alt=""
          className="skills-image"
          style={{ objectFit: "contain", width: "12rem", height: "12rem" }}
        />
      </Box>
    );
  });
};

const developerTools = () => {
  const toolImages = [Git, Github, Mysql, Wp, Vscode];

  return toolImages.map((image, index) => {
    return (
      <Box
        key={index}
        data-aos="fade-up"
        data-aos-delay="600"
        sx={{ width: "150px", marginTop: "2rem" }}
      >
        <img
          src={image}
          alt=""
          className="skills-image"
          style={{ objectFit: "contain", width: "10rem", height: "10rem" }}
        />
      </Box>
    );
  });
};

const Skills = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        id="Skills"
        sx={{
          height: "100%",
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
            marginLeft: { lg: "130px", sm: 0 },
            textAlign: { lg: "left", sm: "center", xs: "center" },
          }}
        >
          Skills
        </Typography>
        <Grid
          container
          spacing={0}
          sx={{ marginTop: "80px", paddingX: { lg: "30px", sm: 0 } }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: { lg: "left", sm: "center", xs: "center" },
              width: "100vw",
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.2rem" },
            }}
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Languages
          </Typography>
          <Grid
            item
            lg={12}
            md={9}
            sm={10}
            xs={9}
            sx={{
              display: "flex",
              gap: "10rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "50px",
              paddingX: { xs: "1rem", lg: 0 },
            }}
            className="skills-griditm1"
          >
            {languagesData()}
          </Grid>
          <Typography
            variant="h4"
            data-aos="fade-right"
            data-aos-delay="400"
            sx={{
              marginTop: "8rem",
              textAlign: { lg: "left", sm: "center", xs: "center" },
              width: "100vw",
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.2rem" },
            }}
          >
            Frameworks & Libraries
          </Typography>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              gap: "10rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "50px",
              paddingRight: { xs: "2rem", lg: 0 },
            }}
          >
            {frameworksData()}
          </Grid>
          <Typography
            variant="h4"
            data-aos="fade-right"
            data-aos-delay="400"
            sx={{
              marginTop: "8rem",
              textAlign: { lg: "left", xs: "center" },
              width: "100vw",
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.2rem" },
            }}
          >
            Developer Tools
          </Typography>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              gap: "10rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "50px",
              paddingX: { xs: "2rem", lg: 0 },
            }}
          >
            {developerTools()}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Skills;
