import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/edusity_assets/logo.png";
import menuIcon from "../../assets/edusity_assets/menu-icon.png";
import MenuLink from "./MenuLink";

const Navbar = () => {
	const [colorNavbar, setColorNavbar] = useState(false);
	const [showSideBarMenu, setShowSideBarMenu] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const shouldColorNavbar = window.scrollY > 50;
			setColorNavbar(shouldColorNavbar);
		});
	}, []);

	const toggleSideBarMenu = () => {
		setShowSideBarMenu(!showSideBarMenu);
	};

	return (
		<nav className={`container ${colorNavbar ? "dark-nav" : ""}`}>
			<img src={logo} alt="" className="logo" />
			<ul className={showSideBarMenu ? "" : "hide-sidebar-menu"}>
				<MenuLink to="hero">Home</MenuLink>
				<MenuLink to="programs">Programs</MenuLink>
				<MenuLink to="about">About us</MenuLink>
				<MenuLink to="campus">Campus</MenuLink>
				<MenuLink to="testimonial">Testimonials</MenuLink>
				<MenuLink to="contact">Contact us</MenuLink>
			</ul>
			<img
				src={menuIcon}
				alt="menuIcon"
				className="menu-icon"
				onClick={toggleSideBarMenu}
			/>
		</nav>
	);
};

export default Navbar;
