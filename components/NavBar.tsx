"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/catalyst.png";
import { navlinks } from "@/utils/navlinks";
import Hamburger from "./Hamburger";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NavBar = () => {
	// ! For NAVBAR on SCROLL UP APPEAR
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous: any = scrollY.getPrevious();
		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});
	const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

	const handleMenuShow = () => {
		setIsMenuShown(!isMenuShown);
	};

	useEffect(() => {
		const hideMenu = () => {
			setIsMenuShown(false);
		};

		window.addEventListener("scroll", hideMenu);
	}, []);

	return (
		<>
			<motion.nav
				className="fixed top-4 inset-x-0 z-5 bg-transparent backdrop-blur-xl shadow-xl border-solid border-reggreen rounded-full flex justify-between px-5 max-w-4/5 items-center mx-auto"
				variants={{
					visible: { translateY: 0 },
					hidden: { translateY: "-300%" },
				}}
				animate={hidden ? "hidden" : "visible"}
				transition={{ duration: 0.5, ease: "easeInOut" }}>
				<Link href="/" className="relative w-12 h-12">
					<Image src={logo} alt="logo" priority />
				</Link>

				<Hamburger isMenuShown={isMenuShown} handleMenuShow={handleMenuShow} />

				<div className="hidden lg:block">
					<ul className="flex text-sm items-center gap-x-7">
						{navlinks.map(({ name, href }, index) => (
							<li key={index}>
								<Link href={href} className="font-bold hover:text-black/45 duration-200">
									{name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</motion.nav>
			<div
				className={`fixed h-fit py-10 justify-center top-[70px] inset-x-0 max-w-4/5 mx-auto z-5 items-center bg-offwhite/10 backdrop-blur-xl shadow-xl rounded-md lg:hidden  ${
					isMenuShown ? "gap-y-3 py-10 duration-700" : "hidden py-0 gap-y-0 duration-300"
				}`}>
				<ul className="flex flex-col text-sm items-center">
					{navlinks.map(({ name, href }, index) => (
						<li key={index} className="w-full">
							<Link
								href={href}
								className="inline-block font-bold border-b border-solid border-black/10 py-3 w-full text-center hover:bg-black/10 duration-200">
								{name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default NavBar;
