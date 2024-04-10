import React from "react";
import "./About.css";
import aboutImg from "../../assets/edusity_assets/about.png";
import playIcon from "../../assets/edusity_assets/play-icon.png";

const About = ({ setPlayVideo }) => {
	return (
		<div className="about">
			<div className="about-left">
				<img src={aboutImg} alt="" className="about-img" />
				<img
					src={playIcon}
					alt="playIcon"
					className="play-icon"
					onClick={() => setPlayVideo(true)}
				/>
			</div>
			<div className="about-right">
				<h3>ABOUT UNIVERSITY</h3>
				<h2>Nurturing Tomorrow's Leaders</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, error
					provident laboriosam velit dolorem odit officia. Id aliquam porro
					facilis, voluptatem consequatur eum nam! Repellendus consequuntur
					corporis voluptatibus temporibus sit?
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
					natus modi nemo, explicabo odit consequatur tenetur suscipit porro,
					asperiores illo id ullam architecto velit, omnis est excepturi
					dignissimos. Architecto, magni.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
					harum, delectus ipsum cumque praesentium eius ducimus ex cum nihil est
					omnis dolores corrupti voluptatem perspiciatis repellat modi
					doloremque molestiae libero.
				</p>
			</div>
		</div>
	);
};

export default About;
