"use client";

import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

import AdvancedFilter from "@/components/AdvancedFilter";
import Tags from "@/components/my_projects/Tags";
import { StaticImageData } from "next/image";
import Project from "@/components/my_projects/Project";
import { InfoIcon } from "lucide-react";

interface ProjectProps {
	name: string;
	link: string;
	img: StaticImageData;
	category: {
		value: string;
		label: string;
	}[];
	responsive: boolean;
	// id: string;
}

const Page = () => {
	const [search, setSearch] = useState<string>("");
	const [_projects, _setProjects] = useState<ProjectProps[]>(projects);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
		const searchValue = event.target.value.toLowerCase();
		const filtered = projects.filter((project) =>
			project.name.toLowerCase().includes(searchValue)
		);
		_setProjects(filtered);
	};

	return (
		<>
			<header>
				<h2 className="h2 main-title mb-6">My Projects</h2>
			</header>

			<div className="relative mt-5 mb-7 xl:flex items-center justify-between gap-5 hidden">
				<Input
					placeholder="Search project"
					value={search}
					className="w-1/3 bg-transparent text-white"
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

			<section className="projects">
				<ul className="project-list flex justify-center flex-wrap gap-8 mb-3">
					{_projects.map((project, index) => (
						<li key={index} className="project-item block">
							<Project
								name={project.name}
								link={project.link}
								img={project.img}
								responsive={project.responsive}
							/>
							<Tags category={project.category} />
							<Separator className="my-5" />
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default Page;
