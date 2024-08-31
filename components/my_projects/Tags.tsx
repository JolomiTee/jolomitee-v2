import React from "react";
import { Badge } from "../ui/badge";

const Tags = ({ category }: { category: string }) => {
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
	return (
		<div className="ml-3 flex flex-wrap gap-2 text-fs-5">
			{splitStr(category, comma)}
		</div>
	);
};

export default Tags;
