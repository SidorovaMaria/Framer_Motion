"use client";

import Lenis from "lenis";
import { MotionValue, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
const TextParallax = () => {
	const container = useRef(null);
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number): void {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	return (
		<main className="overflow-hidden">
			<div className="h-[100vh]" />
			<div ref={container}>
				<Slide
					src="/images/image_1.jpg"
					left="-40%"
					direction={"left"}
					progress={scrollYProgress}
				/>
				<Slide
					src="/images/image_2.jpg"
					left="-20%"
					direction={"right"}
					progress={scrollYProgress}
				/>
				<Slide
					src="/images/image_3.jpg"
					left="-75%"
					direction={"left"}
					progress={scrollYProgress}
				/>
			</div>
			<div className="h-[100vh]" />
		</main>
	);
};

export default TextParallax;

const Slide = ({
	src,
	left,
	direction,
	progress,
}: {
	src: string;
	left: string;
	direction: string;
	progress: MotionValue<number>;
}) => {
	const toDirection = direction === "left" ? -1 : 1;
	const translateX = useTransform(progress, [0, 1], [300 * toDirection, -300 * toDirection]);
	return (
		<motion.div
			className="relative flex whitespace-nowrap"
			style={{ left: left, x: translateX }}
		>
			<Phrase src={src} />
			<Phrase src={src} />
			<Phrase src={src} />
		</motion.div>
	);
};
const Phrase = ({ src }: { src: string }) => {
	return (
		<div className="px-5 flex gap-5 items-center">
			<p className="text-[7.5vw]">Front End Developer</p>
			<span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
				<Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
			</span>
		</div>
	);
};
