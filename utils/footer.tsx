import x from "@/public/svgs/x-logo.svg";
import instagram from "@/public/svgs/instagram.svg";
import facebook from "@/public/svgs/facebook.svg";
import linkedin from "@/public/svgs/linkedin.svg";
import youtube from "@/public/svgs/youtube.svg";
import { StaticImageData } from "next/image";

interface FooterLinksProps {
	name: string;
	links: {
		link: string;
		href: string;
	}[];
}

interface FooterIconProps {
	icon: StaticImageData;
	href: string;
}

export const footerlinks: FooterLinksProps[] = [
	{
		name: "Quick Links",
		links: [
			{
				link: "What We Manage",
				href: "#whatwemanage",
			},
			{
				link: "How It Works",
				href: "#howitworks",
			},
			{
				link: "Services",
				href: "#services",
			},
			{
				link: "Why Catalyst",
				href: "#whycatalyst",
			},
		],
	},
	{
		name: "Resources",
		links: [
			{
				link: "Contact Us",
				href: "mailto:learnmore@marcoby.com",
			},
			{
				link: "Schedule a Call",
				href: "https://outlook.office365.com/book/MarcobyITSolutions@marcoby.com/",
			},
			{
				link: "Send Your Stack",
				href: "#cta",
			},
		],
	},
	{
		name: "Legal",
		links: [
			{
				link: "Privacy Policy",
				href: "https://marcobycloud.com/acceptable-use-policy/",
			},
			{
				link: "Terms of Service",
				href: "https://marcobycloud.com/terms-of-service/",
			},
			{
				link: "Security & Compliance",
				href: "https://marcobycloud.com/service-level-guarantees/",
			},
		],
	},
];

export const footerIcons: FooterIconProps[] = [
	{
		icon: x,
		href: "https://x.com/MarcobyOnline",
	},
	{
		icon: instagram,
		href: "https://www.instagram.com/MarcobyOnline/",
	},
	{
		icon: linkedin,
		href: "https://www.linkedin.com/in/MarcobyOnline",
	},
	{
		icon: youtube,
		href: "https://www.youtube.com/@MarcobyOnline",
	},
	{
		icon: facebook,
		href: "https://www.facebook.com/MarcobyOnline",
	},
];
