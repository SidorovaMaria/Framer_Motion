"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import CoffeeList from "@/components/CoffeeList";
import SplitText from "@/components/SplitText";

export default function Home() {
	const [collection, setcollection] = useState("All");
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<main className=" ">
			<header className="fixed top-0 left-0 h-[100vh] right-0 -z-10">
				<motion.div
					initial={{ filter: "blur(0px)" }}
					animate={{ filter: "blur(8px)" }}
					transition={{ delay: 0.3, duration: 0.2, ease: "easeInOut" }}
					className="w-full h-full"
				>
					<Image
						src="/images/bg-cafe.jpg"
						alt="Coffee Shop Background"
						width={1400}
						height={800}
						className=" w-full h-full object-cover "
					/>
				</motion.div>
			</header>
			<section className="mt-50 max-w-[50%] mx-auto">
				<motion.h1
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					className="text-[10vh] text-center font-bold text-white"
				>
					Welcome to Our Coffee Shop
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.8 }}
					className="text-center text-gray-300 font-bold mt-2 "
				>
					Discover the finest selection of coffee from around the world, expertly roasted
					and brewed to perfection. Join us for a cup of coffee and experience the rich
					flavors and aromas that will awaken your senses.
				</motion.p>
			</section>
			<section
				ref={containerRef}
				className="mt-[30vh] max-w-[80%] rounded-2xl mx-auto bg-shark h-[130vh] z-20 p-5 flex flex-col gap-6 items-center "
			>
				<div className="mt-10 flex flex-col w-full items-center justify-center gap-4 text-center relative pt-5">
					<SplitText
						className="heading font-bold z-20"
						text="Our Collection"
						containerRef={containerRef}
						marginChar={10}
					/>
					<SplitText
						className="max-w-[60%] text-grey-100 font-medium body z-20"
						text="Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly."
						containerRef={containerRef}
						marginChar={4}
					/>

					<Image
						width={300}
						height={300}
						src="/icons/vector.svg"
						alt="Vector Icon"
						className="absolute -top-1/12 left-1/2 z-10 opacity-60"
					/>
				</div>
				<div className="flex gap-4 items-center relative">
					{["All", "Now"].map((value) => (
						<button
							key={value}
							onClick={() => setcollection(value)}
							className={`btn relative z-10 px-4 py-2 ${
								collection !== value && "opacity-80"
							} `}
						>
							{value === "All" ? "All Products" : "Available Now"}
							{collection === value && (
								<motion.span
									layoutId="btn-bg"
									className="absolute inset-0 bg-grey rounded-md -z-10"
									transition={{
										type: "spring",
										bounce: 0.4,
										duration: 0.4,
										stiffness: 100,
									}}
								/>
							)}
						</button>
					))}
				</div>

				<CoffeeList collection={collection} ref={containerRef} />
			</section>
		</main>
	);
}
