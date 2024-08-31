"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Input } from "@/components/ui/input";

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

const Page = () => {
	const [search, setSearch] = useState("");
	const [filteredProject, setFilteredProject] = useState(projects);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value); // Update the search state with the current input value
		const searchValue = event.target.value.toLowerCase(); // Convert the input value to lowercase
		const filtered = projects.filter(
			(project) => project.name.toLowerCase().includes(searchValue) // Check if the project name includes the search term
		);
		setFilteredProject(filtered.reverse()); // Update the filtered posts state with the filtered projects
	};

	return (
		<>
			<header>
				<h2 className="h2 main-title mb-6">My Projects</h2>
			</header>

			<div className="mt-5 mb-7">
				<Input
					placeholder="Search project"
					value={search}
					className="w-1/3 bg-transparent text-white"
					onChange={(e) => handleSearch(e)}
				/>
			</div>

			<section className="projects">
				<ul className="project-list flex justify-center flex-wrap gap-8 mb-3">
					{filteredProject.map((project, index) => (
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
