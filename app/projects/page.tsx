"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const tags = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
];

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
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

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

			<div className="mt-5 mb-7 flex items-center justify-between gap-5">
				<Input
					placeholder="Search project"
					value={search}
					className="w-1/3 bg-transparent text-white"
					onChange={(e) => handleSearch(e)}
				/>

				<div className="hidden xl:flex items-center gap-5">
					<div className="flex items-center space-x-2">
						<Switch id="more-filters" />
						<Label htmlFor="more-filters" className="text-light-gray">
							More filters
						</Label>
					</div>

					<div className="flex justify-between gap-5 items-center">
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									role="combobox"
									aria-expanded={open}
									className="w-[150px] justify-between"
								>
									{value
										? tags.find((tags) => tags.value === value)?.label
										: "Select Tag..."}
									<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-[150px] p-0">
								<Command>
									<CommandInput placeholder="Search Tags..." />
									<CommandList>
										<CommandEmpty>No tag found.</CommandEmpty>
										<CommandGroup>
											{tags.map((tags) => (
												<CommandItem
													key={tags.value}
													value={tags.value}
													onSelect={(currentValue) => {
														setValue(
															currentValue === value ? "" : currentValue
														);
														setOpen(false);
													}}
												>
													<Check
														className={cn(
															"mr-2 h-4 w-4",
															value === tags.value ? "opacity-100" : "opacity-0"
														)}
													/>
													{tags.label}
												</CommandItem>
											))}
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>

						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Category" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="system">All</SelectItem>
								<SelectItem value="light">Frontend</SelectItem>
								<SelectItem value="dark">Backend</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
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
