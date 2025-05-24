import { Cake, Globe, LucideMail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { T } from "gt-next";
const info = {
	items: [
		{
			icon: <LucideMail />,
			contact_title: "Email",
			title: "Send me a mail",
			attr: "mailto:jolomitee@gmail.com",
			value: "jolomitee@gmail.com",
		},
		{
			icon: <PhoneCall />,
			contact_title: "Phone",
			title: "Call me",
			attr: "tel:+2349061603717",
			value: "+234 906 160 3717",
		},
		{
			icon: <Cake />,
			contact_title: "Birthday",
			element: "time",
			datetime: "2002-03-04",
			value: "March 4th",
		},
		{
			icon: <Globe />,
			contact_title: "Location",
			element: "address",
			value: "Abuja, Nigeria",
		},
	],
};

const Info = () => {
	return (
		<div>
			<ul className="contact-list grid columns-1 gap-[16px] 2xl:grid 2xl:grid-cols-1">
				{info.items.map((items, index) => (
					<li
						key={index}
						className="contact-item min-h-full flex items-center gap-4"
					>
						<div className="icon-box w-[40px] h-[40px] p-[10px]">
							{items.icon}
						</div>
						<div className="contact-info text-start">
							<T id="contact-info.title">
								<p className="contact-title text-light-gray-70 text-fs-7 uppercase mb-[2px]">
									{items.contact_title}
								</p>
							</T>
							{items.element === "time" ? (
								<time dateTime={items.datetime}>{items.value}</time>
							) : items.element === "address" ? (
								<address>{items.value}</address>
							) : (
								items.attr && (
									<Link
										title={items.title}
										href={items.attr}
										target="_blank"
										className="contact-link"
									>
										{items.value}
									</Link>
								)
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Info;
