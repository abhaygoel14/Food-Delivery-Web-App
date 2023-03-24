import ResturantCard from "./ResturantCard";
import { restaurant, RESTURANT_API_URL } from "../../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//filter Data accoring to Search Text

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
    const response = await fetch(RESTURANT_API_URL);
    const json = await response.json();
    setFilterRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  }
  //CONDITIONAL RENDERING
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterData(searchText, allRestaurantList);
            setFilterRestaurantList(data);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            const data = filterData(searchText, allRestaurantList);
            setFilterRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurantList.length > 0 ? (
        <div className="resturantList">
          {filterRestaurantList.length > 0 ? (
            filterRestaurantList?.map((resturant) => {
              return (
                <ResturantCard {...resturant?.data} key={resturant?.data?.id} />
              );
            })
          ) : (
            <h1>Resturant you are trying to search is not available!</h1>
          )}
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default Body;
