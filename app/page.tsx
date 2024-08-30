import MyClients from "@/components/about/MyClients";
import Services from "@/components/about/Services";

export default function Home() {
	return (
		<>
			<header>
				<h2 className="h2 main-title">About Me</h2>
			</header>

			<section className="text-light-gray text-fs-5 font-fw-300 leading-[1.6]">
				<p className="mb-4 md:mb-6 lg:text-fs-4">
					I am a Frontend Engineer with 2 years of experience in creating
					functional, responsive, and visually appealing websites using modern
					frontend development tools. My expertise lies in the art of
					transforming design concepts into interactive and high-quality
					websites, focusing on delivering seamless user experiences. I am also
					expanding my skill set by learning backend development to better
					understand and contribute to full-stack projects. My passion for
					coding drives me to continuously improve and refine my skills,
					ensuring I deliver exceptional digital solutions.
				</p>
			</section>

			<Services />

			<MyClients />
		</>
	);
}
