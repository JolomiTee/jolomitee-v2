import Image from "next/image";
import { T } from "gt-next";

const Credits = () => {
	return (
		<T id="components.credits.0">
			<div className="hidden xl:flex xl:gap-3 items-center justify-end">
				Powered by:
				<div className="flex justify-center items-center gap-5 flex-wrap">
					<Image width={60} height={30} src="/nextjs.svg" alt="nextjs" />
					<Image
						width={70}
						height={30}
						src="/sanity.svg"
						alt="sanity.io"
					/>
					<Image width={70} height={30} src="/vercel.svg" alt="Vercel" />
					<Image
						width={30}
						height={30}
						src="/shadcn.png"
						alt="Shadcn-ui"
					/>
					<Image width={30} height={30} src="/tailwind.svg" alt="nextjs" />
					<Image
						width={35}
						height={35}
						src="/general-translation.svg"
						alt="general translation"
					/>
				</div>
			</div>
		</T>
	);
};

export default Credits;
