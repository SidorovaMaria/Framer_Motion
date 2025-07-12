"use client";
import { useScroll, motion, useTransform, MotionValue } from "motion/react";
import React, { useRef } from "react";

const TextGradient = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start 0.9", "start 0.25"],
	});
	const paragraph =
		"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout";
	const words = paragraph.split(" ");

	return (
		<main className="h-[100vh] w-[100vw] ">
			<div className="h-[100vh]"></div>
			<motion.p
				ref={container}
				style={{ opacity: scrollYProgress }}
				className="flex text-[66px] leading-[1] p-[40px] max-w-[800px]  text-white flex-wrap font-modern"
			>
				{words.map((word, i) => {
					const start = i / words.length;
					const end = start + 1 / words.length;
					return (
						<Words key={i} progress={scrollYProgress} range={[start, end]}>
							{word}
						</Words>
					);
				})}
			</motion.p>
			<div className="h-[100vh]"></div>
		</main>
	);
};

export default TextGradient;

const Words = ({
	children,
	progress,
	range,
}: {
	children: string;
	progress: MotionValue<number>;
	range: [number, number];
}) => {
	const amount = range[1] - range[0];
	const step = amount / children.length;

	return (
		<span className="relative mr-[12px] ">
			{children.split("").map((char, i) => {
				const start = range[0] + i * step;
				const end = range[0] + (i + 1) * step;
				return (
					<Char key={i} progress={progress} range={[start, end]}>
						{char}
					</Char>
				);
			})}
		</span>
	);
};
const Char = ({
	children,
	progress,
	range,
}: {
	children: string;
	progress: MotionValue<number>;
	range: [number, number];
}) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span>
			<span className="absolute opacity-[20%]">{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	);
};
