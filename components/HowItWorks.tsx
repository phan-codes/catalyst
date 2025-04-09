import { howitworks } from "@/utils/howitworks";
import Reveal from "./Reveal";

const HowItWorks = () => {
	return (
		<section className="py-20 gap-14 w-full flex flex-col items-center px-4 md:gap-16" id="howitworks">
			<Reveal className="flex flex-col w-full items-center text-center gap-2">
				<h1 className="text-2xl font-bold font-Montserrat text-reggreen md:text-3xl lg:text-4xl">How It Works</h1>
				<h3 className="font-QuickSand font-semibold text-primary/70 md:text-xl">
					A seamless process to offload your tech stack.
				</h3>
			</Reveal>

			<div className="max-w-[1200px] mx-auto flex flex-col gap-3 px-4 md:gap-6">
				{howitworks.map(({ step, text }, index) => (
					<Reveal key={index} className="relative flex flex-col text-offwhite p-4">
						<div className="absolute skew-x-12 inset-x-0 -inset-y-4 bg-gradient-to-br from-reggreen via-reggreen/95 to-reggreen/90 -z-10 max-w-[600px] shadow-xl"></div>
						<h3 className="font-bold font-Montserrat">{step}</h3>
						<p className="text-xs text-offwhite/70">{text}</p>
					</Reveal>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
