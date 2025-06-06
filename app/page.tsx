import MyClients from "@/components/about/MyClients";
import Services from "@/components/about/Services";
import { T } from "gt-next";

export default function Home() {
	return (
		<>
			<T id="page.0">
				<header>
					<h1 className="h2 main-title">
						About Me <span className="sr-only">Jolomi Taiwo</span>
					</h1>
				</header>
			</T>

			<T id="page.1">
				<section className="text-light-gray text-fs-5 font-fw-300 leading-[1.6] mb-4 md:mb-6 lg:text-fs-4">
					<p className="">
						I am a Frontend Engineer with hands on experience in creating
						functional, responsive, and visually appealing websites using modern
						frontend development tools. My expertise lies in the art of
						transforming design concepts into interactive and high-quality
						websites, focusing on delivering seamless user experiences.
					</p>
					<p>
						I am also expanding my skill set by learning backend development to
						better understand and contribute to full-stack projects. My passion
						for coding drives me to continuously improve and refine my skills,
						ensuring I deliver exceptional digital solutions.
					</p>
				</section>
			</T>

			<Services />

			<MyClients />
		</>
	);
}
