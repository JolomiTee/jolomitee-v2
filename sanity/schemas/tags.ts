import { defineField, defineType } from "sanity";

export default defineType({
	name: "tags",
	title: "Project Tags",
	type: "document",
	fields: [
		defineField({
			name: "label",
			title: "Tag Name",
			type: "string",
			validation: (rule) => rule.required().error(`Required field`),
		}),
		defineField({
			name: "value",
			title: "Value",
			type: "slug",
			options: {
				source: "tag",
				maxLength: 20,
			},
			validation: (rule) => rule.required().error(`Required field`),
		}),
	],
});
