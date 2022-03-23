import React, { useContext } from "react";
import { CartContext } from "../../App";
import Item from "../Item/Item";
import "./Cart.css";

const Cart = () => {
	const { cartItems, setCartItems } = useContext(CartContext);

	return (
		<div className='cart-div'>
			<h1>Items in cart: {cartItems.length - 1}</h1>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<Item key={item.title} title={item.title} price={item.price} src={item.src} />
				))}
			</div>
		</div>
	);
};

export default Cart;
