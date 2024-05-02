import { Metadata } from "next";

const author: string = "Federico Zappone";
const description: string = "Software engineer with a Master's Degree in Software Systems Security and co-founder of Just Another S.R.L. and BB-SMILE S.R.L.";
const url: string = "https://zappaboy.github.io";

export const AppMetadata: Metadata = {
	metadataBase: new URL("https://zappaboy.github.io"),
	title: {
		default: `ZappaBoy | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.ico"
	},
	keywords: [
		"Federico Zappone",
		"Federico Zappone - Software Developer",
		"Just Another",
		"Just Another S.R.L."
	],
	creator: author,
	authors: [{ name: author, url: url }],
	openGraph: {
		title: `${author} | ZappaBoy`,
		description: description,
		url: url,
		siteName: `${author} | ZappaBoy`,
		images: [
			{
				url: "https://zappaboy.github.io/screenshot.webp",
				width: 800,
				height: 600,
				alt: "Federico Zappone website"
			},
			{
				url: "https://zappaboy.github.io/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "Federico Zappone website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
