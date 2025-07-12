"use client";
import React from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

const SplitText = ({
	className,
	text,
	containerRef,
	marginChar = 4,
}: {
	className: string;
	text: string;
	marginChar?: number;
	containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 0.9", "start 0.3"],
	});
	const words = text.split(" ");

	return (
		<motion.p className={`${className}`}>
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;
				return (
					<Words
						key={i}
						progress={scrollYProgress}
						range={[start, end]}
						marginChar={marginChar}
					>
						{word}
					</Words>
				);
			})}
		</motion.p>
	);
};

export default SplitText;

const Words = ({
	children,
	progress,
	range,
	marginChar,
}: {
	children: string;
	progress: MotionValue<number>;
	range: [number, number];
	marginChar?: number;
}) => {
	const amount = range[1] - range[0];
	const step = amount / children.length;

	return (
		<span className={`relative `} style={{ marginRight: `${marginChar}px` }}>
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
			<span className="absolute opacity-0">{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	);
};
