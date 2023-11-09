import AboutContent from "../AboutContent/AboutContent";
import about from "../../assets/about.jpg";

const AboutUs = () => {
	return (
		<>
			<AboutContent
				img={about}
				alt="A man performing bicep curls with a barbell at the gym."
				title="We Make Yourself Stronger"
				span="Than Your Best Excuses"
				text="We are a team with passion and commitment. Our mission is to strive for excellence and achieve outstanding results. We continuously work on personal and professional development because we believe it's the key to success. Our determination and dedication enable us to overcome any challenges, regardless of the circumstances. Together, we create an inspiring future and face every situation with courage and confidence. Get to know us better and join our dynamic community that inspires action."
			/>
		</>
	);
};

export default AboutUs;
