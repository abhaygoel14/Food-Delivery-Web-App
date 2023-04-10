import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CARD_IMG_URL, RESTAURANT_MENU_URL } from "../../constant";
import Shimmer from "./Shimmer.js";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/store/cartSlice";
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

  const dispatch = useDispatch();

  const handleAddItem = (menu) => {
    dispatch(addItem(menu));
  };
  const handleRemoveItem = (menu) => {
    console.log("Hello", menu);
    dispatch(removeItem(menu));
  };
  return restaurantMenu ? (
    <Box className="restaurant-menu" sx={{ marginTop: "88px" }}>
      <Box>
        <h1>Resturant Id :{resId.id}</h1>
        <h1>{restaurant.name}</h1>
        <img
          src={CARD_IMG_URL + restaurant.cloudinaryImageId}
          alt={restaurant.name}
        />
        <h3>Area : {restaurant.areaName}</h3>
        <h3>Cuisines : {restaurant.cuisines.join(", ")}</h3>
        <h4>Cost for Two : {restaurant.costForTwoMessage}</h4>
        <h4>Average Rating : {restaurant.avgRating} stars</h4>
      </Box>
      <Box className="menu">
        <h1>Menu</h1>
        <ul>
          {restaurantMenu.map((menu, i) => {
            return (
              <Box sx={{ display: "flex" }}>
                <li key={i}>
                  {menu?.card?.info?.name}
                  <Button onClick={() => handleAddItem(menu?.card?.info)}>
                    Add Item
                  </Button>
                  <Button onClick={() => handleRemoveItem(menu?.card?.info)}>
                    Remove
                  </Button>
                </li>
              </Box>
            );
          })}
        </ul>
      </Box>
    </Box>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
