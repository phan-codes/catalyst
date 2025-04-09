import React from "react";
import Image from "next/image";
import logo from "@/public/catalyst.png";
import { footerlinks, footerIcons } from "@/utils/footer";
import Reveal from "./Reveal";

const Footer = () => {
	return (
		<footer className="bg-reggreen px-4 py-14 gap-16 text-offwhite flex flex-col">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
				<Reveal className="flex flex-col items-center text-center px-10 md:px-0">
					<div className="relative w-20 h-20">
						<Image src={logo} alt="logo" />
					</div>
					<p className="text-sm text-offwhite/80">Catalyst by Marcoby—Your partner in seamless digital operations</p>
				</Reveal>
				{footerlinks.map(({ name, links }, index) => (
					<Reveal key={index} className="flex flex-col items-center text-center md:text-left">
						<h2 className="font-semibold font-Montserrat py-2 md:-translate-x-4">{name}</h2>
						<ul>
							{links.map(({ link, href }, index) => (
								<li key={index} className="py-1">
									<a href={href} className="text-sm text-offwhite/80 hover:text-offwhite/50 duration-300">
										{link}
									</a>
								</li>
							))}
						</ul>
					</Reveal>
				))}
			</div>

			<Reveal className="flex flex-col items-center justify-center gap-2">
				<h3 className="font-Montserrat font-bold">Follow Us</h3>
				<div className="flex items-center gap-3">
					{footerIcons.map(({ icon, href }, index) => (
						<a
							href={href}
							key={index}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block w-9 h-9 p-[6px] rounded-full border border-solid border-primary/30">
							<Image src={icon} alt={href} />
						</a>
					))}
				</div>
				<p className="text-offwhite/50 text-sm">© 2025 Marcoby. All rights reserved.</p>
			</Reveal>
		</footer>
	);
};

export default Footer;
