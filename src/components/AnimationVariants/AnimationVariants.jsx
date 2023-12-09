const AnimationVariants = {
	modalAnimation: {
		initial: {
			opacity: 0,
			y: 70,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.35,
			},
		},
		exit: {
			opacity: 0,
			y: 0,
		},
	},

	overlayAnimation: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.2,
			},
		},
		exit: {
			opacity: 0,
		},
	},

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
