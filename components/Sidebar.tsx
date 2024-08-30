"use client";

import ProfilePhoto from "@/public/jolomi.jpg";
import { useState } from "react";
import Info from "./sidebar/Info";
import SocialList from "./sidebar/SocialList";
import Image from "next/image";
import { Stars } from "lucide-react";

const Sidebar = () => {
	const [navOpen, setNavOpen] = useState(true);
	const toggleSideBar = () => {
		setNavOpen((prev) => !prev);
	};

	return (
		<aside
			className={`
            sidebar mb-4 overflow-hidden transition-2 md:mb-[20px]  whitespace-nowrap 2xl:min-w-[25%] lg:shadow-5
            ${navOpen ? "max-h-[660px]" : "max-h-[112px]"}
            ${!navOpen && "md:max-h-[155px]"}
            ${!navOpen && "2xl:max-h-full"}`}
		>
			<div className="sidebar-info relative flex justify-start items-center gap-[15px] md:gap-[25px] 2xl:flex-col">
				<figure className="avatar-box bg-gradient-onyx rounded-2xl">
					<Image
						src={ProfilePhoto}
						alt="Jolomi Taiwo"
						title="Jolomi Taiwo"
						width="150"
						className="rounded-2xl md:w-[100px] 2xl:w-[120px] "
					/>
				</figure>
				<div className="info-content">
					<h1
						className="name text-white-2 text-fs-2 font-fw-500 text-center md:mb-3 md:text-[20px]"
						title="Jolomi Taiwo"
					>
						Jolomi Taiwo E.
					</h1>
					<div className="text-center">
						<p className="title text-white-1 bg-onyx text-fs-7 font-fw-300 w-full px-3 rounded-lg md:px-5 md:py-2">
							Frontend Web Developer <br />
						</p>
						<p className="title text-white-1 bg-onyx text-fs-7 font-fw-300 w-full px-3 rounded-lg md:px-5 md:py-2 flex items-center gap-1">
							Newbie Backend Developer{" "}
							<Stars className="text-orange-yellow-crayola w-3 h-3" />
						</p>
					</div>
				</div>

				<button
					onClick={toggleSideBar}
					type="button"
					className="info-more-btn rounded-tr-[20px] rounded-bl-2xl absolute top-[-15px] right-[-15px] text-fs-7 text-orange-yellow-crayola bg-gradient-onyx p-3 shadow-2 transition-2 z-[1] before:absolute before:inset-[1px] before:rounded-inherit before:bg-gradient-jet before:transition-1 before:z-[1] hover:bg-gradient-yellow-1 focus:bg-gradient-yellow-1 hover:before:bg-gradient-yellow-2 focus:before:bg-gradient-yellow-2 md:top-[-30px] md:right-[-30px] 2xl:hidden"
					data-sidebar-btn
				>
					<span className="hidden md:block md:text-fs-6">Show Contacts</span>
					{/* <ion-icon name={navOpen ? "chevron-up" : "chevron-down"}></ion-icon> */}
				</button>
			</div>

			<div
				className={`sidebar-info_more transition-2 2xl:opacity-100 2xl:visible ${navOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
			>
				<div className="separator md:my-6"></div>

				<Info />

				<div className="separator md:my-6"></div>

				<SocialList />
			</div>
		</aside>
	);
};

export default Sidebar;
