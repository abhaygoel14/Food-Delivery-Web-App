import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FoodCard from "../FoodCard";
import { clearCart } from "../../../utils/store/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(clearCart());
  };
  console.log("Hello ", cartItem);
  return (
    <Box sx={{ marginTop: "88px" }}>
      <Typography variant="h4" sx={{ marginBottom: "16px" }}>
        Cart Item - {cartItem.length}
        <Button onClick={() => handleClearItem()}>Clear Item</Button>
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {cartItem.map((item) => {
          return <FoodCard key={item.id} {...item} />;
        })}
      </Box>
    </Box>
  );
};

export default Cart;
