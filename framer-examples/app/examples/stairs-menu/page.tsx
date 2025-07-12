"use client";
import { AnimatePresence, useAnimate, Variants } from "motion/react";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const StairsMenu = () => {
	return (
		<>
			<Header />
		</>
	);
};

export default StairsMenu;

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="bg-red-100">
			<BurgerMenu
				openMenu={() => {
					setMenuOpen(!menuOpen);
				}}
			/>
			<AnimatePresence mode="wait">
				{menuOpen && (
					<>
						<Stairs />
						<Menu closeMenu={() => setMenuOpen(false)} />
					</>
				)}
			</AnimatePresence>
		</div>
	);
};

const BurgerMenu = ({ openMenu }: { openMenu: () => void }) => {
	return (
		<div
			onClick={() => {
				openMenu();
			}}
			className="w-[120px] h-[120px] bg-white flex flex-col justify-end fixed right-0 top-0 p-[10px] cursor-pointer rounded-bl-xl
            group overflow-hidden"
		>
			<div
				className="bg-red-950 w-full h-[10px] transition-height duration-500
            absolute right-0 top-0 z-[-1] height-0 group-hover:h-[120px]"
			></div>
			<svg
				className="absolute top-[20px] right-[10px] "
				width="56"
				height="7"
				viewBox="0 0 56 7"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					x1="56"
					y1="0.5"
					x2="4.37114e-08"
					y2="0.500005"
					stroke="black"
					className="
        transition-colors duration-500 transition-stroke
        stroke-black group-hover:stroke-white
       "
				/>
				<line
					x1="56"
					y1="6.5"
					x2="28"
					y2="6.5"
					stroke="black"
					className="
        transition-colors duration-500 transition-stroke
        stroke-black group-hover:stroke-white
      "
				/>
			</svg>
			<p className=" text-black m-0 uppercase transition-colors duration-500 group-hover:text-white">
				Menu
			</p>
		</div>
	);
};

const Stairs = () => {
	return (
		<div className="top-0 left-0 fixed z-2 h-[100vh] flex transition-all duration-100 pointer-events-none">
			{[...Array(5)].map((_, index) => {
				return <Stair key={index} index={index} />;
			})}
			<Background />
		</div>
	);
};

const Stair = ({ index }: { index: number }) => {
	return (
		<motion.div
			variants={height}
			{...mountAnim}
			custom={4 - index}
			className="w-[20vw] h-full bg-red-950"
		></motion.div>
	);
};

const Background = () => {
	return (
		<motion.div
			variants={background}
			{...mountAnim}
			className="w-full h-full absolute bg-red-950"
		></motion.div>
	);
};
const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
	return (
		<nav className="fixed flex z-3 h-full w-full flex-col justify-between">
			<div className="flex justify-end p-[20px]">
				<motion.svg
					variants={slideLeft}
					{...mountAnim}
					onClick={() => {
						closeMenu();
					}}
					width="68"
					height="68"
					viewBox="0 0 68 68"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="cursor-pointer w-[100px] h-[100px] group"
				>
					<path
						d="M1.5 1.5L67 67"
						stroke="white"
						className="transition-all duration-500 group-hover:stroke-3"
					/>

					<path
						d="M66.5 1L0.999997 66.5"
						stroke="white "
						className="transition-all duration-500 group-hover:stroke-3"
					/>
				</motion.svg>
			</div>
			<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
				{menu.map((el, index) => (
					<LinkElement data={el} index={index} key={index} />
				))}
			</div>
		</nav>
	);
};

const LinkElement = ({
	data,
	index,
}: {
	data: { title: string; description: string; images: string[] };
	index: number;
}) => {
	const { title, description, images } = data;
	const [scope, animate] = useAnimate();
	const outer = useRef(null);
	const inner = useRef(null);
	const animateIn = async (e: React.MouseEvent<HTMLDivElement>) => {
		const bounds = (e.target as HTMLElement).getBoundingClientRect();
		const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;
		if (outer.current) {
			await animate(outer.current, { top: `${direction * 100}%` }, { duration: 0 });
		}
		if (inner.current) {
			await animate(inner.current, { top: `${-1 * direction * 100}%` }, { duration: 0 });
		}
		animate([outer.current, inner.current], { top: "0%" }, { duration: 0.3 });
	};
	const animateOut = (e: React.MouseEvent<HTMLDivElement>) => {
		const bounds = (e.target as HTMLElement).getBoundingClientRect();
		const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;
		if (outer.current) {
			animate(outer.current, { top: `${direction * 100}%` }, { duration: 0.3 });
		}
		if (inner.current) {
			animate(inner.current, { top: `${-1 * direction * 100}%` }, { duration: 0.3 });
		}
	};
	return (
		<motion.div
			variants={rotateX}
			{...mountAnim}
			custom={index}
			onMouseEnter={(e) => {
				animateIn(e);
			}}
			onMouseLeave={(e) => {
				animateOut(e);
			}}
			ref={scope}
			className="border-t border-white flex justify-center cursor-pointer perspective-[80vw] origin-top last:border-b last:border-white"
		>
			<Link
				href="/"
				className="text-white uppercase text-[8vw] leading-[8.2vw] font-normal m-0 no-underline"
			>
				{title}
			</Link>
			<div
				ref={outer}
				className="flex absolute h-full w-full overflow-hidden pointer-events-none "
			>
				<div
					ref={inner}
					className="bg-red-900 absolute whitespace-nowrap h-full top-full flex "
				>
					{[...Array(2)].map((_, index) => {
						return (
							<SliderContent key={index} images={images} description={description} />
						);
					})}
				</div>
			</div>
		</motion.div>
	);
};

const SliderContent = ({ images, description }: { images: string[]; description: string }) => {
	return (
		<div className="flex items-center relative  transition-opacity duration-300 [&:nth-child(2)]:delay-[-4000ms] [&:nth-child(3)]:delay-[-6000ms] animation-slider">
			<div className="h-[6vw] w-[16vw] relative overflow-hidden rounded-[3vw] mx-[2vw] flex">
				<Image src={`/images/${images[0]}`} fill alt="image" className="object-cover" />
			</div>

			<p className="text-white text-[5vw] uppercase">{description}</p>

			<div className="h-[6vw] w-[16vw] relative overflow-hidden rounded-[3vw] mx-[1vw] flex">
				<Image src={`/images/${images[1]}`} fill alt="image" className="object-cover" />
			</div>

			<p className="text-white text-[5vw] uppercase">{description}</p>
		</div>
	);
};

//Constants for animation

const mountAnim = { initial: "initial", animate: "enter", exit: "exit" };
const height: Variants = {
	initial: { height: 0 },
	enter: (i: number) => ({
		height: "100%",
		transition: { duration: 0.5, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
	}),
	exit: (i) => ({
		height: 0,
		transition: { duration: 0.3, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
	}),
};
const background: Variants = {
	initial: { opacity: 0 },
	enter: { opacity: 0.5, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
	exit: { opacity: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
};

const slideLeft: Variants = {
	initial: {
		x: 150,
	},
	enter: {
		x: 0,
		transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
	},
	exit: {
		x: 150,
		transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
	},
};
const rotateX: Variants = {
	initial: {
		rotateX: 90,
		opacity: 0,
	},
	enter: (i) => ({
		rotateX: 0,
		opacity: 1,
		transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.3 + i * 0.05 },
	}),
	exit: {
		opacity: 0,
		transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
	},
};

// Constanst menu
const menu = [
	{
		title: "Projects",
		description: "To See Everything",
		images: ["image_5.jpg", "image_6.jpg"],
	},
	{ title: "Agence", description: "To Learn Everything", images: ["image_1.jpg", "image_2.jpg"] },
	{ title: "Contact", description: "To Send a FAX", images: ["image_3.jpg", "image_4.jpg"] },
];
