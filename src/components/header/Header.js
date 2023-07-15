import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../../constant";
import { Box, Button, Drawer, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import UserContext from "../../../utils/UserContext";
import { useSelector } from "react-redux";
import useIsLargeView from "../../../utils/useIsLargeView";
import { Menu } from "@mui/icons-material";
import ErrorBoundary from "../ErrorBoundary";

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
  color: #3e4152;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-block;
  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
    font-weight: 600;
    color: #3e4152;
    padding: 35px;
    display: flex;
    justify-content: center;
  }
`;

const Heading = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getAuthentication();
  }, []);
  function getAuthentication() {
    setIsAuthenticate(true);
  }
  const { user, setUser } = useContext(UserContext);
  const isLargeView = useIsLargeView(760);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <ErrorBoundary>
      <StyledHeading className="header">
        <div>
          <img data-testid="logo" className="logo" src={LOGO_URL} alt="logo" />
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
                fontSize: isLargeView ? "20px" : "16px",
              }}
            >
              Khana Khazana
            </Typography>
          </StyledLink>
          {!isLargeView && (
            <Box sx={{ display: "flex" }}>
              <StyledLink to="/cart">
                <ShoppingCartIcon />
                <Typography
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: "23%",
                    backgroundColor: "orange",
                    borderRadius: "50%",
                    color: "white",
                    width: 20,
                    height: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  {cartItems.length}
                </Typography>
              </StyledLink>
            </Box>
          )}
          {isLargeView ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  width: "70%",
                  justifyContent: "space-evenly",
                  overflow: "hidden",
                }}
              >
                <StyledLink to="/">
                  <StyledTypography>Home</StyledTypography>
                </StyledLink>
                <StyledLink to="/about">
                  <StyledTypography>About</StyledTypography>
                </StyledLink>
                <StyledLink to="/help">
                  <StyledTypography>Help</StyledTypography>
                </StyledLink>
                <Box sx={{ display: "flex" }}>
                  <StyledLink to="/cart">
                    <ShoppingCartIcon />
                    <Typography
                      sx={{
                        position: "fixed",
                        top: 8,
                        right: "33%",
                        backgroundColor: "orange",
                        borderRadius: "50%",
                        color: "white",
                        width: 20,
                        height: 21,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                      }}
                      data-testid="cart"
                    >
                      {cartItems.length}
                    </Typography>
                  </StyledLink>
                </Box>
                <StyledTypography
                  onClick={() =>
                    setUser({
                      name: "Abhay",
                    })
                  }
                >
                  {user.name}
                </StyledTypography>
                <Button
                  type="submit"
                  onClick={() =>
                    isAuthenticate
                      ? setIsAuthenticate(false)
                      : setIsAuthenticate(true)
                  }
                  sx={{
                    background: "orange",
                    width: "20%",
                    height: "36px",
                    color: "#3d4152",
                    "&:hover ": {
                      background: "orange",
                    },
                  }}
                >
                  {isAuthenticate ? "Log out" : "Login"}
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Menu onClick={() => setIsOpen(true)} />
              <Box component="nav">
                <Drawer
                  anchor={"right"}
                  variant="temporary"
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: "50%",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      overflow: "hidden",
                    }}
                  >
                    <StyledLink to="/">
                      <StyledTypography>Home</StyledTypography>
                    </StyledLink>
                    <StyledLink to="/about">
                      <StyledTypography>About</StyledTypography>
                    </StyledLink>
                    <StyledLink to="/help">
                      <StyledTypography>Help</StyledTypography>
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
                    <Button
                      type="submit"
                      onClick={() =>
                        isAuthenticate
                          ? setIsAuthenticate(false)
                          : setIsAuthenticate(true)
                      }
                      sx={{
                        background: "orange",
                        width: "100%",
                        height: "36px",
                        color: "#3d4152",
                        "&:hover ": {
                          background: "orange",
                        },
                      }}
                    >
                      {isAuthenticate ? "Log out" : "Login"}
                    </Button>
                  </Box>
                </Drawer>
              </Box>
            </>
          )}
        </Box>
      </StyledHeading>
    </ErrorBoundary>
  );
};

export default Heading;
