import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import SocialList from "@/components/sidebar/SocialList";
import Credits from "@/components/Credits";
import { Analytics } from "@vercel/analytics/react";
import { ViewTransitions } from "next-view-transitions";
import { Var, T, GTProvider } from "gt-next";
import { getLocale } from "gt-next/server";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "Jolomi Taiwo | %s",
		default: "Jolomi Taiwo",
	},
	authors: [{ name: "Jolomi Taiwo", url: "https://jolomitee.vercel.app" }],
	keywords: [
		"Jolomi",
		"Taiwo",
		"Jolomi Taiwo",
		"Taiwo Jolomi",
		"Web developer",
		"Frontend Engineer",
		"Frontend Developer",
		"Nextjs Developer",
		"Reactjs Developer",
	],

	description:
		"Jolomi Taiwo is a Frontend Engineer with 3 years of experience in creating functional, responsive, and visually appealing websites using modern frontend development tools. His expertise lies in transforming design concepts into interactive and high-quality websites, with a focus on delivering seamless user experiences. Jolomi is also expanding his skill set by learning backend development to enhance his contributions to full-stack projects. His passion for coding drives him to continuously improve and refine his skills, ensuring the delivery of exceptional digital solutions.",
};

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<T id="layout.0">
			<ViewTransitions>
				<html lang={await getLocale()}>
					<body className={`relative ${inter.className}  `}>
						<GTProvider>
							<div className="relative md:mt-[10px] md:mb-20 lg:w-max lg:m-auto lg:mb-[70px] 2xl:max-w-[1200px] 2xl:min-w-[95%] 2xl:flex 2xl:justify-center 2xl:items-start 2xl:gap-6 mb-16">
								<Navbar />
								<Sidebar />
								<main
									role="main"
									className="xl:relative xl:min-w-full 2xl:min-w-[75%] 2xl:w-[750px] 2xl:m-0 2xl:mt-[6px]"
								>
									<Var>{children}</Var>
								</main>
							</div>
							<footer className="text-center text-white-2 mb-16 xl:flex xl:mb-0 xl:gap-5 xl:justify-between xl:items-center 2xl:max-w-[1200px] 2xl:min-w-[95%] mx-auto">
								<div className="text-center flex gap-2 items-center h-fit">
									<b>JolomiTee</b>
									<small>version 2.0</small>
								</div>
								<div className="xl:block hidden">
									<SocialList />
								</div>

								<Credits />
							</footer>
						</GTProvider>
					</body>
					<Analytics />
				</html>
			</ViewTransitions>
		</T>
	);
}
