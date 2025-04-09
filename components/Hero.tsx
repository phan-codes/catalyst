import React from "react";
import Image from "next/image";
import heroimg from "@/public/heroimg.png";
import Reveal from "./Reveal";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="h-screen pt-14 gap-5 w-full flex flex-col items-center px-4 overflow-x-hidden md:gap-16 lg:flex-row-reverse lg:pl-10">
			<Reveal className="relative w-full py-12 md:h-1/2 md:basis-1/2">
				<div className="bg-reggreen absolute -inset-x-14 -top-1 bottom-20 -skew-12 -z-10 lg:-left-0 lg:-skew-y-0"></div>

				<Image
					src={heroimg}
					alt="heroimg"
					priority
					className="w-full translate-y-10 md:translate-y-0 md:h-full lg:translate-y-16"
				/>
			</Reveal>

			<Reveal className="max-w-[664px] h-1/2 text-center basis-1/2 flex flex-col items-center gap-3 lg:text-left lg:items-start lg:gap-5">
				<h1 className="font-bold font-QuickSand rounded-full shadow-sm bg-reggreen/10 w-fit px-5 py-1 text-primary/80 lg:text-xl">
					Welcome to Catalyst by Marcoby
				</h1>

				<h2 className="text-2xl font-semibold font-Montserrat text-reggreen md:text-4xl md:leading-12 lg:text-5xl lg:leading-14">
					Empower Your Business with Seamless, Scalable Solutions.
				</h2>

				<p className="text-xs text-black/60 md:text-sm">
					In today’s fast-paced digital world, businesses need more than just basic technical support—they need an
					integrated, scalable solution that evolves with their needs. Catalyst delivers exactly that, powering your IT,
					web, and operations so you can focus on growing your business.
				</p>

				<div className="flex flex-col gap-3 w-full md:flex-row md:justify-center lg:justify-start">
					<a
						aria-hidden
						href="https://outlook.office365.com/book/MarcobyITSolutions@marcoby.com/"
						className="bg-reggreen px-5 py-2 rounded-md text-offwhite text-sm hover:bg-reggreen/90 duration-300"
						target="_blank"
						rel="noopener noreferrer">
						Schedule a Call
					</a>

					<Link
						href="#cta"
						className="bg-offwhite border-[2px] border-solid border-reggreen/80 px-5 py-2 rounded-md text-sm hover:bg-reggreen/5 duration-300">
						Send Your Stack
					</Link>
				</div>
			</Reveal>
		</section>
	);
};

export default Hero;
