"use client";

import Lenis from "lenis";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ParallaxScroll = () => {
	const gallery = useRef(null);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });
	const { scrollYProgress } = useScroll({
		target: gallery,
		offset: ["start end", "end start"],
	});
	const { height } = dimension;
	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
	useEffect(() => {
		const lenis = new Lenis();

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener("resize", resize);
		requestAnimationFrame(raf);
		resize();

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<main className="">
			<div className="h-[100vh]"></div>
			<div
				ref={gallery}
				className="h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden box-border"
			>
				<Column images={[images[0], images[1], images[2]]} y={y} />
				<Column images={[images[3], images[4], images[5]]} y={y2} />
				<Column images={[images[6], images[7], images[8]]} y={y3} />
				<Column images={[images[9], images[10], images[11]]} y={y4} />
			</div>
			<div className="h-[100vh]"></div>
		</main>
	);
};

export default ParallaxScroll;

const Column = ({ images, y }: { images: string[]; y: MotionValue<number> }) => {
	return (
		<motion.div
			className="relative h-full w-1/4 min-2-[250px] flex flex-col gap-[2vw]
            nth-of-type-[1]:top-[-45%] nth-of-type-[2]:top-[-95%] nth-of-type-[3]:top-[-45%] nth-of-type-[4]:top-[-75%]"
			style={{ y }}
		>
			{images.map((src, i) => {
				return (
					<div key={i} className="h-full w-full relative rounded-[1vw] overflow-hidden">
						<Image src={`/images/${src}`} alt="image" fill className="object-cover" />
					</div>
				);
			})}
		</motion.div>
	);
};

const images = [
	"image_1.jpg",
	"image_2.jpg",
	"image_3.jpg",
	"image_4.jpg",
	"image_5.jpg",
	"image_6.jpg",
	"image_7.jpg",
	"image_8.jpg",
	"image_9.jpg",
	"image_10.jpg",
	"image_11.jpg",
	"image_12.jpg",
];
