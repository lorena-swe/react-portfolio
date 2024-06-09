import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectCard";
import dummyImage from "../assets/game-hub-thumbnail.png";

import gameHubLogo from "../assets/logo.webp";
import gameHubDemoGif from "../assets/gameHubDemoGif.gif";
import gameHubBg from "../assets/GameHubBg.png";

import lemonLogo from "../assets/LittleLemonLogo.png";

import spaceLogo from "../assets/SpaceAdventuresLogo.png";
import spaceGif from "../assets/spaceAdventures(gif).gif";
import spaceBg from "../assets/New Project.jpg";

import sortLogo from "../assets/SortingVisualizerLogo.png";
import sortGif from "../assets/sortingVisualizer_thumbnail.gif";
import sortBg from "../assets/florian-olivo-JNz9bQD3Oio-unsplash.jpg";

const projects: Project[] = [
  {
    name: "Game Hub",
    image: gameHubLogo,
    gif: gameHubDemoGif,
    background: `url(${gameHubBg})`,
    tags: [
      "React",
      "TypeScript",
      "RAWG.io API",
      "Chakra UI",
      "Responsive",
      "CSS-in-JS",
      "UX/UI",
    ],
    about:
      "In this project, I worked with the RAWG.io API to develop a web app displaying a comprehensive list of video games, which can then be filtered by keywords, genres, platforms, as well as sorted by multiple variables. \n\nThe website also provides loading scheletons for a seamless and interactive user experience! 😄 \n\nI had plenty of fun developing this project, as video games are one of my fondest passions and inspired me to get into the programming world in the first place!",
    demoLink: "https://lorena-swe-game-hub.vercel.app/",
    codeLink: "https://github.com/lorena-swe/game-hub",
  },
  {
    name: "Little Lemon Restaurant",
    image: lemonLogo,
    gif: dummyImage,
    background: "#495e57",
    tags: [
      "React",
      "JavaScript",
      "HTML & CSS",
      "Firebase",
      "NoSQL",
      "Responsive",
      "UX/UI",
    ],
    about:
      "This React project features Little Lemon 🍋, a fictional restaurant looking to expand their reach on the online marketplace. \n\nIn particular, this website allows potential customers to get to know the restaurant, have a look at their menu (for which Firebase was used as a database), as well as to book and cancel reservations for multiple locations, according to their needs!",
    demoLink: "https://lorena-swe.github.io/little-lemon-restaurant/",
    codeLink: "https://github.com/lorena-swe/little-lemon-restaurant",
  },
  {
    name: "Sorting Visualizer",
    image: sortLogo,
    gif: sortGif,
    background: `url(${sortBg})`,
    tags: ["Python", "TKinter"],
    about:
      "This is my personal take on a Sorting Visualizer desktop app. \nBuilt in Python, this app will allow you to experiment sorting different data sets, visualizing step-by-step how the following algorithms operate:\n\n• Bubble Sort [Avg: O(n^2)]\n• Insetion Sort [Avg: O(n^2)]\n• Quick Sort [Avg: O(n logn)]\n• Selection Sort [Avg: O(n^2)]",
    codeLink: "https://github.com/lorena-swe/SortingVisualizer",
  },
  {
    name: "Space Adventures",
    image: spaceLogo,
    gif: spaceGif,
    background: `url(${spaceBg})`,
    tags: ["Python", "Pygame"],
    about:
      "Video games 🎮 are what got me into the programming world in the first place. \n\nSo here is a little arcade-like 🕹️ video game built in Python, which really made me appreciate even more the power and wonders of coding!",
    codeLink: "https://github.com/lorena-swe/SpaceAdventures",
  },
];

const ProjectsSection = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap={12}
      padding="20px 150px"
    >
      {projects.map((project, index) => (
        <GridItem key={index}>
          <ProjectCard project={project} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectsSection;
