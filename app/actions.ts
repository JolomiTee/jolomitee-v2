"use server";

import { getAllProjects } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { ProjectTypes } from "@/types";

export async function getProjects(): Promise<ProjectTypes[]> {
	const projects = await client.fetch<ProjectTypes[]>(getAllProjects);
	return projects;
}
