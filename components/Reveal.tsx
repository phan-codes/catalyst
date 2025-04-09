"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants, Transition } from "framer-motion";

interface RevealProps {
	children: React.ReactNode;
	variants?: Variants;
	transition?: Transition;
	className?: string;
	key?: number | string;
}

const Reveal = ({
	children,
	variants = {
		hidden: { opacity: 0, x: 30 },
		visible: { opacity: 1, x: 0 },
	},
	transition = { duration: 0.7, delay: 0.25 },
	className,
	key,
}: RevealProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);
	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={mainControls}
			transition={transition}
			className={className}
			key={key}>
			{children}
		</motion.div>
	);
};

export default Reveal;
