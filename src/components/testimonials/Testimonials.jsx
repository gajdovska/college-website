import React, { useRef } from "react";
import "./Testimonials.css";
import nextIcon from "../../assets/edusity_assets/next-icon.png";
import backIcon from "../../assets/edusity_assets/back-icon.png";
import userIcon1 from "../../assets/edusity_assets/user-1.png";
import userIcon2 from "../../assets/edusity_assets/user-2.png";
import userIcon3 from "../../assets/edusity_assets/user-3.png";
import UserInfoSlide from "./UserInfoSlide";

const Testimonials = () => {
	const slider = useRef();
	let translateX = 0;

	const handleSlideForward = () => {
		if (translateX > -50) {
			translateX -= 25;
		}
		slider.current.style.transform = `translateX(${translateX}%)`;
	};

	const handleSlideBackwards = () => {
		if (translateX < 0) {
			translateX += 25;
		}
		slider.current.style.transform = `translateX(${translateX}%)`;
	};

	return (
		<div className="testimonial">
			<img
				src={nextIcon}
				alt="nextIcon"
				className="next-btn"
				onClick={handleSlideForward}
			/>
			<img
				src={backIcon}
				alt="backIcon"
				className="back-btn"
				onClick={handleSlideBackwards}
			/>
			<div className="slider">
				<ul ref={slider}>
					<UserInfoSlide
						userIcon={userIcon1}
						userName={"Sara"}
						userInfo={"Skopje, Macedonia"}
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
						veritatis quia explicabo quibusdam maiores beatae?
					</UserInfoSlide>
					<UserInfoSlide
						userIcon={userIcon2}
						userName={"Jack"}
						userInfo={"Berlin, Germany"}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic
						harum officia quisquam explicabo rerum aut qui ipsum numquam!
					</UserInfoSlide>
					<UserInfoSlide
						userIcon={userIcon3}
						userName={"Lana"}
						userInfo={"Paris, France"}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
						dolore corporis voluptate maiores. Corporis dolores fuga architecto
						perspiciatis. Assumenda cupiditate repudiandae impedit tempora quod?
					</UserInfoSlide>
				</ul>
			</div>
		</div>
	);
};

export default Testimonials;
