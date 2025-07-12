"use client";
import { CardProject, CardProjects } from "@/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";

const CardParallax = () => {
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
	});
	return (
		<main ref={container} className="my-[50vh] ">
			{CardProjects.map((project, i) => {
				const targetScale = 1 - (CardProjects.length - i) * 0.05;
				return (
					<Card
						key={`p_${i}`}
						{...project}
						i={i}
						progress={scrollYProgress}
						range={[i * 0.25, 1]}
						targetScale={targetScale}
					/>
				);
			})}
		</main>
	);
};

export default CardParallax;

const Card = ({
	title,
	description,
	src,
	link,
	color,
	i,
	progress,
	range,
	targetScale,
}: CardProject & {
	i: number;
	progress: MotionValue<number>;
	range: [number, number];
	targetScale: number;
}) => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});
	const scale = useTransform(progress, range, [1, targetScale]);
	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	return (
		<div ref={container} className="h-[100vh] flex items-center justify-center sticky top-0">
			<motion.div
				className="flex flex-col relative h-[500px] w-[1000px] rounded-[25px] p-[50px] transform-origin-top"
				style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
			>
				<h2 className="text-center m-0 text-[28px]">{title}</h2>
				<div className="flex h-full mt-[50px] gap-[50px]">
					<div className="w-[40%] relative top-[10%]">
						<p className="text-base first-letter:text-[28px] first-letter:font-special ">
							{description}
						</p>
						<span className="flex items-center gap-[5px]">
							<Link
								href={link}
								target="_blank"
								className="text-[12px] underline cursor-pointer"
							>
								See more
							</Link>
							<ChevronRight className="text-white" />
						</span>
					</div>
					<div className="relative w-[60%] h-full rounded-[25px] overflow-hidden ">
						<motion.div className={"w-full h-full"} style={{ scale: imageScale }}>
							<Image fill src={src} alt="image" className="object-cover" />
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
