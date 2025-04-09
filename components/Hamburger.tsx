import React from "react";

interface HamburgerProps {
	handleMenuShow: () => void;
	isMenuShown: boolean;
}

const Hamburger = ({ handleMenuShow, isMenuShown }: HamburgerProps) => {
	return (
		<div className="flex flex-col gap-y-1 lg:hidden cursor-pointer" onClick={handleMenuShow}>
			<div
				className={`w-7 h-[2px] bg-black rounded-full duration-300 ${
					isMenuShown ? "rotate-45  duration-300" : ""
				}`}></div>
			<div
				className={`w-7 h-[2px] bg-black rounded-full duration-300 ${
					isMenuShown ? "-rotate-45 duration-300 -translate-y-[6px]" : ""
				}`}></div>
		</div>
	);
};

export default Hamburger;
