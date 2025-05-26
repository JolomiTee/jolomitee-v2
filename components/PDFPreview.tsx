"use client"

import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function PDFPreview() {
	const fileUrl = "/files/Jolomi Taiwo Emmanuel - Resume 2025.pdf";
	const imageUrl = "/files/resume-preview.jpeg";

	return (
		<Card className="w-fit p-2 space-y-3 mx-auto grid">
			<div className="rounded-lg overflow-hidden w-[300px]">
				<Image
					src={imageUrl}
					alt="Preview"
					width={300}
					height={300}
					className="object-cover w-[300px] h-[300px"
				/>
			</div>
			<Link
				target="_blank"
				href={fileUrl}
				download
				className="mx-auto border-orange-yellow-crayola border rounded-lg group "
			>
				<Button className="gap-x-3 font-bold text-orange-yellow-crayola bg-transparent hover:text-white hover:bg-onyx">
					<DownloadIcon className="size-[16px] group-hover:animate-bounce transition-2 " />
					Download My Resume
				</Button>
			</Link>
		</Card>
	);
 }

