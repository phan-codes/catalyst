import React from "react";
import { whys } from "@/utils/why";
import whyimg from "@/public/whyimg.jpg";
import Image from "next/image";
import Reveal from "./Reveal";

const Why = () => {
	return (
		<section className="relative py-14 gap-14 w-full flex flex-col items-center px-4 md:gap-16" id="whycatalyst">
			<div className="absolute w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0">
				<Image src={whyimg} alt="BG" className="w-full h-full object-cover" />
			</div>

			<div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-offwhite/95 via-offwhite/90 to-offwhite/85 z-1"></div>
			<div className="relative z-2 w-full">
				<Reveal className="flex flex-col items-center text-center gap-2">
					<h1 className="text-2xl font-bold font-Montserrat text-reggreen md:text-3xl lg:text-4xl">Why Catalyst?</h1>
					<h3 className="font-QuickSand font-semibold text-primary/70 md:text-xl">
						Focus on your business. We will run your digital operations.
					</h3>
				</Reveal>

				<Reveal className="pt-6 text-xs flex flex-col max-w-[820px] mx-auto md:items-center md:text-sm lg:text-base">
					<p className="leading-[22px] md:text-center md:leading-5 lg:leading-7">
						With Catalyst, your business gains access to a reliable, comprehensive IT service provider without the
						complexity or cost of managing it in-house. Our proactive approach ensures you can focus on what matters
						most—growing your business with confidence. Whether you're looking for robust IT management, innovative
						marketing solutions, or custom automation, Catalyst is your trusted partner.
					</p>
					<ul className="list-disc list-inside pt-3 text-black/70">
						{whys.map((why, index) => (
							<li key={index} className="py-1">
								{why}
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</section>
	);
};

export default Why;
