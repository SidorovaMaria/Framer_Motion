"use client";
import { Project, projects } from "@/constants";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "motion/react";
const ImageSlide = () => {
	return (
		<main className="h-[100vh] flex items-center justify-center">
			<div className="w-[70%]">
				<p>Featured Work</p>
				{projects.map((project) => (
					<ProjectSlide key={project.title1} {...project} />
				))}
			</div>
		</main>
	);
};

export default ImageSlide;

const ProjectSlide = ({ title1, title2, src }: Project) => {
	const [isActive, setIsActive] = React.useState(false);
	return (
		<div
			className="border-t-2  border-white py-[0.8vw] cursor-pointer w-full flex items-center justify-center last-of-type:border-b-2"
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
		>
			<p className="bigText mr-[0.75vw]">{title1}</p>
			<motion.div
				className="overflow-hidden flex justify-center w-0"
				variants={anim}
				initial="initial"
				animate={isActive ? "open" : "closed"}
			>
				<Image
					src={src}
					alt={title1}
					width={100}
					height={100}
					className="w-[10vw] aspect-video "
				/>
			</motion.div>
			<p className="bigText ml-[0.75vw]  ">{title2}</p>
		</div>
	);
};
const anim: Variants = {
	initial: { width: 0 },
	open: { width: "auto", transition: { duration: 0.4, ease: "easeInOut" } },
	closed: { width: 0 },
};
