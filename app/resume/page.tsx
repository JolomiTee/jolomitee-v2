import React from "react";
import { schoolInfo, toolsInfo } from "@/lib/data";
import { BookMarkedIcon, Workflow } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { getAllExperience } from "@/lib/queries";
import { Experience } from "@/types";
import ListItem from "@/components/resume/ListItem";

const Page = async () => {
	const experiences = await client.fetch<Experience[]>(getAllExperience);
	return (
		<>
			<header>
				<h2 className="h2 main-title mb-8">My Timeline</h2>
			</header>

			<section className="timeline mb-8">
				<div className="title-wrapper flex items-center gap-4 mb-6">
					<div className="icon-box w-[40px] h-[40px] p-[10px]">
						<BookMarkedIcon />
					</div>
					<h3 className="h3">Formal Education</h3>
				</div>

				<ul className="timeline-list text-fs-6 ml-11">
					{schoolInfo.map((items, index) => (
						<li key={index} className="timeline-item relative">
							<h4 className="h4 timelime-item-title text-fs-6 lg:text-fs-4 leading-[1.3] mb-2 ">
								{items.school}
							</h4>

							<span className="text-vegas-gold font-fw-400 leading-[1.6] lg:text-fs-4">
								{items.startDate} — {items.endDate}
							</span>
						</li>
					))}
				</ul>
			</section>

			<section className="timeline mb-8">
				<div className="title-wrapper flex items-center gap-4 mb-6">
					<div className="icon-box w-[40px] h-[40px] p-[10px]">
						<Workflow />
					</div>
					<h3 className="h3">Web Development Experience</h3>
				</div>

				<ul className="timeline-list text-fs-6 ml-11">
					{experiences.map((experience, index) => {
						const {
							company,
							currently_working,
							start_date,
							end_date,
							description,
							company_link,
							link_text,
						} = experience;
						return (
							<ListItem
								key={index}
								company={company}
								currently_working={currently_working}
								start_date={start_date}
								end_date={end_date}
								description={description}
								company_link={company_link}
								link_text={link_text}
							/>
						);
					})}
				</ul>
			</section>

			<section className="skill mb-8">
				<h3 className="h3 mb-3">Tools of the Trade</h3>
				<ul className="skills-list flex flex-wrap gap-5 justify-center items-center">
					{toolsInfo.map((items, index) => (
						<li key={index} className="skill-item">
							<Image src={items.link} width={50} height={50} alt={items.name} />
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default Page;
