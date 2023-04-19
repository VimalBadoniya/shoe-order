import React from "react";

const ShoeContext = React.createContext({
  allShoes: [],
  addNewShoe: () => {},
});

export default ShoeContext ;
