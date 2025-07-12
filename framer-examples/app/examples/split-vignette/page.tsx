"use client";
import { VignetteProjects } from "@/constants";
import Lenis from "lenis";
import { MotionValue, useSpring, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect } from "react";

const SplitVignette = () => {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	const spring = {
		stiffness: 150,
		damping: 15,
		mass: 0.1,
	};
	const mousePosition = {
		x: useSpring(0, spring),
		y: useSpring(0, spring),
	};
	const mouseMove = (e: React.MouseEvent) => {
		const { clientX, clientY } = e;
		const targetX = clientX - (window.innerWidth / 2) * 0.25;
		const targetY = clientY - (window.innerWidth / 2) * 0.3;
		mousePosition.x.set(targetX);
		mousePosition.y.set(targetY);
	};
	return (
		<main className="" onMouseMove={mouseMove}>
			{VignetteProjects.map((project, i) => {
				return (
					<Gallery
						key={i}
						handle={project.handle}
						vignette={project.vignette}
						mousePosition={mousePosition}
					/>
				);
			})}
			<Description mousePosition={mousePosition} projects={VignetteProjects} />
		</main>
	);
};

export default SplitVignette;
const Gallery = ({
	handle,
	vignette,
	mousePosition,
}: {
	handle: string;
	vignette: string;
	mousePosition: { x: MotionValue<number>; y: MotionValue<number> };
}) => {
	const { x, y } = mousePosition;
	return (
		<div className="h-[120vh] clip-path-vignette ">
			<div className="w-full h-full relative">
				<Image src={`/images/${handle}`} alt="Image" fill className="w-full object-cover" />
			</div>
			<motion.div
				className="h-[30vw] w-[25vw] fixed top-0 rounded-[1.5vw] overflow-hidden"
				style={{ x, y }}
			>
				<Image
					src={`/images/${vignette}`}
					alt="Vignette"
					fill
					className="w-full object-cover"
				/>
			</motion.div>
		</div>
	);
};

const Description = ({
	mousePosition,
	projects,
}: {
	mousePosition: { x: MotionValue<number>; y: MotionValue<number> };
	projects: { name: string; handle: string; vignette: string }[];
}) => {
	const [index, setIndex] = React.useState(0);
	const { x, y } = mousePosition;
	return (
		<div className="h-[120vh] clip-path-vignette">
			<div className="absolute w-full h-full flex items-center justify-center flex-col z-10 filter mix-blend-difference">
				{projects.map((project, i) => (
					<p
						onMouseOver={() => setIndex(i)}
						key={i}
						className="text-[7vw] font-modern cursor-default m-0 uppercase "
					>
						{project.name}
					</p>
				))}
			</div>
			<motion.div
				className="h-[30vw] w-[25vw] fixed top-0 rounded-[1.5vw] overflow-hidden "
				style={{ x, y }}
			>
				<Image
					src={`/images/${projects[index].vignette}`}
					alt="Vignette"
					fill
					className="w-full object-cover "
				/>
			</motion.div>
		</div>
	);
};
