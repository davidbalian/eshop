import React, { useState } from "react";
import "./NavItem.css";
import { Link } from "react-router-dom";

const NavItem = ({ title, items, device }) => {
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
			{show && items ? (
				<ul className={`dropdown-menu dropdown-${device ? "pc" : "mobile"}`}>
					{items.map((item) => (
						<li key={item} style={{ textTransform: "capitalize" }}>
							<a href='#' className='sublink'>
								{item}
							</a>
						</li>
					))}
				</ul>
			) : null}
		</li>
	);
};

export default NavItem;
