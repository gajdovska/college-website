import React from "react";
import "./Programs.css";
import program1 from "../../assets/edusity_assets/program-1.png";
import program2 from "../../assets/edusity_assets/program-2.png";
import program3 from "../../assets/edusity_assets/program-3.png";
import programIcon1 from "../../assets/edusity_assets/program-icon-1.png";
import programIcon2 from "../../assets/edusity_assets/program-icon-2.png";
import programIcon3 from "../../assets/edusity_assets/program-icon-3.png";

const Programs = () => {
	return (
		<div className="programs">
			<div className="program">
				<img src={program1} alt="program1Student" />
				<div className="caption">
					<img src={programIcon1} alt="program1Icon" />
					<p>Graduation Degree</p>
				</div>
			</div>
			<div className="program">
				<img src={program2} alt="program2Student" />
				<div className="caption">
					<img src={programIcon2} alt="program2Icon" />
					<p>Master Degree</p>
				</div>
			</div>
			<div className="program">
				<img src={program3} alt="program3Student" />
				<div className="caption">
					<img src={programIcon3} alt="program3Icon" />
					<p>Post Graduation</p>
				</div>
			</div>
		</div>
	);
};

export default Programs;
