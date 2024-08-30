import DesignIcon from "@/public/icons/icon-design.svg";
import IconDev from "@/public/icons/icon-dev.svg";
import Image from "next/image";

const info = [
	{
		img: IconDev,
		alt: "Design icon",
		title: "Web Design and Development",
		text: "I bring a wealth of hands-on expertise in frontend web development, specializing in crafting dynamic, standards-compliant websites. With a strong proficiency in modern technologies, I focus on developing functional and visually appealing user interfaces. My ability to seamlessly integrate into development teams ensures the efficient delivery of high-quality web products. Additionally, I am currently expanding my knowledge into backend development, enhancing my ability to contribute to full-stack projects.",
	},
	{
		img: DesignIcon,
		alt: "Development icon",
		title: "#OpenToWork",
		text: "I confidently offer my expertise to clients and businesses seeking pixel-perfect webpage creation from design prototypes. My focus is on developing highly responsive and user-friendly interfaces that are accessible to a diverse audience. Whether it's crafting a landing page or building a complex web application interface, I guarantee impeccable delivery and a seamless user experience. With a commitment to excellence and attention to detail, I ensure that every project meets set standards.",
	},
];

const Services = () => {
	return (
		<section className="service mb-8">
			<h3 className="h3 service-title mb-5">What I'm Doing</h3>
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
							<h4 className="h4 service-item-title mb-2 lg:text-fs-2">
								{item.title}
							</h4>
							<p className="service-item-text text-light-gray text-fs-5 lg:text-fs-4 font-fw-300 leading-[1.6]">
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
