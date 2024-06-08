import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectCard";
import dummyImage from "../assets/game-hub-thumbnail.png";

const projects: Project[] = [
  {
    name: "Game Hub",
    image: dummyImage,
    gif: dummyImage,
    tags: ["React", "TypeScript", "Chakra UI"],
    about: "This is a detailed description of Project 1.",
    demoLink: "https://lorena-swe-game-hub.vercel.app/",
    codeLink: "https://github.com/project1",
  },
  {
    name: "Little Lemon Restaurant",
    image: dummyImage,
    gif: dummyImage,
    tags: ["Vue", "JavaScript", "Vuetify"],
    about: "This is a detailed description of Project 2.",
    demoLink: "https://demo2.com",
    codeLink: "https://github.com/project2",
  },
  {
    name: "Sorting Visualizer",
    image: dummyImage,
    gif: dummyImage,
    tags: ["Vue", "JavaScript", "Vuetify"],
    about: "This is a detailed description of Project 2.",
    demoLink: "https://demo2.com",
    codeLink: "https://github.com/project2",
  },
  {
    name: "Space Adventures",
    image: dummyImage,
    gif: dummyImage,
    tags: ["Vue", "JavaScript", "Vuetify"],
    about: "This is a detailed description of Project 2.",
    demoLink: "https://demo2.com",
    codeLink: "https://github.com/project2",
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
