import React from "react";
import CartContext from "./cart-context";
 
const CartProvider = (props) => {
 const contextData = {
  items : [] ,
  totalQuantity : Number ,
  addItem : ()=>{} ,
  removeItem : ()=>{} ,
 }
   
  return <CartContext.Provider value={contextData}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
