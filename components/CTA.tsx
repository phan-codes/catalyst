import React from "react";
import Reveal from "./Reveal";

const CTA = () => {
	const inputClass: string =
		"p-2 mb-6 peer w-full placeholder-transparent bg-offwhite outline-none caret-black peer rounded-md focus:shadow-md";

	const labelClass: string =
		"absolute -top-6 left-0 text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-1 peer-focus:-top-8 peer-focus:text-gray-800 duration-500";
	return (
		<section className="py-14 px-4 bg-reggreen/10  flex flex-col items-center justify-center" id="cta">
			<div className="gap-10 max-w-[820px] flex flex-col items-center md:gap-16">
				<Reveal className="flex flex-col items-center text-center gap-2">
					<h1 className="text-2xl font-bold font-Montserrat text-reggreen md:text-3xl lg:text-4xl">
						Ready to Delegate Your Tech Stack?
					</h1>
					<h3 className="font-QuickSand font-semibold md:text-xl">
						Want to stop managing your tools? Let us handle it. We’ll build and run your tech stack while you grow your
						business.
					</h3>
				</Reveal>

				<Reveal className="w-full">
					<form action="submit" className="flex flex-col gap-y-3">
						<div className="relative">
							<input type="text" name="name" required placeholder="Your Full Name" className={inputClass} />
							<label htmlFor="name" className={labelClass}>
								Your Full Name *
							</label>
						</div>
						<div className="relative">
							<input type="email" name="email" required placeholder="Your Email*" className={inputClass} />
							<label htmlFor="email" className={labelClass}>
								Your Email *
							</label>
						</div>
						<div className="relative">
							<input type="text" name="subject" placeholder="Company Name" className={inputClass} />
							<label htmlFor="subject" className={labelClass}>
								Company Name
							</label>
						</div>
						<div className="relative">
							<input type="text" name="subject" required placeholder="Company Name" className={inputClass} />
							<label htmlFor="subject" className={labelClass}>
								Tech Stack/Needs *
							</label>
						</div>
						<div className="relative">
							<textarea name="message" placeholder="Message" className={`${inputClass} min-h-44`} />
							<label htmlFor="message" className={labelClass}>
								Message
							</label>
						</div>
						<button
							type="submit"
							className="w-full bg-reggreen px-5 py-2 rounded-md text-offwhite text-sm hover:bg-reggreen/90 duration-300">
							Submit
						</button>
					</form>
				</Reveal>
			</div>
		</section>
	);
};

export default CTA;
