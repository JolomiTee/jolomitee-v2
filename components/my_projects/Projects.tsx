"use client";

import AdvancedFilter from "@/components/AdvancedFilter";
import Project from "@/components/my_projects/Project";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { ProjectTypes } from "@/types";
import { InfoIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { T } from "gt-next";

interface ProjectsProps {
	projects: ProjectTypes[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
	const [search, setSearch] = useState<string>("");
	const [_projects, _setProjects] = useState<ProjectTypes[]>(projects);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value.toLowerCase();
		const filtered = projects.filter((project) =>
			project.project_name.toLowerCase().includes(searchValue),
		);
		setSearch(event.target.value);
		_setProjects(filtered);
	};

	return (
		<>
			<T id="components.my_projects.projects.0">
				<div className="relative mt-5 mb-7 xl:flex items-center justify-between gap-5 hidden">
					<Input
						id="SearchProjects"
						placeholder="Search project"
						value={search}
						className="w-1/3 bg-transparent/30 border-none text-white shadow-sm shadow-orange-yellow-crayola hover:bg-transparent/10 hover:text-white placeholder:text-white"
						onChange={handleSearch}
					/>

					<div className="flex justify-center items-center gap-2">
						<AdvancedFilter _projects={_projects} _setProjects={_setProjects} />

						<HoverCard>
							<HoverCardTrigger>
								<InfoIcon className="text-orange-yellow-crayola w-5 h-5" />
							</HoverCardTrigger>
							<HoverCardContent className="text-sm bg-smoky-black/70 backdrop-blur-sm shadow-2 text-white">
								Tags are keywords associated with each project
							</HoverCardContent>
						</HoverCard>
					</div>
				</div>
			</T>

			<section className="projects">
				<ul className="project-list flex justify-center flex-wrap gap-8 mb-3">
					{_projects.map((project, index) => {
						const { slug, project_link, project_name, image, tags } = project;
						return (
							<li key={index} className="project-item block">
								<Project
									slug={slug}
									project_link={project_link}
									project_name={project_name}
									image={image}
									tags={tags}
								/>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
};

export default Projects;
