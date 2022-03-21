import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import Item from "../Item/Item";
import "./ProductPage.css";

const ProductPage = () => {
	const { products } = useContext(ProductsContext);
	const { category, type } = useParams();

	let cat, ty;

	for (let i = 0; i < products.length; i++) {
		if (category === products[i].category) {
			cat = products[i];
		}
	}

	for (let j = 0; j < cat.types.length; j++) {
		if (type === cat.types[j].title) {
			ty = cat.types[j].prods;
		}
	}

	return (
		<div className='product-page'>
			<h1 style={{ textTransform: "capitalize" }}>{type}</h1>
			<div className='products'>
				{ty.map((product) => (
					<Item
						key={product.title}
						title={product.title}
						price={product.price}
						src={product.src}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductPage;
