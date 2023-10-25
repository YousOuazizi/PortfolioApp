import React from "react";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        Copyright &copy; Pete - &copy; 2022
      </Typography>
    </footer>
  );
};

export default Footer;
