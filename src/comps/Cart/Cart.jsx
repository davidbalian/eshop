import React, { useContext } from "react";
import { CartCounterContext, CartProductsContext } from "../../App";
import Item from "../Item/Item";
import "./Cart.css";

const Cart = () => {
	const { itemsCount } = useContext(CartCounterContext);
	const { itemsInCart } = useContext(CartProductsContext);

	return (
		<div className='cart-div'>
			<h1>Items in cart: {itemsCount}</h1>
			<div className='cart-items'>
				{console.log(itemsInCart.slice(1))}
				{itemsInCart.slice(1).map((item) => (
					<Item key={item.title} title={item.title} price={item.price} src={item.src} />
				))}
			</div>
		</div>
	);
};

export default Cart;
