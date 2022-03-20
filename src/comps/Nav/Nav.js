import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import NavItem from "../NavItem/NavItem";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	const [open, setOpen] = useState(0);
	const [showBurger, setShowBurger] = useState(0);
	const [device, setDevice] = useState("");

	const fruitTypes = [
		"apples",
		"citrus",
		"stone fruit",
		"tropical & exotic",
		"berries",
		"melons"
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
					<Link to='/fruits' style={{ textDecoration: "none" }}>
						<NavItem title='Fruits' items={fruitTypes} device={device} />
					</Link>
					<Link to='/vegetables' style={{ textDecoration: "none" }}>
						<NavItem title='Vegetables' items={vegetableTypes} device={device} />
					</Link>
					<Link to='/whole grains' style={{ textDecoration: "none" }}>
						<NavItem title='Whole Grains' items={null} device={device} />
					</Link>
					<Link to='/cereals' style={{ textDecoration: "none" }}>
						<NavItem title='Cereals' items={cerealTypes} device={device} />
					</Link>
				</ul>
			</nav>
			<Link to='/' className='logo'>
				<h1>Buddy David's</h1>
			</Link>
			<div className='cart'>
				<ShoppingCartOutlinedIcon fontSize='medium' className='shopping-cart' />
				<p className='cart-badge'>3</p>
			</div>
		</div>
	);
};

export default Nav;
