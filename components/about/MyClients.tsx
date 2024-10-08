import Williams from "@/public/orgs/Williams.jpeg";
import Zepama from "@/public/orgs/Zepama.jpg";
import Adesther from "@/public/orgs/adesther.jpg";
import Image from "next/image";
import Link from "next/link";

const info = [
	{
		link: "https://williamssynergy.com/about.html",
		name: "Williams Synergies Inc.",
		img: Williams,
	},
	{
		link: "https://www.adesther.com.ng",
		name: "Adesther Global Web Services",
		img: Adesther,
	},
	{
		link: "https://zepama.com",
		name: "Zepama",
		img: Zepama,
	},
];

const MyClients = () => {
	return (
		<section className="clients mb-4">
			<h3 className="h3 clients-title flex gap-1">
				I <span className="lowercase">have worked as a developer for</span>
			</h3>
			{/* overflow-x-auto scroll-smooth overscroll-contain snap-mandatory scroll-p-6 md:gap-10 md:my-0 md:mx-[-30px] md:p-11 md:scroll-ps-[45x] */}

			<ul className="client-list has-scrollbar flex justify-center items-start gap-8 my-0 mx-[-15px] p-6 flex-wrap md:my-0 md:mx-[-30px] md:p-11">
				{info.map((items, index) => (
					<li key={index} className="client-items min-h-[50%] snap-start">
						<Link
							href={items.link}
							className="grid justify-center items-center gap-3 text-center w-[100px]"
							target="_blank"
							title={items.name}
							rel="noopener"
						>
							<Image
								src={items.img}
								alt={`${items.name} logo`}
								className="rounded-[15px] w-[100px] mx-auto"
								width={100}
							/>
							<p className="text-[#fff] text-fs-5">{items.name}</p>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default MyClients;
