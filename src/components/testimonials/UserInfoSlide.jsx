import React from "react";

const UserInfoSlide = ({ userIcon, userName, userInfo, children }) => {
	return (
		<li>
			<div className="slide">
				<div className="user-info">
					<img src={userIcon} alt="userIcon" className="user-icon" />
					<div>
						<h3>{userName}</h3>
						<span>{userInfo}</span>
					</div>
				</div>
				<p>{children}</p>
			</div>
		</li>
	);
};

export default UserInfoSlide;
