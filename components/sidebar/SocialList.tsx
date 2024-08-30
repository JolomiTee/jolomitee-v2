import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const info = {
	items: [
		{
			href: "https://github.com/JolomiTee",
			icon: "logo-github",
			title: "Github",
		},
		{
			href: "https://www.linkedin.com/in/jolomitee",
			ion_icon: "logo-linkedin",
			title: "LinkedIn",
		},
		{
			href: "https://x.com/jolomitee",
			ion_icon: "logo-twitter",
			title: "X",
		},
	],
};

const SocialList = () => {
	return (
		<ul className="social-list flex justify-start items-center gap-4 pb-1 ps-2 2xl:justify-center">
			{info.items.map((items, index) => (
				<li key={index} className="social-item">
					<Link
						href={items.href}
						target="_blank"
						title={items.title}
						className="social-link text-light-gray-70 text-fs-7 hover:text-light-gray flex gap-1 items-center"
					>
						{items.title} <ArrowUpRight className="w-3 h-3" />
						{/* <ion-icon name={items.ion_icon}></ion-icon> */}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default SocialList;
