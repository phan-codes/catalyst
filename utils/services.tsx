import { StaticImageData } from "next/image";
import ITimg from "@/public/ITimg.png";
import Autoimg from "@/public/Autoimg.png";
import Webimg from "@/public/Webimg.png";
import Marketingimg from "@/public/Marketingimg.png";

interface ServiceProps {
	name: string;
	image: StaticImageData;
	text: string;
	features: string[];
	plans: {
		type: string;
		plan: string;
	}[];
}

export const services: ServiceProps[] = [
	{
		name: "IT-as-a-Service (ITaaS)",
		image: ITimg,
		text: "Catalyst’s IT-as-a-Service (ITaaS) offering ensures your business is supported by enterprise-level IT infrastructure management, without the need for an in-house IT department. From 24/7 support to system optimization, we proactively manage and monitor your IT environment to ensure stability and growth.",
		features: [
			"24/7 IT Monitoring & Support",
			"System Integration & Optimization",
			"Security & Compliance Management",
			"Infrastructure Maintenance & Updates",
		],
		plans: [
			{
				type: "Basic Plan",
				plan: "20 hours of IT support and essential network monitoring",
			},
			{
				type: "Premium Plan",
				plan: "40 hours of proactive IT management, customized integrations, and advanced security",
			},
			{
				type: "Enterprise Plan",
				plan: "80+ hours, including infrastructure audits and tailored enterprise-level IT support",
			},
			{
				type: "Premium Plan",
				plan: "40 hours of proactive IT management, customized integrations, and advanced security",
			},
		],
	},

	{
		name: "Web-as-a-Service (WaaS)",
		image: Webimg,
		text: "A strong online presence is key to business success, and Catalyst offers comprehensive web management services. From stunning website designs to seamless hosting and maintenance, we ensure your business’s web infrastructure is secure, fast, and optimized for user engagement.",
		features: [
			"Custom Web Design & Development",
			"SEO & Performance Optimization",
			"Responsive Mobile-first Design",
			"Website Hosting & Ongoing Updates",
		],
		plans: [
			{
				type: "Starter Plan",
				plan: "Basic website development with monthly updates",
			},
			{
				type: "Growth Plan",
				plan: "Advanced website solutions, SEO, and weekly updates",
			},
			{
				type: "Pro Plan",
				plan: "Full-service ecommerce, marketing integration, and 24/7 support",
			},
		],
	},

	{
		name: "Automation & Systems Administration",
		image: Autoimg,
		text: "Maximize operational efficiency by automating routine processes and optimizing your IT infrastructure with Catalyst’s automation and systems administration services. We automate workflows, integrate platforms, and ensure your systems are always performing at their best.",
		features: [
			"Workflow & Process Automation",
			"Systems Integration & API Management",
			"Cloud-based Infrastructure Administration",
			"Continuous Monitoring & Optimization",
		],
		plans: [
			{
				type: "Basic Automation",
				plan: "20 hours of process automation and integration services",
			},
			{
				type: "Advanced Automation",
				plan: "40 hours of custom workflow development",
			},
			{
				type: "Enterprise Automation",
				plan: "Full automation, multi-system integration, and regular performance checks",
			},
		],
	},

	{
		name: "Marketing-as-a-Service (MaaS)",
		image: Marketingimg,
		text: "Catalyst’s Marketing-as-a-Service provides businesses with a fully managed marketing solution, ensuring your brand grows and reaches the right audience. From content creation to SEO, PPC management to email marketing campaigns, Catalyst takes your marketing efforts to the next level.",
		features: [
			"Content Creation & Copywriting",
			"SEO & PPC Campaign Management",
			"Social Media & Email Marketing",
			"Analytics & Reporting",
		],
		plans: [
			{
				type: "Starter Plan",
				plan: "Content creation and social media management with monthly reporting",
			},
			{
				type: "Growth Plan",
				plan: "Advanced SEO, PPC, and campaign management",
			},
			{
				type: "Pro Plan",
				plan: "Full-service marketing, including daily updates, advanced analytics, and optimization",
			},
		],
	},
];
