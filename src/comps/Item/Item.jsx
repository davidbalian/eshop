import React, { useContext, useEffect } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import "./Item.css";
import { CartCounterContext, CartProductsContext } from "../../App";

const Item = ({ title, price, src }) => {
	const { itemsCount, setItemsCount } = useContext(CartCounterContext);
	const { itemsInCart, setItemsInCart } = useContext(CartProductsContext);

	return (
		<div className='item'>
			<img src={src} alt='' />
			<div className='details-cart'>
				<div className='item-details'>
					<h2>{title}</h2>
					<p>€ {price}</p>
				</div>
				{/* <button className='cta-button'>Add to cart</button>
				 */}
				<AddShoppingCartOutlinedIcon
					fontSize='large'
					className='shopping-cart'
					onClick={() => {
						setItemsCount(itemsCount + 1);
						setItemsInCart([...itemsInCart, { title: title, price: price, src: src }]);
					}}
				/>
			</div>
		</div>
	);
};

export default Item;
