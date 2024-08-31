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
			validation: (Rule) =>
				Rule.required()
					.min(1)
					.max(20)
					.error("Title is required and must be between 1 and 20 characters."),
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
