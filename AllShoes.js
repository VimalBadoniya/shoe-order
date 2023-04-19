import React from "react";

const dummyData = [
  {
    id : "A01" ,
    name: "Adidas",
    description: "Blue Color Shoes",
    price: 500,
    L: 0,
    M: 10,
    S: 20,
  },
  {
    id : "A02" ,
    name: "Campus",
    description: "Black Color Shoes",
    price: 750,
    L: 50,
    M: 10,
    S: 20,
  },
  {
    id : "A03" ,
    name: "Reebok",
    description: "Light blue  Color Shoes",
    price: 1000,
    L: 30,
    M: 10,
    S: 20,
  },
  {
    id : "A04" ,
    name: "AIM",
    description: "Blue Color Shoes",
    price: 1250,
    L: 40,
    M: 10,
    S: 20,
  },
];



const AllShoes = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Size-L</td>
                        <td>Size-M</td>
                        <td>Size-S</td>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((row)=>{
                        return(
                            <tr key={row.id}>
                                <td>{row.name}</td>
                                <td>{row.description}</td>
                                <td>{row.price}</td>
                                <td><button>Buy Large {row.L}</button></td>
                                <td><button>Buy Medium {row.M}</button></td>
                                <td><button>Buy Small {row.S}</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default AllShoes;
