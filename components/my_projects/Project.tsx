import { Eye } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { urlFor } from "@/sanity/lib/image";
import { Link } from "next-view-transitions";
interface ProjectTypesProps {
	slug: string;
	project_link: string;
	category: string;
	project_name: string;
	image: string;
}
[];

const Project = ({
	slug,
	project_link,
	project_name,
	image,
}: ProjectTypesProps) => {
	return (
		<Link
			// href={`/${slug}`}
			id={slug}
			className="w-full"
			target="_blank"
			aria-label={`Project name: ${project_name}`}
			href={project_link ? project_link : ""}
		>
			<figure className="project-img relative  aspect-video rounded-2xl overflow-hidden mb-4 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-opacity-0 z-[1] transition-1">
				{project_link !== undefined &&
				project_link !== null &&
				project_link !== "" ? (
					<div className="project-item-icon-box scale-.75">
						<Eye />
					</div>
				) : (
					<Badge
						variant={"secondary"}
						className="absolute top-2 right-2 z-10"
					>
						Awaiting deployment
					</Badge>
				)}

				<Image
					src={urlFor(image).url()}
					alt={project_name}
					loading="lazy"
					fill
					className="w-full h-full object-cover lg:object-fill transition-1"
				/>
			</figure>

			<h3
				id="vt_main_title"
				className="project-title ml-3 mb-2 text-white-1 text-fs-4 font-fw-400 capitalize leading-[1.3]"
			>
				<span className="sr-only">Project name</span>
				<span className="vt_main_title">{project_name}</span>
			</h3>
		</Link>
	);
};

export default Project;
