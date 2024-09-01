/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "img.icons8.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "codekitapp.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "vanseodesign.com",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
