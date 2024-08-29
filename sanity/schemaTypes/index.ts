import { type SchemaTypeDefinition } from 'sanity'
import frontend_experience from "../schemas/frontend_experience";
import backend_experience from "../schemas/backend_experience";
import projects from "../schemas/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [frontend_experience, backend_experience, projects],
};
