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

const tags = [
	{
		value: "react",
		label: "React",
	},
	{
		value: "stripe",
		label: "stripe",
	},
	{
		value: "zustand",
		label: "Zustand",
	},
	{
		value: "shadcn",
		label: "Shadcn",
	},
	{
		value: "tailwindcss",
		label: "Tailwindcss",
	},
];

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

	const handleComboSearch = (value: string) => {
		const searchValue = value.toLowerCase();
		const filtered = originalProjects.filter((project) => {
			const tagsArray = project.category
				.split(", ")
				.map((tag) => tag.toLowerCase());
			return tagsArray.some((tag) => tag.includes(searchValue));
		});
		_setProjects(filtered);
	};

	return (
		<div className="flex justify-between gap-5 items-center">
			<Popover open={openCombobox} onOpenChange={setOpenCombobox}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={openCombobox}
						className="w-[150px] justify-between"
					>
						{value
							? _projects.find((tags) => tags.value === value)?.label
							: "Select tag"}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[150px] p-0">
					<Command>
						<CommandInput placeholder="Search tag" />
						<CommandList>
							<CommandEmpty>No tag found.</CommandEmpty>
							<CommandGroup>
								{tags.map((tags) => (
									<CommandItem
										key={tags.value}
										value={tags.value}
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
		</div>
	);
};

export default AdvancedFilter;
