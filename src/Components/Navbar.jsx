import * as React from "react";
import "../App.css";
import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Button, createTheme, Menu, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { dark } from "@mui/material/styles/createPalette";

const pages = ["Home", "About", "Skills", "Projects"];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const Hamburger = () => {
    const [anchor, setAnchor] = useState(null);

    const handleOpen = (e) => {
      setAnchor(e.currentTarget);
    };

    const handleClose = (e) => {
      setAnchor(null);
    };

    if (window.innerWidth > 500) {
      return (
        <HideOnScroll {...props}>
          <AppBar
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "none",
              backdropFilter: "blur(5.2px)",
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, display: "block", color: "black" }}
                  href={"#" + `${page}`}
                >
                  {page}
                </Button>
              ))}
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      );
    } else {
      return (
        <HideOnScroll {...props}>
          <AppBar
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "none",
              backdropFilter: "blur(5.2px)",
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchor={anchor}
                keepMounted
                open={Boolean(anchor)}
                onClose={handleClose}
                sx={{ paddingX: "10rem" }}
              >
                {pages.map((page) => (
                  <MenuItem>
                    <Button
                      key={page}
                      sx={{ my: 2, display: "block", color: "black" }}
                      href={"#" + `${page}`}
                      onClick={handleClose}
                    >
                      {page}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      );
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <HideOnScroll {...props}>
        <AppBar
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "none",
            backdropFilter: "blur(5.2px)",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, display: "block", color: "black" }}
                href={"#" + `${page}`}
              >
                {page}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      </HideOnScroll> */}
      {Hamburger()}
      <Toolbar />
    </React.Fragment>
  );
}
