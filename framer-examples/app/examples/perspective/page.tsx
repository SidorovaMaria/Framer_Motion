"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import myImage from "../../../public/images/image_1.jpg";
import Image2 from "../../../public/images/image_2.jpg";
import { MotionValue, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import Lenis from "lenis";
const PerspectiveTransition = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);

			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<main ref={container} className="relative h-[200vh] ">
			<Section1 scrollYProgress={scrollYProgress} />
			<Section2 scrollYProgress={scrollYProgress} />
		</main>
	);
};

export default PerspectiveTransition;

const Section1 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
	return (
		<motion.div
			className="sticky top-0 h-screen bg-[#c72626] text-[3.5vw] flex flex-col items-center justify-center ttext-white pb-[10vh]"
			style={{ scale, rotate }}
		>
			<p>Scroll Perspective</p>
			<div className="flex gap-4">
				<p>Section</p>
				<div className="relative w-[12.5vw]">
					<Image src={myImage} alt="Image" placeholder="blur" fill />
				</div>
				<p>Transition</p>
			</div>
		</motion.div>
	);
};
const Section2 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
	return (
		<motion.div className="relative h-screen" style={{ scale, rotate }}>
			<Image src={Image2} alt="image 2" placeholder="blur" fill />
		</motion.div>
	);
};
