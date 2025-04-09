import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Catalyst by Marcoby | Managed IT, Web & Marketing Services",
	description:
		"Delegate your digital ops to Catalyst. We manage your IT, website, security, and marketing—so you can focus on growing your business.",
	openGraph: {
		title: "Catalyst by Marcoby | Managed IT, Web & Marketing Services",
		description:
			"Offload your IT, hosting, web, and marketing stack to Catalyst. Managed services that scale with your business—no dashboards, just delegation.",
		url: "https://catalyst.marcoby.com",
		siteName: "Catalyst by Marcoby",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<link rel="shortcut icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<body className={`relative antialiased font-Poppins bg-offwhite text-black/80 overflow-x-hidden`}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
