import React from "react";
import { Link } from "react-scroll";

const MenuLink = ({ to, children }) => {
	return (
		<li>
			<Link to={to} smooth={true} offset={-250} duration={500}>
				{children}
			</Link>
		</li>
	);
};

export default MenuLink;
