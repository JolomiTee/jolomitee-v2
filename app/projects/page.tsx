import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function splitStr(str: string, separator: string) {
	const categoryArray = str.split(separator);
	return categoryArray.map((item, index) => (
		<Badge
			variant={"outline"}
			key={index}
			className="text-vegas-gold border border-white-2 px-3 rounded-xl text-pretty capitalize"
		>
			{item}
		</Badge>
	));
}

let comma = ",";
const projectList = projects.reverse();

const Page = () => {
	return (
		<>
			<header>
				<h2 className="h2 main-title mb-6">My Projects</h2>
			</header>

			<section className="projects">
				<ul className="project-list flex justify-center flex-wrap gap-8 mb-3">
					{projectList.map((project, index) => (
						<li key={index} className="project-item block">
							<Link className="w-full" target="_blank" href={project.link}>
								<figure className="project-img relative  aspect-video rounded-2xl overflow-hidden mb-4 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-opacity-0 z-[1] transition-1">
									{project.link !== "" ? (
										<div className="project-item-icon-box scale-.75">
											<Eye />
										</div>
									) : (
										<Badge
											variant={"destructive"}
											className="absolute top-2 right-2 "
										>
											Awaiting deployment
										</Badge>
									)}

									<Image
										src={project.img}
										alt={project.name}
										loading="lazy"
										className="w-full h-full object-cover lg:object-fill transition-1"
									/>
								</figure>

								<h3 className="project-title ml-3 mb-2 text-white-1 text-fs-4 font-fw-400 capitalize leading-[1.3]">
									{project.name}
								</h3>
							</Link>
							<div className="ml-3 flex flex-wrap gap-2 text-fs-5">
								{splitStr(project.category, comma)}
							</div>
							<Separator className="my-5" />
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default Page;
