export interface Experience {
	company: string;
	currently_working: boolean;
	start_date: string;
	end_date: string;
	description: string;
	company_link: string;
}
[];

export interface Project {
	_id: string;
	project_link: string;
	category: string;
	project_name: string;
	image: string;
	slug: string;
	tags: Tag[];
}
[];

export interface Tag {
	value: string;
	label: string;
}
[];
