"use client";
import { Facebook, Github, Twitter, Youtube } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const MagneticButton = () => {
	return (
		<main className="flex items-center justify-center flex-col h-[100vh]">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-red-700 text-transparent bg-clip-text ">
				{" "}
				Made with Framer Motion
			</h1>
			<div className="flex">
				<Framer>
					<Twitter className="size-[50px] text-[#c8bdb0] hover:text-[#ec4e39] cursor-pointer transition-all durtion-200 m-10" />
				</Framer>
				<Framer>
					<Youtube className="size-[50px] text-[#c8bdb0] hover:text-[#ec4e39] cursor-pointer transition-all durtion-200 m-10" />
				</Framer>
				<Framer>
					<Github className="size-[50px] text-[#c8bdb0] hover:text-[#ec4e39] cursor-pointer transition-all durtion-200 m-10" />
				</Framer>
				<Framer>
					<Facebook className="size-[50px] text-[#c8bdb0] hover:text-[#ec4e39] cursor-pointer transition-all durtion-200 m-10" />
				</Framer>
			</div>
		</main>
	);
};

export default MagneticButton;

function Framer({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = e;
		if (!ref.current) return;
		const { height, width, left, top } = ref.current.getBoundingClientRect();
		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		setPosition({ x: middleX, y: middleY });
	};

	const reset = () => {
		setPosition({ x: 0, y: 0 });
	};

	const { x, y } = position;
	return (
		<motion.div
			style={{ position: "relative" }}
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={reset}
			animate={{ x, y }}
			transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
		>
			{children}
		</motion.div>
	);
}
