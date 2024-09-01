import DesignIcon from "@/public/icons/icon-design.svg";
import IconDev from "@/public/icons/icon-dev.svg";
import Image from "next/image";

const info = [
	{
		img: IconDev,
		alt: "Design icon",
		title: "Web Design and Development",
		text: "I bring expertise in frontend web development, crafting dynamic, standards-compliant websites with modern technologies. Focused on creating functional and visually appealing interfaces, I seamlessly integrate into development teams to deliver high-quality web products.",
	},
	{
		img: DesignIcon,
		alt: "Development icon",
		title: "#OpenToWork",
		text: "I offer my expertise to clients and businesses seeking pixel-perfect webpage creation from design prototypes. I focus on developing responsive, user-friendly interfaces for diverse audiences. From landing pages to complex web app interfaces, I guarantee impeccable delivery and a seamless user experience, ensuring every project meets high standards.",
	},
];

const Services = () => {
	return (
		<section className="service mb-8">
			<h2 className="h3 service-title mb-5">What I&apos;m Doing</h2>
			<ul className="service-list grid grid-cols-1 gap-6 xl:grid-cols-2">
				{info.map((item, index) => (
					<li
						key={index}
						className="service-item relative bg-gradient-onyx p-5 rounded-[14px] shadow-2 z-[1] before:absolute inset-[1px] before:bg-gradient-jet before:rounded-inherit before:z-[1] md:flex"
					>
						<div className="service-icon-box mb-3 w-full md:max-w-[60px]">
							<Image
								src={item.img}
								alt={item.alt}
								className="m-auto md:m-0"
								width={30}
							/>
						</div>
						<div className="service-content-box text-center md:text-start">
							<p className="h4 service-item-title mb-2 lg:text-fs-2">
								{item.title}
							</p>
							<p className="service-item-text text-light-gray text-fs-5 lg:text-fs-4 font-fw-300">
								{item.text}
							</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Services;
