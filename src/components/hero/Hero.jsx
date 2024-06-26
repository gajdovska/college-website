import React from "react";
import "./Hero.css";
import darkArrow from "../../assets/edusity_assets/dark-arrow.png";
import MenuLink from "../navbar/MenuLink";

const Hero = () => {
	return (
		<div className="hero container">
			<div className="hero-text">
				<h1>We ensure better education for better world</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
					atque soluta et vitae asperiores excepturi saepe voluptatem vero ut!
					Velit omnis, iure voluptatum error eum dignissimos explicabo dicta
					vero veritatis.
				</p>
				<MenuLink to="programs">
					<button className="btn">
						Explore more <img src={darkArrow} />
					</button>
				</MenuLink>
			</div>
		</div>
	);
};

export default Hero;
