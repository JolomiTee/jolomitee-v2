import { Experience } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ListItem = ({
	company,
	currently_working,
	start_date,
	end_date,
	description,
	company_link,
	link_text,
}: Experience) => {
	return (
		<li className="timeline-item relative">
			<h4 className="h4 timelime-item-title text-fs-6 lg:text-fs-4 leading-[1.3] mb-2">
				{company}
			</h4>

			<span className="text-vegas-gold font-fw-400 leading-[1.6] text-fs-5">
				{start_date} - {currently_working ? "Present" : end_date}
			</span>

			<p className="timeline-text text-light-gray font-fw-300 leading-[1.6] text-fs-5 lg:text-fs-4">
				{description}
				{company_link && (
					<Link
						target="_blank"
						className="flex items-center gap-1"
						href={company_link}
					>
						{link_text} <ArrowUpRight className="w-5 h-4" />
					</Link>
				)}
			</p>
		</li>
	);
};

export default ListItem;
