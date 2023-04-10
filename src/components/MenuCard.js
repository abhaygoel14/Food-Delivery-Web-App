import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/store/cartSlice";
import styled from "@emotion/styled";

const StyledTypography = styled(Typography)`
  color: #3e4152;
  font-weight: 800;
  font-size: 2rem;
  display: inline-block;
`;

const StyledList = styled(Typography)`
  margin-right: 4px;
  font-size: 1.22rem;
  font-weight: 700;
  color: #3e4152;
  word-break: break-word;
`;
const MenuCard = ({ restaurantMenu }) => {
  const dispatch = useDispatch();

  const handleAddItem = (menu) => {
    dispatch(addItem(menu));
  };
  const handleRemoveItem = (menu) => {
    dispatch(removeItem(menu));
  };
  return (
    <>
      <Box
        sx={{
          display: "inline-block",
          margin: "20px 60px",
          width: `calc(100% - 120px)`,
        }}
      >
        <StyledTypography>Menu</StyledTypography>
        <ul>
          {restaurantMenu.map((menu, i) => {
            const [addItemMenu, setAddItemMenu] = useState(false);
            return (
              <Box
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "20px 20px 30px",
                  border: "1px solid #fff",
                  contain: "content",
                  margin: "20px",
                  cursor: "pointer",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <li key={i}>
                    <StyledList>{menu?.card?.info?.name}</StyledList>
                  </li>
                  {!addItemMenu ? (
                    <Button
                      onClick={() => {
                        handleAddItem(menu?.card?.info);
                        setAddItemMenu(true);
                      }}
                    >
                      Add Item
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        handleRemoveItem(menu?.card?.info);
                        setAddItemMenu(false);
                      }}
                    >
                      Remove
                    </Button>
                  )}
                </Box>
                <Divider />
              </Box>
            );
          })}
        </ul>
      </Box>
    </>
  );
};

export default MenuCard;
