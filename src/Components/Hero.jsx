import "../App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Me from "../assets/me1.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);

  // const theme = createTheme({
  //   Typography: {
  //     fontFamily: "Poppins",
  //   },
  // });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        id="Home"
        sx={{
          MaxHeight: "100%",
          minWidth: "100vw",
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingX: "40px",
          }}
          className="hero-gridcon"
        >
          <Grid
            item
            sm={4}
            xs={12}
            sx={{
              marginTop: { xs: "100px", sm: "5rem" },
            }}
            className="hero-griditm1"
          >
            <div
              style={{
                fontSize: "2.4rem",
                fontWeight: 900,
                fontFamily: "Poppins-bold",
                height: "8rem",
              }}
              className="typewriter-wrapper"
            >
              <Typewriter
                words={["Ryananta Danendra"]}
                loop={0}
                cursor
                cursorStyle="|"
                delaySpeed={5000}
                deleteSpeed={130}
                sx={{
                  fontWeight: 900,
                  fontSize: "2rem",
                }}
                className="name"
              />
            </div>
            <Typography
              data-aos="fade-right"
              data-aos-delay="1500"
              variant="h5"
              sx={{
                fontSize: { sm: "1rem", xs: "1rem" },
              }}
              className="hero-header-2"
            >
              Full - Stack Web Developer <br />
              Building Scalable, Robust Web Applications
            </Typography>
            <Button
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKGNfsvHVkvJVRMBhMKXBzwjfPjhGQDLMHKmkqLcTkjzPLnwxNzdQntMFwVDklQqvcRBB"
              data-aos="zoom-in-right"
              data-aos-delay="1800"
              sx={{
                marginTop: "15px",
                paddingX: "40px",
                paddingY: "20px",
                backgroundColor: "#003366",
                borderRadius: "30px",
                color: "white",
                "&:hover": {
                  color: "black",
                  border: "black 2px solid",
                  backgroundColor: "white",
                  transition: ".2s ease-out !important",
                },
              }}
            >
              Email Me
            </Button>
          </Grid>
          <Grid item sm={3} s={7}>
            <Box
              className="image-wrapper"
              sx={{
                width: "17rem",
                display: { xs: "flex" },
                justifyContent: { xs: "center", sm: "start" },
              }}
            >
              <img
                src={Me}
                alt="Me"
                className="hero-image"
                data-aos="zoom-in"
                data-aos-delay="2300"
                data-aos-easing="ease-out"
                data-aos-duration="300500"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            sm={4}
            xs={9}
            sx={{
              marginLeft: { lg: "7rem", xs: 0 },
              paddingLeft: { sm: "6rem" },
              display: "flex",
              alignItems: { xs: "center", sm: "center" },
              flexDirection: { sm: "column", xs: "row" },
              justifyContent: { xs: "center", sm: "start" },
              marginTop: { xs: "3rem", sm: "5rem" },
              gap: { xs: "2rem" },
            }}
            className="hero-griditm3"
          >
            <a href="https://github.com/RyanantaDanendra">
              <Box
                data-aos="zoom-out"
                data-aos-delay="2800"
                sx={{
                  width: { sm: "100px", xs: "120px" },
                  height: { sm: "100px", xs: "120px" },
                  backgroundColor: "#003366",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",

                  "&:hover": {
                    backgroundColor: "white",
                    border: "2px solid black",
                    transition: ".2s ease-out !important",
                    "&:hover .MuiSvgIcon-root": {
                      color: "black",
                      transition: ".2s ease-out",
                    },
                  },
                }}
              >
                <GitHubIcon sx={{ color: "white", fontSize: "4rem" }} />
              </Box>
            </a>
            <a href="https://www.linkedin.com/in/ryananta-danendra-540a272a5/">
              <Box
                data-aos="zoom-out"
                data-aos-delay="2800"
                sx={{
                  width: { sm: "100px", xs: "120px" },
                  height: { sm: "100px", xs: "120px" },
                  backgroundColor: "#003366",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  marginTop: { lg: "20px", xs: 0 },
                  "&:hover": {
                    backgroundColor: "white",
                    border: "2px solid black",
                    transition: ".2s ease-out !important",
                    "&:hover .MuiSvgIcon-root": {
                      color: "black",
                      transition: ".2s ease-out",
                    },
                  },
                }}
              >
                <LinkedInIcon sx={{ color: "white", fontSize: "4rem" }} />
              </Box>
            </a>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Hero;
