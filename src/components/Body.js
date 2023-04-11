import ResturantCard from "./ResturantCard";
import { restaurant, RESTURANT_API_URL } from "../../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3d4152;
  &:focus,
  &:hover {
    text-decoration: none;
    color: orange;
  }
`;

//filter Data according to Search Text

function filterData(searchText, restaurantList) {
  const filterData = restaurantList.filter((resturant) => {
    return resturant?.data?.name
      .toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  return filterData;
}
const Body = () => {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);

  useEffect(() => {
    getResturant();
  }, []);

  //API CALL OF SWIGGY
  async function getResturant() {
    try {
      const response = await fetch(RESTURANT_API_URL);
      const json = await response.json();
      setFilterRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
      setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      return console.error(e);
    }
  }
  //CONDITIONAL RENDERING
  return (
    <>
      <Box
        sx={{ marginTop: "90px", display: "flex", justifyContent: "center" }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for restaurant"
          value={searchText}
          sx={{
            width: "50%",
            "& .MuiInputBase-root-MuiOutlinedInput-root": {
              width: "80%",
              paddingRight: 0,
            },
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (searchText.length <= 1) {
              getResturant();
            }
            const data = filterData(searchText, allRestaurantList);
            setFilterRestaurantList(data);
          }}
          InputProps={{
            sx: {
              "& .MuiOutlinedInput-input": {
                outline: "none",
                width: "80%",
                paddingRight: 0,
              },
              "& .MuiOutlinedInput-input:focus": {
                outline: "none",
              },
            },
            endAdornment: (
              <Box sx={{ marginLeft: 5 }}>
                <Button
                  type="submit"
                  onClick={() => {
                    const data = filterData(searchText, allRestaurantList);
                    setFilterRestaurantList(data);
                  }}
                  sx={{
                    background: "orange",
                    color: "#3d4152",
                    "&:hover ": {
                      background: "orange",
                    },
                  }}
                >
                  Search
                </Button>
              </Box>
            ),
          }}
        />
      </Box>
      {allRestaurantList.length > 0 ? (
        <Box className="resturantList" sx={{ background: "" }}>
          {filterRestaurantList.length > 0 ? (
            filterRestaurantList?.map((resturant) => {
              console.log(resturant?.data);
              return (
                <StyledLink to={"/" + resturant?.data?.id}>
                  <ResturantCard
                    {...resturant?.data}
                    key={resturant?.data?.id}
                  />
                </StyledLink>
              );
            })
          ) : (
            <Box
              sx={{
                marginTop: "200px",
                background: "orange",
                padding: "0 150px",
                height: "160px",
                borderRadius: "15px",
              }}
            >
              <Typography
                sx={{
                  color: "#fdfdfd",
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "50px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Resturant you are trying to search is not available !
              </Typography>
            </Box>
          )}
        </Box>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default Body;
