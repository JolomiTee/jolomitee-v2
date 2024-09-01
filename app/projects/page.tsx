// components/Page.tsx (Server Component)
import { getProjects } from "../actions";
import Projects from "./Projects";

const Page = async () => {
	const projects = await getProjects(); // Fetch projects server-side

	return <Projects projects={projects} />;
};

export default Page;
