import { Eye } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface Project {
	name: string;
	link: string;
	img: StaticImageData;
	responsive: boolean;
}

const Project = ({ name, link, img, responsive }: Project) => {
	return (
		<Link className="w-full" target="_blank" href={link}>
			<figure className="project-img relative  aspect-video rounded-2xl overflow-hidden mb-4 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-opacity-0 z-[1] transition-1">
				{link !== "" ? (
					<div className="project-item-icon-box scale-.75">
						<Eye />
					</div>
				) : (
					<Badge variant={"destructive"} className="absolute top-2 right-2 ">
						Awaiting deployment
					</Badge>
				)}

				<Image
					src={img}
					alt={name}
					loading="lazy"
					className="w-full h-full object-cover lg:object-fill transition-1"
				/>
			</figure>

			<h3 className="project-title ml-3 mb-2 text-white-1 text-fs-4 font-fw-400 capitalize leading-[1.3]">
				{name}
			</h3>
		</Link>
	);
};

export default Project;
