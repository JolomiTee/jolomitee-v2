import { urlFor } from "@/sanity/lib/image";
import { ProjectTypes } from "@/types";
import { Eye } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Tags from "./Tags";
import { T, Var } from "gt-next";

const Project = ({
	slug,
	project_link,
	project_name,
	image,
	tags,
}: ProjectTypes) => {
	// const setProject = useProjectStore((state) => state.setProject);
	return (
		<>
			<Link
				href={`${project_link}`}
				// onClick={() =>
				// 	setProject({ slug, project_link, project_name, image, tags })
				// }
				id={slug}
				className="w-full"
				target="_blank"
				aria-label={`Project name: ${project_name}`}
				// href={project_link ? project_link : ""}
			>
				<figure className="project-img relative  aspect-video rounded-2xl overflow-hidden mb-4 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-opacity-0 z-[1] transition-1">
					{project_link !== undefined &&
					project_link !== null &&
					project_link !== "" ? (
						<div className="project-item-icon-box scale-.75">
							<Eye />
						</div>
					) : (
						<T id="components.my_projects.project.0">
							<Badge
								variant={"secondary"}
								className="absolute top-2 right-2 z-10"
							>
								Awaiting deployment
							</Badge>
						</T>
					)}

					<Image
						src={urlFor(image).url()}
						alt={project_name}
						loading="lazy"
						fill
						className="w-full h-full object-cover lg:object-fill transition-1"
					/>
				</figure>
			</Link>
			<T id="components.my_projects.project.1">
				<Link
					href={`${project_link}`}
					id={`${slug}_vt_main_title`}
					className="project-title ml-3 mb-2 text-white-1 text-fs-4 font-fw-400 capitalize leading-[1.3]"
				>
					{/* <Link href={project_link}> */}
					<span className="sr-only">Project name</span>
					<span className={`${slug}_vt_main_title`}>
						<Var>{project_name}</Var>
					</span>
					{/* </Link> */}
				</Link>
			</T>
			<Tags tags={tags} />
		</>
	);
};

export default Project;
