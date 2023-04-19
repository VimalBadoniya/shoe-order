import React, { useState } from "react";
import ShoeContext from "./shoe-context";
import AllShoes from "../components/AllShoes";



const ShoeProvider = (props) => {
  const [dummyData, setDummyData] = useState([
    {
      id: "A01",
      name: "Adidas",
      description: "Blue Color Shoes",
      price: 500,
      L: 0,
      M: 10,
      S: 20,
    },
    {
      id: "A02",
      name: "Campus",
      description: "Black Color Shoes",
      price: 750,
      L: 50,
      M: 10,
      S: 20,
    },
    {
      id: "A03",
      name: "Reebok",
      description: "Light blue  Color Shoes",
      price: 1000,
      L: 30,
      M: 10,
      S: 20,
    },
    {
      id: "A04",
      name: "AIM",
      description: "Blue Color Shoes",
      price: 1250,
      L: 40,
      M: 10,
      S: 20,
    },
  ]);
   
  const contextObj = {
    allShoes : dummyData ,
    addNewShoe: () => {},
  }
  return (
    <ShoeContext.Provider value={contextObj}>
      <AllShoes />
    </ShoeContext.Provider>
  );
};

export default ShoeProvider;
