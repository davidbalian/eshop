import React, { useContext, useEffect, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import "./Item.css";
import { CartContext, PreviousItemContext } from "../../App";
import { useFormControlUnstyled } from "@mui/base";

const Item = ({ title, price, src, quan }) => {
	const [quantityState, setQuantityState] = useState(0);
	const { cartItems, setCartItems } = useContext(CartContext);

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);

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
				{quantityState ? (
					<div className='quantity'>
						<RemoveRoundedIcon
							fontSize='large'
							className='add-remove-btn'
							onClick={() => {
								setQuantityState(quantityState - 1);
								let temp = cartItems;
								console.log(typeof temp);
								Array.from(temp).pop();
								setCartItems(temp);
							}}
						/>
						<p>{quantityState}</p>
						<AddRoundedIcon
							fontSize='large'
							className='add-remove-btn'
							onClick={() => {
								setQuantityState(quantityState + 1);
								let temp = { title: title, price: price, src: src };
								setCartItems([...cartItems, temp]);
							}}
						/>
					</div>
				) : (
					<AddShoppingCartOutlinedIcon
						fontSize='large'
						onClick={() => {
							setQuantityState(quantityState + 1);
							let temp = { title: title, price: price, src: src };
							setCartItems([...cartItems, temp]);
						}}
						className='shopping-cart'
					/>
				)}
			</div>
		</div>
	);
};

export default Item;
