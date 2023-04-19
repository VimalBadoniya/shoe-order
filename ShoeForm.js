import React from "react";
import "./ShoeForm.css";

const ShoeForm = () => {

    const addShoeHandler = (e)=>{
        e.preventDefault();
        console.log("adding ")

    };
  return (
    <div>
      <form className="my-form">
        <div>
          <label htmlFor="name">Shoe Name</label>
          <input type="text" id="name" name="name"></input>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description"></input>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price"></input>
        </div>

        <div className="div1">
          <h6>Quantity Available</h6>
          <div>
            <label htmlFor="L">L</label>
            <input type="number" id="L" name="L"></input>
          </div>
          <div>
            <label htmlFor="M">M</label>
            <input type="number" id="M" name="M"></input>
          </div>
          <div>
            <label htmlFor="S">S</label>
            <input type="number" id="S" name="S"></input>
          </div>
        </div>
        <div>
          <button type="submit" onClick={addShoeHandler}>Add Shoe</button>
        </div>
      </form>
    </div>
  );
};

export default ShoeForm;
