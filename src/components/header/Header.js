import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../../constant";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledHeading = styled(Box)`
  display: flex;
  box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 74px;
  background: #fff;
  z-index: 1000;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.3s ease;
  contain: size layout style;
  padding: 0 20px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3d4152;
  &:focus,
  &:hover {
    text-decoration: none;
    color: orange;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
`;

const Heading = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  useEffect(() => {
    getAuthentication();
  }, []);
  function getAuthentication() {
    setIsAuthenticate(true);
  }
  return (
    <StyledHeading className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <StyledLink to={"/"}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            Khana Khazana
          </Typography>
        </StyledLink>
        <Box
          sx={{
            display: "flex",
            width: "35%",
            justifyContent: "space-evenly",
          }}
        >
          <StyledLink to="/">
            <StyledTypography>Home</StyledTypography>
          </StyledLink>
          <StyledLink to="/about">
            <StyledTypography>About</StyledTypography>
          </StyledLink>
          <StyledLink to="/contact">
            <StyledTypography>Contact</StyledTypography>
          </StyledLink>
        </Box>
      </Box>
      <Button
        type="submit"
        onClick={() =>
          isAuthenticate ? setIsAuthenticate(false) : setIsAuthenticate(true)
        }
        sx={{
          background: "orange",
          width: "20%",
          height: "36px",
          marginTop: "16px",
          color: "#3d4152",
          "&:hover ": {
            background: "orange",
          },
        }}
      >
        {isAuthenticate ? "Log out" : "Login"}
      </Button>
    </StyledHeading>
  );
};

export default Heading;
