import React from "react";
import "./Campus.css";
import gallery1 from "../../assets/edusity_assets/gallery-1.png";
import gallery2 from "../../assets/edusity_assets/gallery-2.png";
import gallery3 from "../../assets/edusity_assets/gallery-3.png";
import gallery4 from "../../assets/edusity_assets/gallery-4.png";

const Campus = () => {
	return (
		<div className="campus">
			<div className="gallery">
				<img src={gallery1} alt="gallery1" />
				<img src={gallery2} alt="gallery2" />
				<img src={gallery3} alt="gallery3" />
				<img src={gallery4} alt="gallery4" />
			</div>
		</div>
	);
};

export default Campus;
