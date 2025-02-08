export interface Experience {
	company: string;
	currently_working: boolean;
	start_date: string;
	end_date: string;
	description: string;
	company_link: string;
	link_text: string;
}
[];

export interface ProjectTypes {
	slug: string;
	project_link: string;
	tags: {
		value: string;
		label: string;
	}[];
	project_name: string;
	image: string;
}

export interface Tag {
	value: string;
	label: string;
}
[];
