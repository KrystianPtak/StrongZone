import AboutContent from "../AboutContent/AboutContent";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimationVariants from "../AnimationVariants/AnimationVariants";
import fitness from "../../assets/fitness.jpg";

const Fitness = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			variants={AnimationVariants.slideIn}
			initial="initial"
			animate={isInView ? "animate" : "initial"}
			ref={ref}
		>
			<AboutContent
				img={fitness}
				alt="Man exercising at the gym"
				title="Fitness is the Answer..."
				span="WHENEVER THE QUESTION IS YOUR PHYSICAL SHAPE!"
				text="With a notion that fitness activities are not just mere 3 times a week routine, but rather a day-to-day lifestyle, we have opened a first of our fitness centers in the city… When we were asking ourselves, whether we would be able to offer something different to what other fitness studios do offer, we found the answer. It was – a skilled team of trainers!"
				showIcons={false}
			/>
		</motion.div>
	);
};

export default Fitness;
