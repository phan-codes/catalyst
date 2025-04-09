import React from "react";
import { whatwemanage } from "@/utils/whatwemanage";
import Reveal from "./Reveal";

const WhatWeManage = () => {
	return (
		<section className="py-14 gap-10 bg-reggreen/10 w-full flex flex-col items-center px-4 md:gap-16" id="whatwemanage">
			<Reveal className="flex flex-col w-full items-center text-center gap-2">
				<h1 className="text-2xl font-bold font-Montserrat text-reggreen md:text-3xl lg:text-4xl">What We Manage</h1>
				<h3 className="font-QuickSand font-semibold text-primary/70 md:text-xl">
					Delegate your digital operations to us.
				</h3>
			</Reveal>

			<div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
				{whatwemanage.map(({ name, text, icon }) => (
					<Reveal
						key={name}
						className="flex flex-col bg-offwhite border-l-[2px] border-reggreen rounded-md p-4 gap-2 shadow-xl md:items-center md:text-center">
						<div className="text-reggreen h-6 w-6">{icon}</div>
						<h1 className="font-bold font-QuickSand text-primary md:text-xl">{name}</h1>
						<p className="text-xs text-black/60 md:text-sm">{text}</p>
					</Reveal>
				))}
			</div>
		</section>
	);
};

export default WhatWeManage;
