import { Variants } from "framer-motion";

export const fadeIn_container: Variants = {
	initial: {},
	animate: {
		transition: { staggerChildren: 0.2 },
	},
};

export const fadeIn_items: Variants = {
	initial: { opacity: 0, scale: 0.95, y: "10%", transition: { duration: 0 } },
	animate: {
		opacity: 1,
		scale: 1,
		y: 1,
		transformOrigin: "center",
		transition: { duration: 0.3, ease: "linear", staggerChildren: 0.2 },
	},
};
