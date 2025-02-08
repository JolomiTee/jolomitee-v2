import Tags from '@/components/my_projects/Tags';
import { ExternalLink } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react'

const page = () => {
	const tags = [
		{
			value: "html",
			label: "HTML"
		},
		{
			value: "css",
			label: "CSS"
		},
		{
			value: "javasscript",
			label: "JS"
		},
		{
			value: "react",
			label: "React"
		},
		{
			value: "typescript",
			label: "Typescript"
		}
	]
  return (
		<>
			<header>
				<h1 className="h2 main-title vt_main_title">Project Title</h1>
			</header>

			<div className="flex flex-col md:flex-row gap-[30px]">
				<div className="rounded-xl overflow-hidden">
					<Image
						src={"/RagChat.png"}
						width={1000}
						height={1000}
						alt="Picture"
					/>
				</div>

				<div className="flex flex-col gap-[10px] min-w-[40%]">
					<div>
						<span className="font-bold text-[15px]">Deployment</span>
						<Link
							className="flex items-center gap-2 underline text-white font-medium text-sm font-mono"
							href={"#"}
						>
							http://blahblahblah.com <ExternalLink className="size-4" />
						</Link>
					</div>
					<div>
						<span className="font-bold text-[15px]">Github</span>
						<Link
							className="flex items-center gap-2 underline text-white font-medium text-sm font-mono"
							href={"#"}
						>
							View repo
							<ExternalLink className="size-4" />
						</Link>
					</div>
					<div>
						<span className="font-bold text-[15px]">Status</span>
						<div className="flex items-center gap-2 text-white font-medium text-sm font-mono">
							Active
						</div>
					</div>
				</div>
			</div>

			<div className="mt-10 flex gap-[15px]">
				<div>
					<span className="font-bold text-[15px]">Details</span>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
						deleniti iusto, libero nobis, autem unde mollitia architecto
						facere magni aut eius qui aspernatur voluptatum itaque illum
						animi aliquid similique! Corrupti!
					</p>
				</div>

				<div className=" min-w-[30%]">
					<span className="font-bold text-sm ps-3 mb-2">Tags</span>
					<Tags category={tags} />
				</div>
			</div>
		</>
  );
}

export default page