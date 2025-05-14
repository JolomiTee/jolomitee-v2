import ListItem from "@/components/resume/ListItem";
import { schoolInfo, toolsInfo } from "@/lib/data";
import { getAllExperience } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { Experience } from "@/types";
import { BookMarkedIcon, Workflow } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { T, Var, DateTime } from "gt-next";

export const metadata: Metadata = {
	title: "Resume",
};
const Page = async () => {
	const experiences = await client.fetch<Experience[]>(getAllExperience);
	return (
		<>
			<T id="resume.page.0">
				<header>
					<h1 className="h2 main-title mb-8">My Timeline</h1>
				</header>
			</T>

			<T id="resume.page.1">
				<section className="timeline mb-8">
					<div className="title-wrapper flex items-center gap-4 mb-6">
						<div className="icon-box w-[40px] h-[40px] p-[10px]">
							<BookMarkedIcon />
						</div>
						<h2 className="h3">Formal Education</h2>
					</div>

					<ul className="timeline-list text-fs-6 ml-11">
						<Var>
							{schoolInfo.map((items, index) => (
								<li key={index} className="timeline-item relative">
									<p className="h4 timelime-item-title text-fs-6 lg:text-fs-4 leading-[1.3] mb-2 ">
										{items.school}
									</p>

									<span className="text-vegas-gold font-fw-400 leading-[1.6] lg:text-fs-4 capitalize">
										<T>{items.startDate}</T> — <T>{items.endDate}</T>
									</span>
								</li>
							))}
						</Var>
					</ul>
				</section>
			</T>

			<T id="resume.page.2">
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
			</T>

			<T id="resume.page.3">
				<section className="skill mb-8">
					<h4 className="h3 mb-3">Technologies and Languages used</h4>
					<ul className="skills-list flex flex-wrap gap-5 justify-center items-center">
						<Var>
							{toolsInfo.map((items, index) => (
								<li key={index} className="skill-item">
									<Image
										src={items.link}
										width={50}
										height={50}
										alt={items.name}
									/>
								</li>
							))}
						</Var>
					</ul>
				</section>
			</T>
		</>
	);
};

export default Page;
