import Logo from "@/icons/Logo";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="fixed inset-0 z-300">
			<div className="h-20 md:h-14 border-b-1 border-dark bg-light w-full absolute top-0 left-0 translate-none">
				<div className="container">
					{/* Navigation Inner */}
					<nav className="h-20 md:h-14 justify-end md:justify-between flex items-center w-full">
						{/* Navigation Links */}
						<ul className="md:flex items-center gap-6 justify-between hidden">
							<li className="underline-link">
								<Link href="#about">About</Link>
							</li>
							<li className="underline-link">
								<Link href="#speakers">Speakers</Link>
							</li>
							<li className="underline-link">
								<Link href="#activities">Activities</Link>
							</li>
						</ul>
						{/* Navigation Logo */}
						<div className="pointer-events-none justify-center items-center right-[25%] md:right-auto w-full h-full flex absolute top-0 md:left-0">
							<div className="pointer-events-auto w-42 md:w-36 lg:40">
								<Logo />
							</div>
						</div>
						<div className="btn inline-block ">
							<span className="">Buy Tickets </span>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
