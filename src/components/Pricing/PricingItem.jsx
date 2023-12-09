import { Link } from "react-router-dom";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const PricingItem = ({ title, price, yoga, fashion, swimming, bestOffer }) => {
	const items = [
		{ label: "GYM & Fitness" },
		{ label: "Boxing Training" },
		{ label: "Classic Yoga Working", included: yoga },
		{ label: " Fashion Yoga & GYM", included: fashion },
		{ label: "Swimming pool", included: swimming },
	];

	return (
		<div
			className="pricing__box"
			style={{ backgroundColor: bestOffer ? "#111" : "" }}
		>
			{bestOffer && <span className="pricing__best-offer">Best Offer</span>}
			<h3 className="pricing__box-title">{title}</h3>
			<p className="pricing__price">
				${price} <span className="pricing__month">/monthly</span>
			</p>
			<hr className="pricing__line" />
			<ul className="pricing__list">
				{items.map((item, index) => (
					<li className="pricing__item" key={index}>
						<span>
							{!item.included ? (
								<AiOutlineCheck className="pricing__icon " />
							) : (
								<AiOutlineClose className="pricing__icon  pricing__icon--close" />
							)}
						</span>
						{item.label}
					</li>
				))}
			</ul>
			<Link className="pricing__link" to="/StrongZone/contact">
				JOIN NOW
			</Link>
		</div>
	);
};

export default PricingItem;
