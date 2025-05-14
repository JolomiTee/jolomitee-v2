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
import { ProjectTypes, Tag } from "@/types";
import React, { useState } from "react";
import { T, Var } from "gt-next";

interface Props {
	_projects: ProjectTypes[];
	_setProjects: React.Dispatch<React.SetStateAction<ProjectTypes[]>>;
}

const AdvancedFilter = ({ _projects, _setProjects }: Props) => {
	const [openCombobox, setOpenCombobox] = useState(false);
	const [value, setValue] = useState("");

	const [originalProjects] = useState(_projects);

	const handleComboSearch = (selectedTag: string) => {
		const searchValue = selectedTag.toLowerCase();

		const filtered = originalProjects.filter((project) => {
			return project.tags.some((tag) =>
				tag.value.toLowerCase().includes(searchValue),
			);
		});

		_setProjects(filtered);
	};

	const extractUniqueTags = (projects: ProjectTypes[]): Tag[] => {
		const allTags = projects.flatMap((project) => project.tags);

		const uniqueTagsMap = new Map<string, Tag>();

		allTags.forEach((tag) => {
			if (!uniqueTagsMap.has(tag.value)) {
				uniqueTagsMap.set(tag.value, tag);
			}
		});

		return Array.from(uniqueTagsMap.values());
	};

	const uniqueTags = extractUniqueTags(originalProjects);

	return (
		<T id="components.advancedfilter.1">
			<div className="flex justify-between gap-5 items-center">
				<Popover open={openCombobox} onOpenChange={setOpenCombobox}>
					<PopoverTrigger asChild>
						<Button
							title="Search tags"
							variant="outline"
							role="combobox"
							aria-expanded={openCombobox}
							className="w-[200px] justify-between bg-transparent/30 text-white shadow-sm shadow-orange-yellow-crayola hover:bg-transparent/10 hover:text-white"
						>
							<Var>
								{value ? (
									uniqueTags.find((tag) => tag.value === value)?.label ||
									"Tag not found"
								) : (
									<T id="components.advancedfilter.0">{"Select tag"}</T>
								)}
							</Var>
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-0 bg-eerie-black-1">
						<Command className="bg-eerie-black-2 text-white">
							<CommandInput placeholder="Search tags" />
							<CommandList className="">
								<CommandEmpty>No tag found.</CommandEmpty>
								<CommandGroup>
									<Var>
										{uniqueTags.map((tag: Tag) => (
											<CommandItem
												className="text-white"
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
														value === tag.value ? "opacity-100" : "opacity-0",
													)}
												/>

												{tag.label}
											</CommandItem>
										))}
									</Var>
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
			</div>
		</T>
	);
};

export default AdvancedFilter;
