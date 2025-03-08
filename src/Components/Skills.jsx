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
import Postman from "../assets/Logo/postman.png";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { Description } from "@mui/icons-material";

const languagesData = () => {
  const languageImages = [Html, Css, Js, Php];

  return languageImages.map((image, index) => {
    return (
      <Box
        key={index}
        data-aos="fade-up"
        data-aos-delay="600"
        sx={{ width: { md: "80px", xs: "50px" } }}
        className="skills-image-wrapper"
      >
        <img
          src={image}
          alt=""
          className="skills-image"
          style={{ width: "100%", marginTop: "2rem" }}
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
        sx={{ width: { md: "100px", xs: "60px" }, marginTop: "2rem" }}
      >
        <img
          src={image}
          alt=""
          className="skills-image"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </Box>
    );
  });
};

const developerTools = () => {
  const toolImages = [Git, Github, Mysql, Wp, Vscode, Postman];

  return toolImages.map((image, index) => {
    return (
      <Box
        key={index}
        data-aos="fade-up"
        data-aos-delay="600"
        sx={{ width: { md: "100px", xs: "60px" } }}
      >
        <img
          src={image}
          alt=""
          className="skills-image"
          style={{ objectFit: "contain", width: "100%" }}
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
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "2.5rem", lg: "4rem" },
            textAlign: "center",
            fontFamily: "Poppins",
          }}
        >
          Skills
        </Typography>
        <Grid
          container
          spacing={0}
          sx={{
            marginTop: "40px",
            paddingX: { lg: "30px", sm: 0 },
            display: "flex",
            justifyContent: "center",
            gap: "9rem",
          }}
        >
          <Grid
            item
            sm={4}
            sx={{
              marginTop: "50px",
              paddingX: { sm: "1rem", lg: 0 },
            }}
            className="skills-griditm1"
          >
            <Typography>Languages</Typography>
            <Box
              className="skills-wrapper"
              sx={{
                width: "25rem",
                height: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2rem",
                boxShadow: "none",
                paddingRight: "5rem",
                // paddingX: "2rem",
              }}
            >
              {languagesData()}
            </Box>
          </Grid>
          <Grid
            item
            sm={5}
            sx={{
              marginTop: { sm: "50px", xs: 0 },
            }}
          >
            <Typography>Frameworks</Typography>
            <Box
              className="skills-wrapper"
              sx={{
                display: "flex",
                width: "25rem",
                height: "100%",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                paddingLeft: "2rem",
                paddingRight: "4rem",
              }}
            >
              {frameworksData()}
            </Box>
          </Grid>
          <Grid
            item
            sm={5}
            sx={
              {
                // paddingX: { xs: "2rem", lg: 0 },
              }
            }
          >
            <Typography
              variant="h3"
              data-aos="fade-right"
              data-aos-delay="400"
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                // paddingLeft: { xs: "3rem" },
              }}
            >
              Developer Tools
            </Typography>
            <Box
              className="skills-wrapper"
              sx={{
                display: "flex",
                width: "25rem",
                height: "100%",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "2rem",
                paddingRight: "4rem",
              }}
            >
              {developerTools()}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Skills;
