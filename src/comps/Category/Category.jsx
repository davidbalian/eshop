import React from "react";
import { useParams } from "react-router-dom";
import "./Category.css";
import { products } from "../../products";
import Showcase from "../Showcase/Showcase";

const Category = () => {
	const { category } = useParams();

	let types;

	for (let i = 0; i < products.length; i++) {
		if (products[i].category === category) {
			types = products[i].types;
			break;
		}
	}

	return (
		<div className='category'>
			<h1>{category}</h1>
			<div className='showcases'>
				{types.map((type) => (
					<Showcase key={type.title} title={type.title} prods={type.prods} />
				))}
			</div>
		</div>
	);
};

export default Category;
