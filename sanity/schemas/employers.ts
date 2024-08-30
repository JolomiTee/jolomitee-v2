import { defineField, defineType } from "sanity";

export default defineType({
	name: "employers",
	title: "Past Employers",
	type: "document",
	fields: [
		defineField({
			name: "company",
			title: "Company",
			type: "string",
			validation: (rule) => rule.required().error(`Required field`),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "company",
				maxLength: 96,
			},
			validation: (rule) => rule.required().error(`Required field`),
		}),
		defineField({
			name: "company_image",
			title: "Company Image",
			type: "image",
			validation: (rule) => rule.required().error(`Required field`),
		}),
		defineField({
			name: "company_link",
			title: "Company link",
			type: "url",
		}),
	],
});
