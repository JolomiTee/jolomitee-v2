import { T, Var } from "gt-next";
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
		{
			href: "https://wa.me/2349061603717",
			ion_icon: "logo-whatsapp",
			title: "Whatsapp",
		},
	],
};

const SocialList = () => {
	return (
		<ul className="social-list flex justify-center md:justify-start items-center gap-x-5 gap-y-3 pb-1 ps-2 xl:p-0 xl:grid xl:grid-cols-3 2xl:flex 2xl:justify-center flex-wrap">
			{info.items.map((items, index) => (
				<T key={index} id="components.sidebar.sociallist.0">
					<li className="social-item">
						<Link
							role="link"
							href={items.href}
							aria-label={`Find Jolomi Taiwo on ${items.title}`}
							target="_blank"
							title={`Jolomi Taiwo on ${items.title}`}
							className="social-link text-light-gray-70 text-fs-5 xl:text-fs-3 hover:text-white flex gap-1 items-center"
						>
							<span className="sr-only">See Jolomi Taiwo on </span>
							<Var>{items.title}</Var>{" "}
							<ArrowUpRight className="w-3 h-3" />
						</Link>
					</li>
				</T>
			))}

			<Link
				role="link"
				href={"/files/Jolomi Taiwo Emmanuel - Resume 2025.pdf"}
				aria-label="See Jolomi Taiwo's resume"
				target="_blank"
				title="Jolomi Taiwo's Resume"
				className="social-link text-light-gray-70 text-fs-5 xl:text-fs-3 hover:text-white flex gap-1 items-center"
			>
				<span className="sr-only">See Jolomi&apos; resume </span>
				<Var>My Resume</Var> <ArrowUpRight className="w-3 h-3" />
			</Link>
		</ul>
	);
};

export default SocialList;
