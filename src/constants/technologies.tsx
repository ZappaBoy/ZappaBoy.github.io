import {
	SiAmd,
	SiAndroid,
	SiAngular,
	SiAnsible,
	SiApachecouchdb,
	SiApachespark,
	SiArchlinux,
	SiAuthelia,
	SiBnbchain,
	SiBootstrap,
	SiBurpsuite,
	SiCloudflare,
	SiCss3,
	SiDocker,
	SiEthereum,
	SiExpo,
	SiExpress,
	SiFastapi,
	SiFastify,
	SiFlutter,
	SiGithub,
	SiGitlab,
	SiGnubash,
	SiHibernate,
	SiHtml5,
	SiIonic,
	SiJavascript,
	SiK3S,
	SiKalilinux,
	SiKeras,
	SiKeycloak,
	SiKubernetes,
	SiLinux,
	SiMetasploit,
	SiMongodb,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiOpenai,
	SiParrotsecurity,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiQgis,
	SiRancher,
	SiRaspberrypi,
	SiReact,
	SiRuby,
	SiScikitlearn,
	SiSocketdotio,
	SiSpringboot,
	SiSqlalchemy,
	SiSqlite,
	SiTailwindcss,
	SiTensorflow,
	SiTradingview,
	SiTraefikproxy,
	SiUbuntu,
	SiWireshark,
	SiWordpress
} from "react-icons/si";


export const TECHNOLOGIES = [
	{
		category: "AI",
		items: [
			{ name: "Python", icon: <SiPython size={32} /> },
			{ name: "Tensorflow", icon: <SiTensorflow size={32} /> },
			{ name: "Keras", icon: <SiKeras size={32} /> },
			{ name: "Scikit-learn", icon: <SiScikitlearn size={32} /> },
			{ name: "OpenAI", icon: <SiOpenai size={32} /> },
			{ name: "Apache Spark", icon: <SiApachespark size={32} /> },
			{ name: "ROCm", icon: <SiAmd size={32} /> }
		]
	},
	{
		category: "Backend e Databases",
		items: [
			{ name: "FastAPI", icon: <SiFastapi size={32} /> },
			{ name: "Node", icon: <SiNodedotjs size={32} /> },
			{ name: "Spring Boot", icon: <SiSpringboot size={32} /> },
			{ name: "NestJS", icon: <SiNestjs size={32} /> },
			{ name: "Express.js", icon: <SiExpress size={32} /> },
			{ name: "Fastify", icon: <SiFastify size={32} /> },
			{ name: "Prisma", icon: <SiPrisma size={32} /> },
			{ name: "SQLAlchemy", icon: <SiSqlalchemy size={32} /> },
			{ name: "Hibernate", icon: <SiHibernate size={32} /> },
			{ name: "MySQL", icon: <SiMysql size={32} /> },
			{ name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
			{ name: "MongoDB", icon: <SiMongodb size={32} /> },
			{ name: "CouchDB", icon: <SiApachecouchdb size={32} /> },
			{ name: "SQLite", icon: <SiSqlite size={32} /> },
			{ name: "Socket.io", icon: <SiSocketdotio size={32} /> }
		]
	},
	{
		category: "Frontend",
		items: [
			{ name: "Angular", icon: <SiAngular size={32} /> },
			{ name: "Next", icon: <SiNextdotjs size={32} /> },
			{ name: "React", icon: <SiReact size={32} /> },
			{ name: "HTML", icon: <SiHtml5 size={32} /> },
			{ name: "CSS", icon: <SiCss3 size={32} /> },
			{ name: "JS", icon: <SiJavascript size={32} /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
			{ name: "Bootstrap", icon: <SiBootstrap size={32} /> }
		]
	},
	{
		category: "DevOps",
		items: [
			{ name: "GNU/Linux", icon: <SiLinux size={32} /> },
			{ name: "Arch Linux", icon: <SiArchlinux size={32} /> },
			{ name: "Ubuntu Server", icon: <SiUbuntu size={32} /> },
			{ name: "Bash", icon: <SiGnubash size={32} /> },
			{ name: "Docker", icon: <SiDocker size={32} /> },
			{ name: "Kubernetes", icon: <SiKubernetes size={32} /> },
			{ name: "k3s", icon: <SiK3S size={32} /> },
			{ name: "Rancher", icon: <SiRancher size={32} /> },
			{ name: "Cloudflare", icon: <SiCloudflare size={32} /> },
			{ name: "Traefik", icon: <SiTraefikproxy size={32} /> },
			{ name: "Authelia", icon: <SiAuthelia size={32} /> },
			{ name: "Keycloak", icon: <SiKeycloak size={32} /> },
			{ name: "Ansible", icon: <SiAnsible size={32} /> },
			{ name: "Github", icon: <SiGithub size={32} /> },
			{ name: "Gitlab", icon: <SiGitlab size={32} /> }
		]
	},
	{
		category: "Penetration Testing",
		items: [
			{ name: "Parrot Security", icon: <SiParrotsecurity size={32} /> },
			{ name: "Kali Linux", icon: <SiKalilinux size={32} /> },
			{ name: "Burp Suite", icon: <SiBurpsuite size={32} /> },
			{ name: "Metasploit", icon: <SiMetasploit size={32} /> },
			{ name: "Wireshark", icon: <SiWireshark size={32} /> },
			{ name: "Raspberry", icon: <SiRaspberrypi size={32} /> }
		]
	},
	{
		category: "Blockchain",
		items: [
			{ name: "Hyperledger Fabric", icon: <SiBnbchain size={32} /> },
			{ name: "Ethereum", icon: <SiEthereum size={32} /> }
		]
	},
	{
		category: "Mobile",
		items: [
			{ name: "Android", icon: <SiAndroid size={32} /> },
			{ name: "Ionic", icon: <SiIonic size={32} /> },
			{ name: "Flutter", icon: <SiFlutter size={32} /> },
			{ name: "Expo", icon: <SiExpo size={32} /> }
		]
	},
	{
		category: "Other",
		items: [
			{ name: "Automated Trading Systems", icon: <SiTradingview size={32} /> },
			{ name: "QGIS e PostGIS", icon: <SiQgis size={32} /> },
			{ name: "Ruby", icon: <SiRuby size={32} /> },
			{ name: "Wordpress", icon: <SiWordpress size={32} /> }
		]
	}
];
