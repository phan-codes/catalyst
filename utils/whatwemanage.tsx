import { Computer, Globe, GlobeLock, Mails, SatelliteDish, SmartphoneNfc } from "lucide-react";

interface WhatWeManageProps {
	name: string;
	text: string;
	icon: any;
}

export const whatwemanage: WhatWeManageProps[] = [
	{
		name: "Domain",
		text: "We handle domain registration, renewals, DNS configuration, and SSL certificates—ensuring your online identity stays secure and always live",
		icon: <Globe />,
	},
	{
		name: "Email",
		text: "From setting up business email to managing secure, spam-free inboxes with Google Workspace or Microsoft 365—we keep your communications smooth and professional.",
		icon: <Mails />,
	},
	{
		name: "Hosting",
		text: "We provide fast, secure, and scalable hosting solutions with automatic backups, uptime monitoring, and performance tuning built in.",
		icon: <SatelliteDish />,
	},
	{
		name: "Websites",
		text: "We manage everything from development to maintenance. Whether it’s a marketing site, a blog, or an ecommerce store, we keep it live, fast, and updated.",
		icon: <Computer />,
	},
	{
		name: "Security",
		text: "Your business stays protected with firewalls, endpoint protection, compliance monitoring, and 24/7 threat detection by our cybersecurity experts.",
		icon: <GlobeLock />,
	},
	{
		name: "SaaS Tool",
		text: "We manage the critical third-party software you rely on—CRM, ERP, HR, billing, marketing tools—so they stay integrated, secure, and running smoothly.",
		icon: <SmartphoneNfc />,
	},
];
