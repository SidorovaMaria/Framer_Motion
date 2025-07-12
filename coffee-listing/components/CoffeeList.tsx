"use client";
import { Coffee, getCoffeeList } from "@/lib/coffee.action";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useInView, Variants } from "motion/react";

const CoffeeList = ({
	collection,
	ref,
}: {
	collection: string;
	ref: React.RefObject<HTMLDivElement | null>;
}) => {
	const [coffeeData, setCoffeeData] = useState<Coffee[]>([]);
	const inView = useInView(ref, { margin: "-300px 0px -300px 0px" });
	useEffect(() => {
		getCoffeeList()
			.then((data) => {
				const filtered = data.filter((coffee: Coffee) => {
					if (collection === "All") return true;
					return coffee.available; // only keep available ones
				});
				setCoffeeData(filtered);
			})
			.catch(console.error);
	}, [collection]);

	return (
		<AnimatePresence mode="wait">
			{inView && coffeeData ? (
				<motion.div
					key={`${collection}-${coffeeData.length}`}
					className="grid grid-cols-3 items-center gap-10 max-w-[80%] w-full"
					initial="initial"
					animate="visible"
					exit="exit"
					variants={coffeesContainerVariants}
				>
					{coffeeData.map((coffee) => (
						<motion.div
							key={coffee.id}
							variants={coffeeVariant}
							className="flex flex-col gap-2 w-full rounded-md relative overflow-hidden"
						>
							<Image
								src={coffee.image}
								alt={coffee.name}
								width={300}
								height={300}
								className="w-full h-36 object-cover object-center rounded-xl"
							/>
							{coffee.popular && (
								<span className="absolute top-2 left-2 bg-yellow text-smoke py-1 px-2.5 small font-bold rounded-xl">
									Popular
								</span>
							)}
							<div className="flex flex-col gap-2 p-2">
								<div className="flex w-full items-center justify-between">
									<h2>{coffee.name}</h2>
									<p className="price px-2 py-1 rounded-md bg-green text-smoke font-bold">
										{coffee.price}
									</p>
								</div>
								<div className="flex iems-center justify-between w-full">
									<div className="flex items-center gap-1 font-bold text-sm text-grey-100">
										{coffee.rating ? (
											<>
												<Image
													src="/icons/Star_fill.svg"
													alt="Star Icon"
													width={18}
													height={18}
												/>
												<p className="text-white">
													{Number(coffee.rating).toFixed(1)}
												</p>
												<p>({coffee.votes} votes)</p>
											</>
										) : (
											<>
												<Image
													src="/icons/star.svg"
													alt="Star Icon"
													width={18}
													height={18}
												/>
												<p>No Ratings</p>
											</>
										)}
									</div>
									{!coffee.available && (
										<p className="text-red font-bold label">Sold Out</p>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export default CoffeeList;
const coffeesContainerVariants: Variants = {
	initial: {
		opacity: 0,
		y: -50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.05,
			when: "beforeChildren",
		},
	},
	exit: {
		opacity: 0,
		y: -50,
		transition: {
			staggerChildren: 0.02,
			when: "afterChildren",
		},
	},
};
const coffeeVariant: Variants = {
	initial: {
		opacity: 0,
		y: -50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	exit: {
		opacity: 0,
		y: -50,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};
