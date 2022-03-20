import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import "./Item.css";

const Item = ({ title, price, src }) => {
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
				<AddShoppingCartOutlinedIcon fontSize='large' className='shopping-cart' />
			</div>
		</div>
	);
};

export default Item;
