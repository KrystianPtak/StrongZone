import React, { useState } from "react";
import contact from "../../assets/contact.webp";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [showRequiredMessage, setShowRequiredMessage] = useState(false);
	const [showSubmittedMessage, setShowSubmittedMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !email || !subject || !message) {
			setShowRequiredMessage(true);
			setTimeout(() => {
				setShowRequiredMessage(false);
			}, 2000);
		} else {
			setShowSubmittedMessage(true);
			setTimeout(() => {
				setShowSubmittedMessage(false);
				setName("");
				setEmail("");
				setSubject("");
				setMessage("");
			}, 2000);
		}
	};

	return (
		<>
			<img
				src={contact}
				alt="Man exercising at the gym."
				className="contact__img"
			/>
			<div className="contact__info">
				<h2 className="contact__title">get in touch</h2>
				<p className="contact__text">
					Get in touch with us! We're ready to assist and chat about your
					questions and needs.
				</p>
				<form onSubmit={handleSubmit} className="contact__form">
					<div className="contact__inputs">
						<input
							type="text"
							placeholder="Your Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="contact__input"
						/>
						<input
							type="email"
							placeholder="Your Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="contact__input"
						/>
					</div>
					<input
						type="text"
						placeholder="Your Subject"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						className="contact__input"
					/>
					<textarea
						placeholder="Write Your Message"
						cols="30"
						rows="10"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="contact__area"
					></textarea>
					{showRequiredMessage && (
						<p className="contact__required">* All fields are required.</p>
					)}
					{showSubmittedMessage && (
						<p className="contact__sent">Your message was sent successfully!</p>
					)}
					<button className="contact__btn" type="submit">
						SEND MESSAGE
					</button>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
