"use client";

import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import AdvancedFilter from "@/components/AdvancedFilter";
import Tags from "@/components/my_projects/Tags";
import { StaticImageData } from "next/image";
import Project from "@/components/my_projects/Project";

interface ProjectProps {
	name: string;
	link: string;
	img: StaticImageData;
	category: string;
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

			<div className="mt-5 mb-7 flex items-center justify-between gap-5">
				<Input
					placeholder="Search project"
					value={search}
					className="w-1/3 bg-transparent text-white"
					onChange={handleSearch}
				/>

				<div className="hidden xl:flex items-center gap-5">
					<div className="flex items-center space-x-2">
						<Switch id="more-filters" />
						<Label htmlFor="more-filters" className="text-light-gray text-sm">
							More filters
						</Label>
					</div>

					<AdvancedFilter _projects={_projects} _setProjects={_setProjects} />
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
