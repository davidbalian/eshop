import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import NavItem from "../NavItem/NavItem";
import "./Nav.css";

const Nav = () => {
	const fruitTypes = [
		"Apples & Pears",
		"Citrus",
		"Stone Fruit",
		"Tropical & Exotic",
		"Berries",
		"Melons"
	];

	const vegetableTypes = [
		"Leafy Green",
		"Cruciferous",
		"Marrow",
		"Root",
		"Edible plant stem",
		"Allium"
	];

	return (
		<div className='nav'>
			<nav>
				<ul className='navlinks'>
					<NavItem title='Fruits' items={fruitTypes} />
					<NavItem title='Vegetables' items={vegetableTypes} />
					<NavItem title='Toppings' items={vegetableTypes} />
					<NavItem title='Sauces' items={vegetableTypes} />
				</ul>
			</nav>
			<h1>Buddy David's</h1>
			<div className='cart'>
				<ShoppingCartOutlinedIcon fontSize='medium' className='shopping-cart' />
				<p className='cart-badge'>3</p>
			</div>
		</div>
	);
};

export default Nav;
