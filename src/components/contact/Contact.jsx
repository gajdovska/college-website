import React from "react";
import "./Contact.css";
import msgIcon from "../../assets/edusity_assets/msg-icon.png";
import mailIcon from "../../assets/edusity_assets/mail-icon.png";
import phoneIcon from "../../assets/edusity_assets/phone-icon.png";
import locationIcon from "../../assets/edusity_assets/location-icon.png";
import arrowIcon from "../../assets/edusity_assets/white-arrow.png";

const Contact = () => {
	const [result, setResult] = React.useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "2180c315-1730-440b-90af-ace3063abba5");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			setResult(data.message);
		}
	};

	return (
		<div className="contact">
			<div className="contact-col">
				<h3>
					Send us a message <img src={msgIcon} alt="" className="msg-icon" />
				</h3>
				<p className="content">
					Feel free to reach out through contact form or find our contact
					information below. Your feedback, questions, and suggestions are
					important to us as we strive to provide exceptional service to our
					university community.
				</p>
				<ul>
					<li>
						<img src={mailIcon} alt="mailIcon" />
						Contact@GreatStack.dev
					</li>
					<li>
						<img src={phoneIcon} alt="phoneIcon" />
						+1 123-456-7890
					</li>
					<li>
						<img src={locationIcon} alt="locationIcon" />
						77 Massachusetts Ave, Cambridge MA 02139, United States
					</li>
				</ul>
			</div>
			<div className="contact-col">
				<form onSubmit={onSubmit}>
					<label>Your name</label>
					<input
						type="text"
						name="name"
						placeholder="Enter your name"
						required
					/>
					<label>Phone number</label>
					<input
						type="tel"
						name="phone"
						placeholder="Enter your phone number"
						required
					/>
					<label>Email</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email id"
						required
					/>
					<label>Write your messages here</label>
					<textarea
						name="message"
						rows="6"
						placeholder="Enter your message"
						required
					></textarea>
					<button type="submit" className="btn dark-btn">
						Submit now
						<img src={arrowIcon} alt="arrowIcon" />
					</button>
				</form>
				<span>{result}</span>
			</div>
		</div>
	);
};

export default Contact;
