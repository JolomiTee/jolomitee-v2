import { defineField, defineType } from "sanity";

export default defineType({
	name: "projects",
	title: "My Projects",
	type: "document",
	fields: [
		defineField({
			name: "project_name",
			title: "Project Name",
			type: "string",
			validation: (rule) => rule.required().error(`Required field`),
		}),
		defineField({
			name: "category",
			title: "Project Category (Frontend || Backend)?",
			type: "string",
			options: {
				list: [
					{ title: "Frontend", value: "frontend" },
					{ title: "Backend", value: "backend" },
				],
				layout: "dropdown",
			},
			validation: (rule) => rule.required().error(`Required field`),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "project_name",
				maxLength: 96,
			},
			validation: (rule) => rule.required().error(`Required field`),
		}),
		defineField({
			name: "image",
			title: "Project Image",
			type: "image",
			validation: (rule) => rule.required().error(`Required field`),
		}),
		defineField({
			name: "project_link",
			title: "Deployment link",
			type: "url",
		}),
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "tags" }],
				},
			],
		},
	],
});
