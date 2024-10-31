import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography>
        Copyright 2024 @Ryananta Danendra, All right reserved
      </Typography>
      <Box className="social" sx={{ display: "flex", gap: "5px" }}>
        <a href="https://www.instagram.com/agunkdanend/">
          <InstagramIcon sx={{ fontSize: "2rem" }} />
        </a>
        <a href="https://x.com/ryananta_a">
          <TwitterIcon sx={{ fontSize: "2rem" }} />
        </a>
      </Box>
    </Box>
  );
};
export default Footer;
