import shopData from "../ShopContent/ShopData";
import ShopProduct from "../ShopContent/ShopProduct";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

const NewProducts = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });
	const navigate = useNavigate();

	return (
		<motion.section
			variants={AnimationVariants.slideIn}
			initial="initial"
			animate={isInView ? "animate" : "initial"}
			ref={ref}
			className="shop container"
		>
			<h2 className="shop__title">Our New Products</h2>
			<div className="shop__products">
				{shopData
					.filter((product) => product.isNew)
					.map((product) => (
						<ShopProduct key={product.id} {...product} />
					))}
			</div>
			<button
				onClick={() => navigate("/StrongZone/shop")}
				className="shop__navigate"
			>
				Go To Shop
			</button>
		</motion.section>
	);
};

export default NewProducts;
