"use client";

import ProfilePhoto from "@/public/jolomi.jpg";
import { ChevronDown, ChevronUp, Stars } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Info from "./sidebar/Info";
import SocialList from "./sidebar/SocialList";
import { Var, T } from "gt-next";

const Sidebar = () => {
	const [navOpen, setNavOpen] = useState(true);
	const toggleSideBar = () => {
		setNavOpen((prev) => !prev);
	};

	return (
		<T id="components.sidebar.0">
			<aside
				aria-roledescription="Basic information about Jolomi Taiwo"
				role="complementary"
				className={`
            sidebar mb-4 overflow-hidden transition-2 md:mb-[20px]  whitespace-nowrap 2xl:min-w-[25%] lg:shadow-5
            ${navOpen ? "max-h-[660px]" : "max-h-[165px]"}
            ${!navOpen && "sm:max-h-[135px]"}
            ${!navOpen && "md:max-h-[155px]"}
            ${!navOpen && "xl:max-h-[95vh]"}`}
			>
				<div className="sidebar-info relative flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-[15px] md:gap-[25px] 2xl:flex-col">
					<Image
						src={ProfilePhoto}
						alt="Jolomi Taiwo"
						title="Jolomi Taiwo"
						width="150"
						className=" avatar-box bg-gradient-onyx rounded-2xl w-[100px] 2xl:w-[120px]"
					/>

					<div className="w-full sm:w-fit text-center grid gap-2">
						<p
							className="name text-white-2 text-fs-2 font-fw-500 md:text-[20px] md:text-start md:px-3 2xl:text-center"
							title="Jolomi Taiwo"
						>
							Jolomi Taiwo E.
						</p>
						<div className="grid gap-2 md:flex md:items-center md:gap-3 2xl:grid">
							<p className="title text-white-1 bg-onyx text-fs-7 lg:text-fs-6 font-fw-300 rounded-lg px-3 py-1 text-center justify-center w-fit mx-auto">
								Frontend Developer
							</p>

							<p className="title text-white-1 bg-onyx text-fs-7 lg:text-fs-6 font-fw-300 rounded-lg px-3 py-1 text-center flex items-center gap-1 justify-center w-fit mx-auto">
								Backend Enthusiast{" "}
								<Stars className="text-orange-yellow-crayola w-3 h-3" />
							</p>
						</div>
					</div>

					<button
						title="Toggle Sidebar"
						onClick={toggleSideBar}
						type="button"
						role="button"
						className="info-more-btn rounded-tr-[20px] rounded-bl-2xl absolute top-[-15px] right-[-15px] text-fs-7 text-orange-yellow-crayola bg-gradient-onyx p-2 shadow-2 transition-2 z-[1] before:absolute before:inset-[1px] before:rounded-inherit before:bg-gradient-jet before:transition-1 before:z-[1] hover:bg-gradient-yellow-1 focus:bg-gradient-yellow-1 hover:before:bg-gradient-yellow-2 focus:before:bg-gradient-yellow-2 md:top-[-30px] md:right-[-30px] xl:hidden"
					>
						<Var>{navOpen ? <ChevronUp /> : <ChevronDown />}</Var>
					</button>
				</div>

				<div
					className={`sidebar-info_more transition-2 2xl:opacity-100 2xl:visible ${navOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
				>
					<div className="separator md:my-6"></div>

					<Info />

					<div className="2xl:hidden">
						<div className="separator md:my-6"></div>
						<SocialList />
					</div>
				</div>
			</aside>
		</T>
	);
};

export default Sidebar;
