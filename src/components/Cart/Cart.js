import React from 'react';
import './Cart.css'
import { BsFillCartFill } from "react-icons/bs";
const Cart = (props) => {
  const { name, action, bullet, capacity, category, img, price } = props.gun;
  console.log(name)
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="gun-info">
        <h1>name :{name}</h1>
        <p>Bullet Type:{bullet}</p>
        <p>Capacity : {capacity}</p>
        <p>Action : {action}</p>
        <p>Category : {category}</p>
        <h3>Price : $ {price}</h3>
      </div>
      <div>
        <button onClick={() => props.handleAddToCart(props.gun)}>
          <BsFillCartFill className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Cart;