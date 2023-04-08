import { Box, Typography } from "@mui/material";
import { restaurant } from "../../constant";
import { CARD_IMG_URL } from "../../constant";
import styled from "@emotion/styled";

const StyledTypography = styled(Typography)`
  color: #535665;
  font-size: 12px;
`;
const StyledRating = styled(Box)`
  height: 20px;
  width: 43px;
  padding: 0 5px;
  font-weight: 400;
  background-color: #48c479;
  color: #fff;
  overflow: hidden;
`;
const ResturantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  deliveryTime,
  costForTwoString,
} = restaurant) => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        backgroundColor: "white",
        padding: "20px 20px 30px",
        border: "1px solid #fff",
        contain: "content",
        boxShadow: "-1px 5px 10px 5px rgba(42, 42, 42, 0.2)",
        margin: "20px",
        cursor: "pointer",
      }}
    >
      <Box sx={{ width: "254px", position: "relative" }}>
        <img src={CARD_IMG_URL + cloudinaryImageId} alt="Food Image" />
        <Box sx={{ marginTop: "14px" }}>
          <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
            {name}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "4px" }}>
          <Typography sx={{ color: "#686b78", fontSize: "13px" }}>
            {cuisines.join(", ")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "18px",
          }}
        >
          <StyledRating>
            <Typography sx={{ paddingBottom: "5px", fontSize: "14px" }}>
              {avgRating + "★"}
            </Typography>
          </StyledRating>
          <StyledTypography>{deliveryTime + " MINS"}</StyledTypography>
          <StyledTypography>{costForTwoString}</StyledTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default ResturantCard;
