import React from "react";
import heroBg from "../../imgs/hero-bg.jpg";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
	return (
		<div className='hero' style={{ background: `rgba(1, 22, 56, .6) url(${heroBg})` }}>
			<div className='heading'>
				<h1>Shop the healthiest,</h1>
				<h1>spend the least.</h1>
			</div>
			<Link to='/eshop/fruits'>
				<button className='cta-button'>Shop Now</button>
			</Link>
		</div>
	);
};

export default Hero;
