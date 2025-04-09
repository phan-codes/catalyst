import React from "react";
import { services } from "@/utils/services";
import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const Services = () => {
	return (
		<section className="py-14 gap-14 w-full flex flex-col items-center px-4 bg-reggreen/10 md:gap-16" id="services">
			<Reveal className="flex flex-col w-full items-center text-center gap-2">
				<h1 className="relative text-2xl font-bold font-Montserrat text-reggreen md:text-3xl lg:text-4xl ">
					Our Managed Services
				</h1>
				<h3 className="font-QuickSand font-semibold text-primary/70 md:text-xl">
					Comprehensive solutions tailored to your needs.
				</h3>
			</Reveal>

			<div className="flex flex-col gap-20 py-10 max-w-[1200px] lg:px-10">
				{services.map(({ name, text, features, plans, image }, index) => (
					<Reveal
						key={name}
						className={`flex flex-col gap-10 justify-center items-center ${
							index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
						}`}>
						<Reveal className="relative basis-1/2 ">
							<Image src={image} alt={name} />
						</Reveal>
						<Reveal className="flex flex-col text-xs gap-3  basis-1/2 md:text-center md:items-center lg:items-start lg:text-left lg:text-sm">
							<h1 className="font-Montserrat font-bold text-xl text-reggreen text-center">{name}</h1>
							<p className="leading-5 lg:leading-6">{text}</p>
							<ul className="md:text-left">
								{features.map((feature, index) => (
									<li key={index} className="leading-6 flex items-center text-black/65">
										<div className="h-fit rounded-full text-white bg-reggreen p-[2px] mr-2">
											<Check className="w-3 h-3" />
										</div>
										{feature}
									</li>
								))}
							</ul>
							<div className="">
								{plans.map(({ type, plan }, index) => (
									<div key={index} className="py-1">
										<h4 className="font-bold">
											{type} : <span className="font-normal">{plan}</span>
										</h4>
									</div>
								))}
							</div>
						</Reveal>
					</Reveal>
				))}
			</div>
		</section>
	);
};

export default Services;
