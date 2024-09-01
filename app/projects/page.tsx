// components/Page.tsx (Server Component)
import { Metadata } from "next";
import { getProjects } from "../actions";
import Projects from "./Projects";

export const metadata: Metadata = {
	title: "Projects",
};

const Page = async () => {
	const projects = await getProjects(); // Fetch projects server-side

	return <Projects projects={projects} />;
};

export default Page;
