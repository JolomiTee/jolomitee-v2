import React from "react";
import { Badge } from "../ui/badge";

interface Props {
	category: {
		value: string;
		label: string;
	}[];
}

const Tags = ({ category }: Props) => {
	return (
		<div className="ml-3 flex flex-wrap gap-2 text-fs-5">
			{category.map((tag, index) => (
				<Badge
					variant="outline"
					key={index}
					className="text-vegas-gold border border-white-2 px-3 rounded-xl text-pretty capitalize"
				>
					{tag.label}
				</Badge>
			))}
		</div>
	);
};

export default Tags;
