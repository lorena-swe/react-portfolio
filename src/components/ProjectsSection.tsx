import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectCard";
import dummyImage from "../assets/game-hub-thumbnail.png";

const projects: Project[] = [
  {
    name: "Game Hub",
    image: dummyImage,
    gif: dummyImage,
    tags: [
      "React",
      "TypeScript",
      "rawg API",
      "Chakra UI",
      "Responsive",
      "UI/UX",
    ],
    about: "This is a detailed description of Project 1.",
    demoLink: "https://lorena-swe-game-hub.vercel.app/",
    codeLink: "https://github.com/lorena-swe/game-hub",
  },
  {
    name: "Little Lemon Restaurant",
    image: dummyImage,
    gif: dummyImage,
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
    image: dummyImage,
    gif: dummyImage,
    tags: ["Python", "TKinter"],
    about: "This is a detailed description of Project 2.",
    codeLink: "https://github.com/lorena-swe/SortingVisualizer",
  },
  {
    name: "Space Adventures",
    image: dummyImage,
    gif: dummyImage,
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
