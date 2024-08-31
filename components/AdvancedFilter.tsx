import { Check, ChevronsUpDown } from "lucide-react";

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
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import React, { useState } from "react";

interface Tag {
	value: string;
	label: string;
}

interface Project {
	name: string;
	link: string;
	img: StaticImageData;
	category: {
		value: string;
		label: string;
	}[];
	responsive: boolean;
}

interface Props {
	_projects: Project[];
	_setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const AdvancedFilter = ({ _projects, _setProjects }: Props) => {
	const [openCombobox, setOpenCombobox] = useState(false);
	const [value, setValue] = useState("");

	const [originalProjects] = useState(_projects); // Store the original list

	const handleComboSearch = (selectedTag: string) => {
		const searchValue = selectedTag.toLowerCase();
		const filtered = originalProjects.filter((project) => {
			// Check if any of the tags in the project match the search value
			return project.category.some((tag) =>
				tag.value.toLowerCase().includes(searchValue)
			);
		});
		_setProjects(filtered);
	};

	const extractUniqueTags = (projects: Project[]): Tag[] => {
		// Flatten the categories from all projects
		const allTags = projects.flatMap((project) => project.category);

		// Use a Set to filter out duplicates
		const uniqueTags = Array.from(new Set(allTags.map((tag) => tag.value))).map(
			(value) => allTags.find((tag) => tag.value === value)!
		);

		return uniqueTags;
	};

	const uniqueTags = extractUniqueTags(originalProjects);

	return (
		<div className="flex justify-between gap-5 items-center">
			<Popover open={openCombobox} onOpenChange={setOpenCombobox}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={openCombobox}
						className="w-[200px] justify-between"
					>
						{value
							? _projects
									.flatMap((project) => project.category)
									.find((tag) => tag.value === value)?.label || "Tag not found"
							: "Select tag"}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0">
					<Command>
						<CommandInput placeholder="Search tag" />
						<CommandList>
							<CommandEmpty>No tag found.</CommandEmpty>
							<CommandGroup>
								{uniqueTags.map((tag: Tag) => (
									<CommandItem
										key={tag.value}
										value={tag.value}
										onSelect={(currentValue) => {
											const newValue =
												currentValue === value ? "" : currentValue;
											setValue(newValue);
											setOpenCombobox(false);
											setTimeout(() => handleComboSearch(newValue), 0); // Invoke the search function
										}}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												value === tag.value ? "opacity-100" : "opacity-0"
											)}
										/>
										{tag.label}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default AdvancedFilter;
