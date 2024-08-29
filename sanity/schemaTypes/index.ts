import { type SchemaTypeDefinition } from 'sanity'
import frontend_experience from "../frontend_experience";
import backend_experience from "../backend_experience";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [frontend_experience, backend_experience],
};
