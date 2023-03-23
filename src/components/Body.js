import ResturantCard from "./ResturantCard";
import { restaurant } from "../../constant";

const Body = () => {
  return (
    <div className="resturantList">
      {restaurant.map((resturant, i) => {
        return (
          <ResturantCard {...resturant?.data} key={restaurant[i]?.data?.id} />
        );
      })}
    </div>
  );
};

export default Body;
