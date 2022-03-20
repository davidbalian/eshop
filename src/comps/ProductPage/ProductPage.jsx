import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import Item from "../Item/Item";
import "./ProductPage.css";

const ProductPage = () => {
	const { products } = useContext(ProductsContext);
	const { productCategory, productSubCategory } = useParams();

	return (
		<div className='product-page'>
			<h1 style={{ textTransform: "capitalize" }}>{productSubCategory}</h1>
			<div className='products'>
				{products[0].subcategories[0].apples.map((product) => (
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
