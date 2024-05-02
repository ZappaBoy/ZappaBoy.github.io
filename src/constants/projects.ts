import { ProjectModel } from "../app/models/project.model";

export const PROJECTS: ProjectModel[] = [
	{
		id: 1,
		description: "Crawly is a customizable web crawler service to get information and monitor the changes on the pages using APIs.",
		images: ["/assets/projects/crawly/logo.jpeg"],
		liveUrl: "",
		repoUrl: "",
		stack: ["Python", "CLI"],
		title: "Crawly"
	},
	{
		id: 2,
		description: "Worky is a tool that helps to define and load project workspaces. Worky saves you from wasting time doing repetitive tasks before actually starting to work.",
		images: ["/assets/projects/worky/logo.jpeg"],
		liveUrl: "",
		repoUrl: "https://github.com/ZappaBoy/worky",
		stack: ["Python", "CLI"],
		title: "Worky"
	},
	{
		id: 3,
		description: "PYthon Video-to-Text Transcriber supports the download of audio tracks from YouTube and it is able to perform the transcription and both translation and summarization using AI models.",
		images: ["/assets/projects/pyvttt/logo.jpeg"],
		liveUrl: "",
		repoUrl: "https://github.com/ZappaBoy/pyvttt",
		stack: ["Python", "CLI", "AI", "LLM"],
		title: "Pyvttt"
	},
	{
		id: 4,
		description: "Roundtable is a tool that simulates a roundtable discussion using AI agents. It uses different Ollama LLM models for text and code to simulate the discussion between models using AutoGen.",
		images: ["/assets/projects/roundtable/logo.jpeg"],
		liveUrl: "",
		repoUrl: "",
		stack: ["Python", "CLI", "AI", "LLM"],
		title: "Roundtable"
	},
	{
		id: 5,
		description: "Crawlall is a simple crawler tool that uses Google search enginesupported features to find and collect required patterns (email, URL, IP address, etc.) related to a search query.",
		images: ["/assets/projects/crawlall/logo.jpeg"],
		liveUrl: "",
		repoUrl: "https://github.com/ZappaBoy/crawlall",
		stack: ["Python", "CLI"],
		title: "Crawlall"
	},
	{
		id: 6,
		description: "Hopper-Bacco (Oh perbacco) is a simple utility service that accepts and forwards API requests rotating both IP and User Agent to avoid bans.",
		images: ["/assets/projects/hopper-bacco/logo.jpeg"],
		liveUrl: "",
		repoUrl: "https://github.com/ZappaBoy/hopper-bacco",
		stack: ["Python", "CLI"],
		title: "Hopper-bacco"
	},
	{
		id: 7,
		description: "Fabric Starter is an automation tool to deploy a blockchain for testing purposes using Hyperledger Fabric in minutes with a single command.",
		images: ["/assets/projects/fabric-starter/logo.jpeg"],
		liveUrl: "",
		repoUrl: "",
		stack: ["Bash", "CLI", "Hyperledger", "DevOps"],
		title: "Fabric Starter"
	},
	{
		id: 8,
		description: "Hi-jacket is an automated cryptojacker that find XSS vulnerabilities and exploit them by loading a cryptojacking script with GPU support.",
		images: ["/assets/projects/hi-jacket/logo.jpeg"],
		liveUrl: "",
		repoUrl: "https://github.com/ZappaBoy/hi-jacket",
		stack: ["Bash", "Javascript", "Security"],
		title: "Hi-jacket"
	},
	{
		id: 9,
		description: "Domo is a very simple all-in-one tool to manage IoT devices from the CLI. Domo can be very useful to create other scripts to automate the routines in the house.",
		images: ["/assets/projects/domo/logo.jpeg"],
		liveUrl: "",
		repoUrl: "https://github.com/ZappaBoy/domo",
		stack: ["Python", "CLI", "IoT"],
		title: "Domo"
	}
];