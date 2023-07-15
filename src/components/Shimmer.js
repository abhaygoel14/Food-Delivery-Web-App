import { Box } from "@mui/material";

const Shimmer = () => {
  return (
    <>
      <Box
        className="resturantList"
        data-testid="shimmer"
        sx={{ marginTop: "78px" }}
      >
        {Array(10)
          .fill("")
          .map((e, i) => {
            return (
              <Box className="shimmer-card" key={i}>
                <Box className="shimmer-image"></Box>
              </Box>
            );
          })}
      </Box>
    </>
  );
};

export default Shimmer;
