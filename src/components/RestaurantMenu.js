import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CARD_IMG_URL, RESTAURANT_MENU_URL } from "../../constant";
import Shimmer from "./Shimmer.js";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/store/cartSlice";
import styled from "@emotion/styled";
import MenuCard from "./MenuCard";

const StyledTypography = styled(Typography)`
  margin-top: 20px;
  font-size: 0.93rem;
  color: #7e808c;
  height: calc(0.93rem + 2px);
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  white-space: nowrap;
`;
const StyleTitle = styled(Typography)`
  color: #3e4152;
  font-weight: 800;
  font-size: 2rem;
  display: inline-block;
  margin-top: 40px;
  margin-left: 8px;
`;
const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(0);
  const [restaurant, setRestaurant] = useState({});
  const resId = useParams();
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    const data = await fetch(RESTAURANT_MENU_URL + resId.id);
    const json = await data.json();
    setRestaurant(json?.data?.cards[0].card?.card.info);
    setRestaurantMenu(
      json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        ?.card?.itemCards
    );
  }

  return restaurantMenu ? (
    <Box sx={{ marginTop: "88px" }}>
      <Box
        sx={{
          display: "inline-block",
          margin: "10px 60px",
          width: `calc(100% - 120px)`,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <img
              src={CARD_IMG_URL + restaurant.cloudinaryImageId}
              alt={restaurant.name}
            />
            <StyleTitle>{restaurant.name}</StyleTitle>
          </Box>

          <Box
            sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
          >
            <StyledTypography>Area : {restaurant.areaName}</StyledTypography>
            <StyledTypography>
              Cuisines : {restaurant.cuisines.join(", ")}
            </StyledTypography>
            <StyledTypography>
              Cost for Two : {restaurant.costForTwoMessage}
            </StyledTypography>
            <StyledTypography>
              Average Rating : {restaurant.avgRating} stars
            </StyledTypography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ margin: "0 50px" }} />
      <MenuCard restaurantMenu={restaurantMenu} />
    </Box>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
