"use client";
import React from "react";
import Image from "next/image";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

function useParallax(
	value: MotionValue<number>,
	options: {
		distance: number;
		horizontalDistance?: number;
		rotateDistance?: number;
		opacityRange?: [number, number];
	}
) {
	const {
		distance = 300,
		horizontalDistance = 0,
		rotateDistance = 0,
		opacityRange = [1, 1],
	} = options;
	const y = useTransform(value, [0, 1], [-distance, distance]);
	const x = useTransform(value, [0, 1], [-horizontalDistance, horizontalDistance]);
	const rotate = useTransform(value, [0, 1], [-rotateDistance, rotateDistance]);
	const opacity = useTransform(value, [0, 1], opacityRange);
	return { y, x, rotate, opacity };
}

const ParallaxExample = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	return (
		<div id="example">
			{[1, 2, 3, 4, 5].map((image) => (
				<ImageContainer key={image} id={image} />
			))}
			<motion.div
				className="'progress fixed left-0 right-0 h-[5px] bg-[#8df0cc] bottom-[50px] "
				style={{ scaleX }}
			/>
		</div>
	);
};

export default ParallaxExample;

const ImageContainer = ({ id }: { id: number }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const parallaxEffects = useParallax(scrollYProgress, {
		distance: 300,
		horizontalDistance: 0,
		rotateDistance: 5,
		opacityRange: [0, 1],
	});

	const combinedEffects = {
		ghostAppear: {
			y: useTransform(scrollYProgress, [0, 1], [100, 0]),
			opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.8]),
			scale: useTransform(scrollYProgress, [0, 1], [0.9, 1.1]),
		},
		dissolve: {
			opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
			filter: useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]),
		},
	};
	return (
		<section
			className="img-container scroll-snap-align-start
        h-[100vh] flex items-center justify-center relative"
		>
			<div
				ref={ref}
				className="w-[300px] h-[400px] m-[20px] bg-[#f5f5f5] overflow-hidden z-20"
			>
				<Image
					className="w-[300px] h-[400px] object-cover "
					src={`/images/image_${id}.jpg`}
					alt={`Image ${id}`}
					width={500}
					height={500}
				/>
			</div>
			<motion.h2
				initial={{ visibility: "hidden" }}
				animate={{ visibility: "visible" }}
				style={{
					x: parallaxEffects.x,
					y: parallaxEffects.y,
					rotate: parallaxEffects.rotate,
				}}
				className="text-[#8df0cc] m-0 text-[50px] font-semibold tracking-tight leading-[1.2] absolute inline-block top-[calc(50%-25px)] left-[calc(50%+120px)] font-special z-50"
			>{`#00${id}`}</motion.h2>
			<motion.div
				style={combinedEffects.dissolve}
				className="absolute top-[20%] left-[40%]  border-2 border-[#8df0cc] z-10"
			>
				<Image
					className="w-[300px] h-[400px] object-cover blur-[2px] "
					src={`/images/image_${id}.jpg`}
					alt={`Image ${id}`}
					width={500}
					height={500}
				/>
			</motion.div>
		</section>
	);
};
