import React, { useContext, useEffect, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import "./Item.css";

const Item = ({ title, price, src, quan }) => {
	const [quantity, setQuantity] = useState(0);

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
				{quantity ? (
					<div className='quanity'>
						<button>minus</button>
						{quantity}
						<button>plus</button>
					</div>
				) : (
					<AddShoppingCartOutlinedIcon fontSize='large' className='shopping-cart' />
				)}
			</div>
		</div>
	);
};

export default Item;
