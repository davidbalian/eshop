import React from "react";
import Item from "../Item/Item";
import "./Showcase.css";
import { products } from "../../products";

const Showcase = ({ title, prods }) => {
	return (
		<div className='showcase'>
			<h1>{title}</h1>
			<div className='showcase-items'>
				{prods.map((prod) => (
					<Item title={prod.title} price={prod.price} src={prod.src} />
				))}
			</div>
		</div>
	);
};

export default Showcase;
