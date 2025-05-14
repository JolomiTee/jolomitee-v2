import React from "react";
import { Badge } from "../ui/badge";
import { Var, T } from "gt-next";

interface Props {
	tags: {
		value: string;
		label: string;
	}[];
}

const Tags = ({ tags }: Props) => {
	return (
		<T id="components.my_projects.tags.0">
			<div className="ml-3 flex flex-wrap gap-2 text-fs-5">
				<span className="sr-only">This project has the following tags: </span>
				<Var>
					{tags.map((tag, index) => (
						<Badge
							role="complementary"
							variant="outline"
							key={index}
							className="text-vegas-gold border border-white-2 px-3 rounded-xl text-pretty capitalize"
						>
							{tag.label}
						</Badge>
					))}
				</Var>
			</div>
		</T>
	);
};

export default Tags;
