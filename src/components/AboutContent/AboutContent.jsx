import "./AboutContent.scss";
import { GiCheckMark } from "react-icons/gi";

const AboutContent = (props) => {
	const { img, alt, title, span, text, showIcons = true } = props;

	return (
		<section className="about container">
			<div className="about__container container">
				<div className="about__img-container">
					<img className="about__img" src={img} alt={alt} />
				</div>
				<div className="about__content ">
					<h2 className="about__title">
						{title}
						<span className="about__span"> {span} </span>
					</h2>
					<p className="about__text">{text}</p>
					{showIcons && (
						<>
							<p className="about__marks">
								<GiCheckMark className="about__mark" />
								Passionate, Committed, Inspiring Excellence
							</p>
							<p className="about__marks">
								<GiCheckMark className="about__mark" />
								Our Mission is to Inspire, Impact, Share Values
							</p>
							<p className="about__marks">
								<GiCheckMark className="about__mark" />
								Community Thrives on Unity, Support, and Success
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default AboutContent;
