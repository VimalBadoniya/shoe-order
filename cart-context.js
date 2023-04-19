import React from "react";

const CartContext = React.createContext({
  items: Array,
  totalQuantity: Number,
  totalAmount: Number,
});

export default CartContext;
