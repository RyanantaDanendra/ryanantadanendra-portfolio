import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import Kicks from "../assets/Logo/kicks.png";
import KicksVideo from "../assets/Logo/kicks.mp4";
import Tour from "../assets/Logo/tour.jpg";
import TourVideo from "../assets/Logo/tour.mp4";
import Ssamaya from "../assets/Logo/ssamaya.png";
import SsamayaVideo from "../assets/Logo/ssamaya.mp4";
import Dstore from "../assets/Logo/dstore_image.png";
import DstoreVideo from "../assets/Logo/dstore_video.mp4";
import Dmovie from "../assets/Logo/dmovie_image.jpg";
import Dimages from "../assets/Logo/dimages_image.jpg";
import DimagesVideo from "../assets/Logo/dimages_video.mp4";
import DmovieVideo from "../assets/Logo/dmovie_video.mp4";
import { IconButton } from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Html from "../assets/Logo/html.png";
import Tailwind from "../assets/Logo/tailwind.png";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const RenderProjects = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth > 800);
  const videoRef = useRef(null);

  useEffect(() => {
    // SCREEN WIDTH
    const handleRezise = () => setScreenWidth(window.innerWidth > 800);
    window.addEventListener("resize", handleRezise);

    // ON SCROLL
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      window.removeEventListener("resize", handleRezise);
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const renderCondition = () => {
    if (screenWidth) {
      return (
        <Box
          sx={{
            width: "27rem",
            height: "26rem",
          }}
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              width: "100%",
            }}
          >
            {isHovered ? (
              <video
                src={project.video}
                autoPlay
                muted
                className="project-vid"
                style={{ width: "100%" }}
              />
            ) : (
              <img
                src={project.image}
                alt="image"
                className="project-img"
                style={{ width: "100%" }}
              />
            )}
          </div>
          <Box sx={{ paddingX: "30px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  marginTop: "10px",
                  fontWeight: 200,
                  fontFamily: "Poppins",
                  fontSize: { md: "2rem" },
                }}
              >
                {project.title}
              </Typography>
              <a href={project.link}>
                <IconButton>
                  <InsertLinkIcon
                    sx={{
                      fontSize: "3rem",
                      fontFamily: "Poppins",
                      color: "black",
                      "&:hover": {
                        opacity: "50%",
                        transition: ".2s ease-in",
                      },
                    }}
                  />
                </IconButton>
              </a>
            </Box>
            <Typography
              variant="h5"
              sx={{
                marginTop: "10px",
                fontFamily: "Poppins",
                fontSize: "1.2rem",
              }}
            >
              Made with: {project.madeWith}
            </Typography>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            width: "30rem",
            height: "30rem",
            // marginBottom: "30rem",
          }}
        >
          <div
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          >
            <video
              src={project.video}
              autoPlay
              muted
              ref={videoRef}
              className="project-vid"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </div>
          <Box sx={{ paddingX: "10px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "2.3rem",
                  fontFamily: "Poppins",
                }}
              >
                {project.title}
              </Typography>
              <a href={project.link}>
                <IconButton>
                  <InsertLinkIcon
                    sx={{
                      fontSize: "2.8rem",
                      fontFamily: "Poppins",
                      color: "black",
                      "&:hover": {
                        opacity: "50%",
                        transition: ".2s ease-in",
                      },
                    }}
                  />
                </IconButton>
              </a>
            </Box>
            <Typography
              variant="h5"
              sx={{
                marginTop: "10px",
                fontSize: ".9rem",
                fontFamily: "Poppins",
              }}
            >
              Made with: {project.madeWith}
            </Typography>
          </Box>
        </Box>
      );
    }
  };

  return (
    <Grid
      item
      md={6}
      xs={12}
      data-aos="fade-up"
      data-aos-delay="400"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {renderCondition()}
    </Grid>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Kicks",
      madeWith: "HTML, Tailwind, Laravel",
      image: Kicks,
      video: KicksVideo,
      link: "https://github.com/RyanantaDanendra/latihan-Laravel",
    },
    {
      title: "Tour",
      madeWith: "HTML, Tailwind, Laravel",
      image: Tour,
      video: TourVideo,
      link: "https://github.com/RyanantaDanendra/tour",
    },
    {
      title: "D Store",
      madeWith: "HTML, Tailwind, React, Laravel",
      image: Dstore,
      video: DstoreVideo,
      link: "https://github.com/RyanantaDanendra/dStore",
    },
    {
      title: "Ssamaya spa",
      madeWith: "Elementor ( Wordpress )",
      image: Ssamaya,
      video: SsamayaVideo,
      link: "https://ssamayaspabali.com/",
    },
    {
      title: "D Movie",
      madeWith: "React Js, themoviedb ( API )",
      image: Dmovie,
      video: DmovieVideo,
      link: "https://github.com/RyanantaDanendra/dMovie",
    },
    {
      title: "D Images",
      madeWith: "React Js, Pixabay ( API )",
      image: Dimages,
      video: DimagesVideo,
      link: "https://github.com/RyanantaDanendra/dImages",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        id="Projects"
        sx={{ minHeight: "100vh", marginTop: "10rem" }}
      >
        <Typography
          variant="h3"
          data-aos="fade-right"
          data-aos-delay="400"
          sx={{
            fontWeight: "bold",
            marginLeft: { lg: "130px", sm: 0 },
            fontSize: { xs: "2rem", md: "2.5rem", lg: "4rem" },
            textAlign: { lg: "left", sm: "center", xs: "center" },
            fontFamily: "Poppins",
          }}
        >
          Projects{" "}
        </Typography>
        <Grid
          container
          spacing={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {projects.map((project, index) => (
            <RenderProjects project={project} key={index} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Projects;
