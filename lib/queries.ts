import { groq } from "next-sanity";

export const getAllExperience = groq`*[_type == 'frontend_experience']
  | order(start_date desc) {
   company,
   currently_working,
   start_date,
   end_date,
   "description": description[].children[].text,
   company_link,
   link_text
}`;

export const getProjectTags = groq`*[_type == 'tags'] | order(label asc) {
  "value": value.current,
  label
}`;

export const getAllProjects = groq`*[_type == 'projects'] | order(_createdAt desc) {
  project_link,
  category,
  project_name,
  "image": image.asset._ref,
  "slug": slug.current,
  "tags": tags[]->{
    "value": value.current,
    label
  }
}`;
