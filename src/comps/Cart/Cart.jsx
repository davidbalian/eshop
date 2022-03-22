import React, { useContext } from "react";
import Item from "../Item/Item";
import "./Cart.css";

const Cart = () => {
	return (
		<div className='cart-div'>
			<h1>Items in cart: 0</h1>
			<div className='cart-items'></div>
		</div>
	);
};

export default Cart;
