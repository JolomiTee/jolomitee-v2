// components/Page.tsx (Server Component)
import { Metadata } from "next";
import { getProjects } from "../actions";
import Projects from "./Projects";

export const metadata: Metadata = {
	title: "Projects",
};

const Page = async () => {
	const projects = await getProjects(); // Fetch projects server-side

	return (
		<>
			<header>
				<h1 className="h2 main-title mb-6">My Projects</h1>
			</header>
			<Projects projects={projects} />
		</>
	);
};

export default Page;
