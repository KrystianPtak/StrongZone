import "./Message.scss";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

const Message = () => {
	return (
		<section className="message">
			<h2 className="message__title">First Workout - Free</h2>
			<p className="message__text">
				You can easily try our services for free, and decide which workout is
				better for you. Just let us know what training you prefer.
			</p>
			<Link className="message__link" to="/contact">
				<AiOutlineMail className="message__icon" />
				SEND US A MESSAGE
			</Link>
		</section>
	);
};

export default Message;
