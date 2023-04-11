import React, { useState, useEffect } from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { GitHub, LocationOn, Email, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import useIsLargeView from "../../../utils/useIsLargeView";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3d4152;
  &:focus,
  &:hover {
    text-decoration: none;
    color: orange;
  }
`;
const StyleTitle = styled(Typography)`
  color: #3e4152;
  font-weight: 800;
  font-size: 2rem;
  display: inline-block;
`;
const About = () => {
  const [userData, setUserData] = useState(null);
  const isLargeView = useIsLargeView(786);

  useEffect(() => {
    getProfile();
  }, []);
  async function getProfile() {
    const data = await fetch("https://api.github.com/users/abhaygoel14");
    const json = await data.json();
    setUserData(json);
  }

  if (!userData) {
    return <div style={{ marginTop: "40px" }}>Loading...</div>;
  }

  const { name, avatar_url, location, html_url } = userData;

  return (
    <Box
      mt={5}
      sx={{
        display: "inline-block",
        margin: "80px 0px 5px",
        width: `calc(100%)`,
        borderRadius: "10px",
        backgroundColor: "white",
        padding: "0px 20px 5px",
        border: "1px solid #fff",
        contain: "content",
        boxShadow: "-1px 5px 10px 5px rgba(42, 42, 42, 0.2)",
        cursor: "pointer",
      }}
    >
      <Grid container direction="column" alignItems="center" spacing={3}>
        <Grid item>
          <Avatar alt={name} src={avatar_url} sx={{ width: 96, height: 96 }} />
        </Grid>
        <Grid item>
          <StyleTitle>{name}</StyleTitle>
        </Grid>
        <Grid item>
          <StyleTitle variant="body1">Contact Me :</StyleTitle>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <LocationOn />
            </Grid>
            <Grid item>
              <Typography variant="body2">{location + ", India"}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <Email />
            </Grid>
            <Grid item>
              <StyledLink to="mailto:abhay,goel14@gmail.com">
                <Typography variant="body2">
                  {"abhay.goel14@gmail.com"}
                </Typography>
              </StyledLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <GitHub />
            </Grid>
            <Grid item>
              <StyledLink to="https://github.com/abhaygoel14">
                <Typography variant="body2">{"abhaygoel14"}</Typography>
              </StyledLink>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={1}
            mt={2}
          >
            <Grid item>
              <LinkedIn />
            </Grid>
            <Grid item>
              <StyledLink to="https://www.linkedin.com/in/abhay-goel14/">
                <Typography variant="body2">{"abhay-goel14"}</Typography>
              </StyledLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <Box
                sx={{
                  background: "orange",
                  height: "160px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  padding: isLargeView ? "0 150px" : "0 12px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#fdfdfd",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  Food-Delivery-Web-App :
                  <Typography
                    sx={{
                      color: "#fdfdfd",
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    This is a web application for food delivery created using
                    ReactJS , Redux Toolkit, Material UI.
                    <Typography
                      sx={{
                        color: "#fdfdfd",
                        fontSize: "16px",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    >
                      {" "}
                      It uses the Swiggy public API to fetch data and generate
                      responses for restaurant cards and menus.
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fdfdfd",
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Features :
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fdfdfd",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    <li>
                      {" "}
                      Restaurant cards with details fetched from the Swiggy API
                    </li>
                    <li>Menus with details fetched from the Swiggy API</li>
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
