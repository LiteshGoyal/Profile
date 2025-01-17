export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Python",
		icon: "/tech/python.png",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Django",
		icon: "/tech/Django.png",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "PostgreSQL",
		icon: "/tech/postgres.png",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Mappacktoolbox",
		company_name: "https://mappacktoolbox.com/",
		icon: "/company/mappack.webp",
		iconBg: "#383E56",
		date: "October 2024",
		points: [
			"Leveraged Nextjs for building dynamic and interactive user interfaces, ensuring a seamless user experience.",
			"Translated the client's custom design into responsive and pixel-perfect layouts using Tailwind CSS, ensuring consistency across devices.",
			"Focused on improving website speed and responsiveness through optimized code splitting, lazy loading, and efficient state management.",
			"Built intuitive navigation and enhanced accessibility, ensuring the site caters to a diverse audience."
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "Byteoski Developers",
		icon: "https://byteoski.com/logo.svg",
		iconBg: "#E6DEDD",
		date: "July - October 2024",
		points: [
			"Designed and implemented robust models using Django Ninja to efficiently track and manage versioned updates, including new features and enhancements. Integrated this system with a Next.js frontend to provide users with a transparent and interactive interface for staying informed about updates, fostering effective communication and user engagement.",
			"Developed a robust API key management system by leveraging Django models to generate random API keys on the backend. Built a dynamic dashboard using Next.js that allows users to seamlessly create new keys, view existing keys in a well-structured table, and delete keys, ensuring smooth interaction between the backend and frontend.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Litesh Goyal",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/litesh-goyal-8b6225211/",
	},
	{
		id: 3,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "LiteshGoyal",
		image: "/tech/github.webp",
		link: "https://github.com/LiteshGoyal",
	},
	{
		id: 3,
		testimonial:
			"Check out my Twitter Profile where I have shared all my Updates from beginning to all acheivments.",
		name: "Litesh Goyal",
		image: "/tech/twitter.png",
		link: "https://x.com/goyal_litesh",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "MoonEx Crypto Platform",
		description:
			"A sleek and modern interface for a multi-chain decentralized exchange (DEX)",
		tags: [
			{
				name: "React.js",
				color: "blue-text-gradient",
			},
			{
				name: "Shadcn",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/moonex.png",
		platform: "Vercel",
		deploy_link: "https://moonex-liard.vercel.app/",
	},
	{
		name: "SDstudios",
		description:
			"Modern website which provides web development services with your favorite tech-stack",
		tags: [
			{
				name: "Next.js",
				color: "orange-text-gradient",
			},
			{
				name: "Django",
				color: "green-text-gradient",
			},
			{
				name: "Java",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/sdstudios.png",
		platform: "Vercel",
		deploy_link: "https://sdstudios-django.vercel.app/",
	},
	{
		name: "SuperMetrics",
		description:
			"An impressive UI built with Next.js with different components",
		tags: [
			{
				name: "Next.js",
				color: "green-text-gradient",
			},
			{
				name: "TailwindCss",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/supermetrics.png",
		platform: "Vercel",
		deploy_link: "https://supermetrics.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
