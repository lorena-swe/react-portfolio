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
      "UI/UX",
    ],
    about: "This is a detailed description of Project 1.",
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
      "UI/UX",
    ],
    about: "This is a detailed description of Project 2.",
    demoLink: "https://lorena-swe.github.io/little-lemon-restaurant/",
    codeLink: "https://github.com/lorena-swe/little-lemon-restaurant",
  },
  {
    name: "Sorting Visualizer",
    image: sortLogo,
    gif: sortGif,
    background: `url(${sortBg})`,
    tags: ["Python", "TKinter"],
    about: "This is a detailed description of Project 2.",
    codeLink: "https://github.com/lorena-swe/SortingVisualizer",
  },
  {
    name: "Space Adventures",
    image: spaceLogo,
    gif: spaceGif,
    background: `url(${spaceBg})`,
    tags: ["Python", "Pygame"],
    about: "This is a detailed description of Project 2.",
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
