import { defineField, defineType } from "sanity";

export default defineType({
	name: "frontend_experience",
	title: "Frontend Development Experience",
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
			name: "start_date",
			title: "Start date",
			type: "date",
			validation: (rule) => rule.required().error(`Required field`),
		}),
		defineField({
			name: "currently_working",
			title: "Currently working?",
			type: "boolean",
		}),
		defineField({
			name: "end_date",
			title: "End date",
			type: "date",
			readOnly: ({ document }) => document?.currently_working === true, // Disable if currently working
			validation: (rule) =>
				rule.custom((endDate, context) => {
					const currentlyWorking = context.document?.currently_working;
					if (currentlyWorking && endDate) {
						return "End date should be empty if currently working";
					}
					return true;
				}),
		}),
		defineField({
			name: "description",
			title: "Job Description",
			type: "array",
			of: [{ type: "block" }],
			validation: (rule) => rule.required().error(`Required field`),
		}),
		defineField({
			name: "company_link",
			title: "Company link",
			type: "url",
		}),
	],
});
