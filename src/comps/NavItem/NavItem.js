import React, { useState } from "react";
import "./NavItem.css";

const NavItem = ({ title, items }) => {
	const [show, setShow] = useState(0);
	const [titleStyle, setTitleStyle] = useState({
		backgroundColor: "var(--main)",
		color: "var(--neutral)"
	});

	return (
		<li
			className='navitem'
			onMouseEnter={() => {
				setShow(1);
				setTitleStyle({
					backgroundColor: "var(--neutral)",
					color: "var(--main)"
				});
			}}
			onMouseLeave={() => {
				setShow(0);
				setTitleStyle({
					backgroundColor: "var(--main)",
					color: "var(--neutral)"
				});
			}}
		>
			<a href='#' className='navtitle' style={titleStyle}>
				{title}
			</a>
			<ul style={{ display: show ? "flex" : "none" }} className='dropdown-menu'>
				{items.map((item) => (
					<li key={item}>
						<a href='#' className='sublink'>
							{item}
						</a>
					</li>
				))}
			</ul>
		</li>
	);
};

export default NavItem;
