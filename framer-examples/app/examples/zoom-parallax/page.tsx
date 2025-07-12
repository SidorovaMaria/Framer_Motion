"use client";

import Lenis from "lenis";
import { useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const ZoomParallax = () => {
	const container = useRef(null);
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);

			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
	const pictures = [
		{
			src: "/images/image_5.jpg",
			alt: "Image 1",
			scale: scale1,
			style: "top-[-30vh] left-[5vh] w-[35vh]",
		},
		{
			src: "/images/image_1.jpg",
			alt: "Image 2",
			scale: scale5,
			style: "top-[-10vh] left-[-35vw] w-[30vw] ",
		},
		{
			src: "/images/image_3.jpg",
			alt: "Image 3",
			scale: scale6,
			style: "left-[30.5vw] w-[25vw] ",
		},
		{
			src: "/images/image_4.jpg",
			alt: "Image 4",
			scale: scale8,
			style: " top-[27.5vh] left-[5vw] w-[30vw]",
		},
		{
			src: "/images/image_2.jpg",
			alt: "Image 5",
			scale: scale9,
			style: "aspect-video w-[30vw] h-[20vh]",
		},
	];

	return (
		<main ref={container} className="h-[300vh] relative">
			<div className="sticky overflow-hidden top-0 h-[100vh]">
				{pictures.map(({ src, scale, style, alt }, index) => {
					return (
						<motion.div
							key={index}
							style={{ scale }}
							className="w-full h-full top-0 absolute flex items-center justify-center"
						>
							<div className={`relative w-[25vh] h-[25vh] ${style}`}>
								<Image src={src} fill alt={alt} className="object-cover" />
							</div>
						</motion.div>
					);
				})}
			</div>
		</main>
	);
};

export default ZoomParallax;
