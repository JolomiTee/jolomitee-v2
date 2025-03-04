"use client";

import Tags from "@/components/my_projects/Tags";
import { useProjectStore } from "@/hooks/use-project";
import { urlFor } from "@/sanity/lib/image";
import { ExternalLink } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import GitHubButton from "react-github-btn";
const page = () => {
	const project = useProjectStore((state) => state.project);
	if (!project) {
		return <p>loading</p>;
	}
	console.log(project);
	const { slug, project_link, project_name, image, tags } = project;
	return (
		<>
			<header>
				<h1 className="h2 main-title vt_main_title">{project_name}</h1>
			</header>

			<div
				id={`${slug}`}
				className="flex flex-col lg:flex-row gap-[30px] min-w-[50%]"
			>
				<div className="rounded-xl overflow-hidden">
					<Image
						src={urlFor(image).url()}
						width={1000}
						height={1000}
						alt={project_name}
					/>
				</div>

				<div className="flex flex-col gap-[10px]">
					<div>
						<span className="font-bold text-[15px]">Deployment</span>
						<Link
							className="flex items-center gap-2 underline text-white font-medium text-sm font-mono"
							href={project_link}
						>
							{project_link} <ExternalLink className="size-4" />
						</Link>
					</div>
					<div>
						<span className="font-bold text-[15px] mb-2">Github</span>
						<GitHubButton
							href="https://github.com/jolomiTee/talktome"
							data-color-scheme="no-preference: light; light: light; dark: dark;"
							data-icon="octicon-star"
							data-size="large"
							aria-label="Star jolomiTee/talktome on GitHub"
						>
							Star
						</GitHubButton>
					</div>
					<div className="grid gap-[10px]">
						<div>
							<span className="font-bold text-[18px]">Details</span>
							<p className="text-base">
								Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Vero deleniti iusto, libero nobis, autem unde
								mollitia architecto facere magni aut eius qui aspernatur
								voluptatum itaque illum animi aliquid similique!
								Corrupti!
							</p>
						</div>

						<div className="">
							<span className="font-bold text-[18px] mb-2">Tags</span>
							<Tags tags={tags} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
