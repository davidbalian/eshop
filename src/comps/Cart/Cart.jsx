import React, { useContext } from "react";
import { CartCounterContext, CartProductsContext } from "../../App";
import Item from "../Item/Item";
import "./Cart.css";

const Cart = () => {
	const { itemsCount } = useContext(CartCounterContext);
	const { itemsInCart } = useContext(CartProductsContext);

	return (
		<div>
			<h1>Items in cart: {itemsCount}</h1>
			<div className='cart'></div>
		</div>
	);
};

export default Cart;
