import ResturantCard from "./ResturantCard";
import { restaurant } from "../../constant";
import { useState } from "react";

//filter Data accoring to Search Text

function filterData(searchText, restaurantList) {
  const filterData = restaurantList.filter((resturant) => {
    return resturant?.data?.name.includes(searchText);
  });
  return filterData;
}
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resturantList, setResturantList] = useState(restaurant);
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() =>
            setResturantList(filterData(searchText, resturantList))
          }
        >
          Search
        </button>
      </div>
      <div className="resturantList">
        {resturantList.map((resturant, i) => {
          return (
            <ResturantCard {...resturant?.data} key={restaurant[i]?.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
