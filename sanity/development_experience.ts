import { defineField, defineType } from "sanity";

export default defineType({
	name: "development_experience",
	title: "Web Development Experience",
	type: "document",
	fields: [
		defineField({
			name: "company",
			title: "Company",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "start_date",
			title: "Start date",
			type: "date",
		}),
		defineField({
			name: "end_date",
			title: "End date",
			type: "date",
		}),
		defineField({
			name: "currently_working",
			title: "Currently working?",
			type: "boolean",
		}),
		defineField({
			name: "description",
			title: "Job Description",
			type: "string",
		}),
		defineField({
			name: "company_link",
			title: "Company link",
			type: "string",
		}),
	],
});
