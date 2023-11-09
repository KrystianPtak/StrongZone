const AnimationVariants = {
	fadeIn: {
		initial: {
			y: "-90px",
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
			},
		},
	},

	fadeIn2: {
		initial: {
			opacity: 0,
			scale: 0.5,
		},
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.8,
			},
		},
	},

	slideIn: {
		initial: {
			y: 100,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
			},
		},
	},
};

export default AnimationVariants;
