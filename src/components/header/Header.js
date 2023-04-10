import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../../constant";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import UserContext from "../../../utils/UserContext";
import { useSelector } from "react-redux";

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
  @media screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    position: fixed;
    padding: 10px;
    height: 70px;
    & img {
      margin-bottom: 10px;
    }
  }
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
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Heading = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  useEffect(() => {
    getAuthentication();
  }, []);
  function getAuthentication() {
    setIsAuthenticate(true);
  }
  const { user, setUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
          <StyledLink to="/cart">
            {cartItems.length}
            <ShoppingCartIcon />
          </StyledLink>
          <StyledTypography
            onClick={() =>
              setUser({
                name: "Abhay",
              })
            }
          >
            {user.name}
          </StyledTypography>
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
