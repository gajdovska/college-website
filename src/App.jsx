import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

const App = () => {
	const [playVideo, setPlayVideo] = useState(false);

	return (
		<>
			<Navbar />
			<Hero />
			<div className="container">
				<Title subtitle="our program" title="What we offer" />
				<Programs />
				<About setPlayVideo={setPlayVideo} />
				<Title subtitle="Galerry" title="Campus Photos" />
				<Campus />
				<Title subtitle="TESTIMONIALS" title="What Student Says" />
				<Testimonials />
				<Title subtitle="CONTACT US" title="Get in touch" />
				<Contact />
				<VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo} />
				<Footer />
			</div>
		</>
	);
};

export default App;
