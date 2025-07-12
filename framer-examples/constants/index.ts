export type Project = {
	title1: string;
	title2: string;
	src: string;
};

export const projects: Project[] = [
	{
		title1: "Jomor",
		title2: "Design",
		src: "/images/image_1.jpg",
	},
	{
		title1: "La",
		title2: "Grange",
		src: "/images/image_2.jpg",
	},
	{
		title1: "Deux Huit",
		title2: "Huit",
		src: "/images/image_3.jpg",
	},
	{
		title1: "Nothing",
		title2: "Design Studio",
		src: "/images/image_4.jpg",
	},
	{
		title1: "Framer",
		title2: "Motion",
		src: "/images/image_5.jpg",
	},
];
export interface CardProject {
	title?: string;
	description: string;
	src: string;
	link: string;
	color: string;
}
export const CardProjects: CardProject[] = [
	{
		title: "Matthias Leidinger",
		description:
			"Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
		src: "/images/image_1.jpg",
		link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
		color: "#BBACAF",
	},
	{
		description:
			"This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
		src: "/images/image_2.jpg",

		link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
		color: "#977F6D",
	},
	{
		title: "Zissou",
		description:
			"Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
		src: "/images/image_3.jpg",
		link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
		color: "#C2491D",
	},
	{
		title: "Luca",
		description:
			"Photographer Luca Tombolini’s latest series, titled ‘The Last Summer,’ is a visual exploration of the fleeting nature of time and the bittersweet beauty of nostalgia.",
		src: "/images/image_4.jpg",
		link: "https://www.ignant.com/2023/10/21/luca-tombolinis-the-last-summer-is-a-visual-exploration-of-nostalgia/",
		color: "#D9C6B2",
	},
	{
		title: "Ludovic Balay",
		description:
			"With Cinematic Beauty, Ludovic Balay Captures The Poetry Of Everyday Life In Paris. Ludovic Balay is a French photographer and filmmaker based in Paris. His work is characterized by its cinematic quality, capturing the beauty of everyday life in the city.",
		src: "/images/image_5.jpg",
		link: "https://www.framer.com/motion/",
		color: "#A8B2C0",
	},
];

export const VignetteProjects = [
	{ name: "Dyal Thak", handle: "image_3.jpg", vignette: "image_2.jpg" },
	{ name: "Leidinger Matthias", handle: "image_6.jpg", vignette: "image_5.jpg" },
	{ name: "Mark Rammers", handle: "image_7.jpg", vignette: "image_1.jpg" },
	{ name: "Landon Speers", handle: "image_4.jpg", vignette: "image_9.jpg" },
];
