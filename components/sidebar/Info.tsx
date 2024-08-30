import { Cake, Globe, LucideMail, PhoneCall } from "lucide-react";

const info = {
	items: [
		{
			icon: <LucideMail />,
			contact_title: "Email",
			attr: "mailto:jolomitee@gmail.com",
			value: "jolomitee@gmail.com",
		},
		{
			icon: <PhoneCall />,
			contact_title: "Phone",
			attr: "tel:+123 456 7890",
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
						<div className="icon-box">{items.icon}</div>
						<div className="contact-info text-start">
							<p className="contact-title text-light-gray-70 text-fs-8 uppercase mb-[2px]">
								{items.contact_title}
							</p>
							{items.element === "time" ? (
								<time dateTime={items.datetime}>{items.value}</time>
							) : items.element === "address" ? (
								<address>{items.value}</address>
							) : (
								<a href={items.attr} className="contact-link">
									{items.value}
								</a>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Info;
