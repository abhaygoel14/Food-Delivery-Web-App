import { useState } from "react";
import { restaurant } from "../../constant";

const Shimmer = () => {
  const [restaurantList, setRestaurantList] = useState(restaurant);
  return (
    <>
      <div className="resturantList">
        {restaurantList.map((restaurant) => {
          return (
            <div className="shimmer-card">
              <div className="shimmer-image"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shimmer;
