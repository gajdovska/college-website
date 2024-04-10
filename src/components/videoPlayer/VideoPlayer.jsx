import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/edusity_assets/video.mp4";

const VideoPlayer = ({ playVideo, setPlayVideo }) => {
	const player = useRef(null);

	const closePlayer = (e) => {
		if (e.target === player.current) {
			setPlayVideo(false);
		}
	};

	return (
		<div
			className={`video-player ${playVideo ? "" : "hide"}`}
			onClick={closePlayer}
			ref={player}
		>
			<video src={video} autoPlay muted controls />
		</div>
	);
};

export default VideoPlayer;
