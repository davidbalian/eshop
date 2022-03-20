import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import NavItem from "../NavItem/NavItem";
import "./Nav.css";

const Nav = () => {
	const [open, setOpen] = useState(0);
	const [showBurger, setShowBurger] = useState(0);
	const [device, setDevice] = useState("");

	const fruitTypes = [
		"Apples",
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

	const cerealTypes = ["Rice", "Maize", "Oats", "Rye", "Barley", "Sorghum", "Wheat", "Quinoa"];

	window.onresize = () => {
		if (window.innerWidth <= 1000) {
			setShowBurger(1);
			setDevice(0);
			setOpen(0);
		} else {
			setShowBurger(0);
			setDevice(1);
			setOpen(1);
		}
	};

	useEffect(() => {
		if (window.innerWidth <= 1000) {
			setShowBurger(1);
			setDevice(0);
			setOpen(0);
		} else {
			setShowBurger(0);
			setDevice(1);
			setOpen(1);
		}
	}, []);

	return (
		<div className='nav'>
			<nav>
				{showBurger ? (
					<MenuIcon
						fontSize='medium'
						className='menu-icon'
						onClick={() => {
							setOpen(!open);
						}}
					/>
				) : null}
				<ul
					className='navlinks'
					style={{
						marginLeft: open ? "0" : "-10rem"
					}}
				>
					<NavItem title='Fruits' items={fruitTypes} device={device} />
					<NavItem title='Vegetables' items={vegetableTypes} device={device} />
					<NavItem title='Whole Grains' items={null} device={device} />
					<NavItem title='Cereals' items={cerealTypes} device={device} />
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
