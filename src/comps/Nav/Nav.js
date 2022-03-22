import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState, useContext } from "react";
import NavItem from "../NavItem/NavItem";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	const [open, setOpen] = useState(0);
	const [showBurger, setShowBurger] = useState(0);
	const [device, setDevice] = useState("");

	const fruitTypes = ["apples", "citrus", "stone fruit", "berries", "melons"];

	const vegetableTypes = ["leafy green", "cruciferous", "marrow", "root", "allium"];

	// const cerealTypes = ["Rice", "Maize", "Oats", "Rye", "Barley", "Sorghum", "Wheat", "Quinoa"];

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
					<Link
						to='/eshop/fruits'
						style={{ textDecoration: "none" }}
						onClick={() => {
							!device && setOpen(0);
						}}
					>
						<NavItem title='fruits' items={fruitTypes} device={device} open={open} />
					</Link>
					<Link
						to='/eshop/vegetables'
						style={{ textDecoration: "none" }}
						onClick={() => {
							!device && setOpen(0);
						}}
					>
						<NavItem
							title='vegetables'
							items={vegetableTypes}
							device={device}
							open={open}
						/>
					</Link>
					{/* <Link
						to='/whole grains'
						style={{ textDecoration: "none" }}
						onClick={() => {
							!device && setOpen(0);
						}}
					>
						<NavItem title='Whole Grains' items={null} device={device} />
					</Link>
					<Link
						to='/cereals'
						style={{ textDecoration: "none" }}
						onClick={() => {
							!device && setOpen(0);
						}}
					>
						<NavItem title='Cereals' items={cerealTypes} device={device} />
					</Link> */}
				</ul>
			</nav>
			<Link to='/eshop' className='logo'>
				<h1>Buddy David's</h1>
			</Link>
			<Link to='/eshop/cart'>
				<div className='cart'>
					<ShoppingCartOutlinedIcon fontSize='medium' className='shopping-cart' />
					<p className='cart-badge'>0</p>
				</div>
			</Link>
		</div>
	);
};

export default Nav;
