import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import WhatWeManage from "@/components/WhatWeManage";
import Why from "@/components/Why";

export default function Home() {
	return (
		<>
			<Hero />
			<WhatWeManage />
			<HowItWorks />
			<Services />
			<Why />
			<CTA />
		</>
	);
}
