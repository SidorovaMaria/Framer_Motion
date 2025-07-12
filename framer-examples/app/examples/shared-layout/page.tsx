"use client";
// import React from "react";
// import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

// const SharedLayoutExample = () => {
// 	const [selectedTab, setSelectedTab] = React.useState(allIngredients[1]);
// 	return (
// 		<main className="w-[100vw] h-[100vh] flex items-center justify-center ">
// 			<div className="w-[480px] h-[60vh] max-h-[360] bg-white rounded-lg overflow-hidden flex flex-col">
// 				<nav className="bg-[#fdfdfd] p-1 rounded-md rounded-b-none border-b border-b-[#eeeeee] h-[44px]">
// 					<ul className="flex w-full">
// 						{allIngredients.map((item) => (
// 							<motion.li
// 								key={item.label}
// 								initial={false}
// 								className="w-full py-2.5 px-4 relative cursor-pointer flex justify-center items-center flex-1 min-w-0 user-select-none text-[#0f1115] font-bold text-lg"
// 								onClick={() => setSelectedTab(item)}
// 							>
// 								{`${item.icon} ${item.label}`}
// 								{item === selectedTab ? (
// 									<motion.div
// 										className="absolute top-[80%] -left-1 right-1 h-[2px] bg-black"
// 										layoutId="underline"
// 										id="underline"
// 									/>
// 								) : null}
// 							</motion.li>
// 						))}
// 					</ul>
// 				</nav>
// 				<section className="flex items-center justify-center flex-1">
// 					<AnimatePresence mode="wait">
// 						<motion.div
// 							key={selectedTab ? selectedTab.label : "empty"}
// 							initial={{ y: 10, opacity: 0 }}
// 							animate={{ y: 0, opacity: 1 }}
// 							exit={{ y: -10, opacity: 0 }}
// 							transition={{ duration: 0.2 }}
// 							style={{ fontSize: "128px" }}
// 						>
// 							{selectedTab ? selectedTab.icon : "😋"}
// 						</motion.div>
// 					</AnimatePresence>
// 				</section>
// 			</div>
// 		</main>
// 	);
// };

// export default SharedLayoutExample;

// interface Ingredient {
// 	icon: string;
// 	label: string;
// }

// const allIngredients: Ingredient[] = [
// 	{ icon: "🍅", label: "Tomato" },
// 	{ icon: "🍌", label: "Banana" },
// 	{ icon: "🫐", label: "Blueberries" },
// ];

import React from "react";
const navlinksExmaple = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Contact", href: "/contact" },
];

const SharedLayoutExample = () => {
	const [selectedTab, setSelectedTab] = React.useState(navlinksExmaple[0]);
	return (
		<main className="w-[100vw] h-[100vh] flex flex-col gap-10 items-center pt-20 font-special uppercase tracking-wide font-bold">
			<nav>
				<ul className="flex w-full gap-4  ">
					{navlinksExmaple.map((item) => (
						<motion.li
							key={item.label}
							onClick={() => setSelectedTab(item)}
							className={`
                        ${
							item.label === selectedTab.label
								? "text-white "
								: "text-zinc-600 hover:text-zinc-50"
						} cursor-pointer transition-colors duration-300 ease-in-out relative`}
						>
							{item.label}
							{item.label === selectedTab.label && (
								<motion.div
									id="underline"
									layoutId="underline"
									className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#8df0cc] "
								/>
							)}
						</motion.li>
					))}
				</ul>
			</nav>
			<nav>
				<motion.ul
					initial="hidden"
					animate="show"
					className="flex gap-4 items-center"
					variants={container}
				>
					{navlinksExmaple.map((item) => (
						<motion.li
							key={item.label}
							variants={itemVariant}
							onClick={() => setSelectedTab(item)}
							className={`
                            ${
								item.label === selectedTab.label
									? "text-white "
									: "text-zinc-600 hover:text-zinc-50"
							} cursor-pointer transition-colors duration-300 ease-in-out relative`}
						>
							{item.label}
							{item.label === selectedTab.label && (
								<motion.div
									layoutId="bouncy-indicator"
									className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#8df0cc] to-[#f08dba]"
									initial={false}
									transition={{
										type: "spring",
										stiffness: 500,
										damping: 30,
									}}
								/>
							)}
						</motion.li>
					))}
				</motion.ul>
			</nav>
			<nav>
				<motion.ul
					initial="hidden"
					animate="show"
					className="flex gap-4 items-center"
					variants={container}
				>
					{navlinksExmaple.map((item) => (
						<motion.li
							key={item.label}
							variants={itemVariant}
							onClick={() => setSelectedTab(item)}
							className={`
                            ${
								item.label === selectedTab.label
									? "text-white "
									: "text-zinc-600 hover:text-zinc-50"
							} cursor-pointer px-3 transition-colors duration-300 ease-in-out relative`}
						>
							{item.label}
							{item.label === selectedTab.label && (
								<>
									<motion.div
										layoutId="corner-tl"
										className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8df0cc]"
										transition={{ type: "spring" }}
									/>
									<motion.div
										layoutId="corner-br"
										className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8df0cc]"
										transition={{ type: "spring" }}
									/>
								</>
							)}
						</motion.li>
					))}
				</motion.ul>
			</nav>
			<nav>
				<motion.ul
					initial="hidden"
					animate="show"
					className="flex gap-4 items-center"
					variants={container}
				>
					{navlinksExmaple.map((item) => (
						<motion.li
							key={item.label}
							variants={itemVariant}
							onClick={() => setSelectedTab(item)}
							className={`
                            ${
								item.label === selectedTab.label
									? "text-white "
									: "text-zinc-600 hover:text-zinc-50"
							} cursor-pointer px-3 transition-colors duration-300 ease-in-out relative`}
						>
							{item.label}
							{item.label === selectedTab.label && (
								<motion.div
									layoutId="nav-border"
									className="absolute inset-0 border-2 border-[#8df0cc] rounded-lg"
									initial={false}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 20,
									}}
								/>
							)}
						</motion.li>
					))}
				</motion.ul>
			</nav>
			<nav>
				<motion.ul
					initial="hidden"
					animate="show"
					className="flex gap-4 items-center"
					variants={container}
				>
					{navlinksExmaple.map((item) => (
						<motion.li
							key={item.label}
							variants={itemVariant}
							onClick={() => setSelectedTab(item)}
							className={`
                            ${
								item.label === selectedTab.label
									? "text-white "
									: "text-zinc-600 hover:text-zinc-50"
							} cursor-pointer px-3 transition-colors duration-300 ease-in-out relative`}
						>
							{item.label}
							{item.label === selectedTab.label && (
								<motion.div
									layoutId="nav-pulse"
									className="absolute inset-0 bg-gradient-to-r from-[#8df0cc] to-[#f08dba] opacity-60 rounded-lg -z-10"
									animate={{
										opacity: [0.2, 0.4, 0.6],
									}}
									transition={{
										duration: 0.4,
										ease: "easeInOut",
									}}
								/>
							)}
						</motion.li>
					))}
				</motion.ul>
			</nav>
			<nav>
				<motion.ul
					initial="hidden"
					animate="show"
					className="flex gap-4 items-center"
					variants={container}
				>
					{navlinksExmaple.map((item) => (
						<motion.li
							key={item.label}
							variants={itemVariant}
							onClick={() => setSelectedTab(item)}
							className={`
                            ${
								item.label === selectedTab.label
									? "text-black "
									: "text-zinc-600 hover:text-zinc-50"
							} cursor-pointer px-3 transition-colors duration-300 ease-in-out relative z-20 `}
						>
							{item.label}
							{item.label === selectedTab.label && (
								<motion.span
									layoutId="text-highlight"
									className="absolute inset-0 -z-10 bg-[#8df0cc] bg-opacity-20 rounded-md"
									transition={{ type: "spring" }}
								/>
							)}
						</motion.li>
					))}
				</motion.ul>
			</nav>
			<nav>
				<motion.ul
					initial="hidden"
					animate="show"
					className="flex gap-4 items-center"
					variants={container}
				>
					{navlinksExmaple.map((item) => (
						<motion.li
							key={item.label}
							variants={itemVariant}
							onClick={() => setSelectedTab(item)}
							className={`
                            ${
								item.label === selectedTab.label
									? "text-white "
									: "text-zinc-600 hover:text-zinc-50"
							} cursor-pointer px-3 transition-colors duration-300 ease-in-out relative z-20 `}
						>
							{item.label}
							{item.label === selectedTab.label && (
								<motion.div
									layoutId="shadow-glow"
									className="absolute inset-0 rounded-lg shadow-[0_0_10px_2px_rgba(141,240,204,0.5)] -z-10"
									animate={{
										boxShadow: [
											"0 0 10px 2px rgba(141,240,204,0.5)",
											"0 0 15px 4px rgba(141,240,204,0.7)",
											"0 0 10px 2px rgba(141,240,204,0.5)",
										],
									}}
								/>
							)}
						</motion.li>
					))}
				</motion.ul>
			</nav>
		</main>
	);
};

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariant = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export default SharedLayoutExample;
