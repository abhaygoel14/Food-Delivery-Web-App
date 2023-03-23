import { restaurant } from "../../constant";
import { CARD_IMG_URL } from "../../constant";

const ResturantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
} = restaurant) => {
  return (
    <div className="card">
      <img src={CARD_IMG_URL + cloudinaryImageId} alt="Food Image" />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
    </div>
  );
};

export default ResturantCard;
