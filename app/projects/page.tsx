import Projects from "@/components/my_projects/Projects";
import { T } from "gt-next";
import { Metadata } from "next";
import { getProjects } from "../actions";

export const metadata: Metadata = {
	title: "Projects",
};

const Page = async () => {
	const projects = await getProjects(); // Fetch projects server-side

	return (
		<>
			<T id="projects.page.0">
				<header>
					<h1 className="h2 main-title mb-6">My Projects</h1>
				</header>
			</T>
			<Projects projects={projects} />
		</>
	);
};

export default Page;
