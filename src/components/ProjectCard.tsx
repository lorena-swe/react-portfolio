import {
  Grid,
  Box,
  Image,
  Button,
  useDisclosure,
  Flex,
  Text,
  Tag,
  TagLabel,
  HStack,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaCode, FaEye } from "react-icons/fa";
import { useState } from "react";

export interface Project {
  name: string;
  image: string;
  gif?: string;
  background?: string;
  tags: string[];
  about: string;
  demoLink?: string;
  codeLink: string;
}

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleClick = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="md"
      boxShadow="lg"
      height="300px"
      bg={project.background || "#343a41"}
      backgroundSize="cover"
      backgroundPosition="center"
      cursor="pointer"
      onClick={handleClick}
      onMouseEnter={() => setIsButtonVisible(true)}
      onMouseLeave={() => setIsButtonVisible(false)}
      _hover={{
        boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.4)",
      }}
      _focus={{
        boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Flex align="center" justify="center" height="100%" padding="65px">
        <Image
          src={project.image}
          alt={project.name}
          width="auto"
          maxHeight="100%"
          onClick={onOpen}
        />
      </Flex>
      <Flex
        align="center"
        justify="center"
        display={isButtonVisible ? "flex" : "none"}
      >
        <Button
          size="sm"
          position="absolute"
          bottom="3"
          leftIcon={<FaEye />}
          colorScheme="teal"
          onClick={onOpen}
        >
          View Project
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" motionPreset="scale">
        <ModalOverlay
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ModalContent
            maxWidth={["90vw", "80vw", "70vw"]}
            maxHeight="80vh"
            display="flex"
            flexDirection="column"
            m="auto" // Ensures margin auto for top and bottom
          >
            <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column" height="100%">
              <Grid height="100%" templateColumns="3fr 2fr" gap={4}>
                <Flex
                  align="center"
                  justify="center"
                  maxHeight="100%"
                  maxWidth="100%"
                  padding="20px"
                >
                  <Image
                    src={project.gif || project.image}
                    alt={project.name}
                    maxHeight="100%"
                    objectFit="contain"
                    borderRadius="5px"
                  />
                </Flex>

                <Flex
                  direction="column"
                  justify="space-between"
                  height="100%"
                  padding="24px 16px"
                >
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                      {project.name}
                    </Text>
                    <Box mt={2}>
                      {project.tags.map((tag) => (
                        <Tag
                          size="md"
                          key={tag}
                          borderRadius="4px"
                          variant="solid"
                          colorScheme="purple"
                          margin="0 8px 8px 0"
                        >
                          <TagLabel fontFamily="'Fira Code', monospace">
                            {tag}
                          </TagLabel>
                        </Tag>
                      ))}
                    </Box>
                  </Box>
                  <Box flex="1" mt={4} overflowY="auto">
                    <Text>{project.about}</Text>
                  </Box>
                  <HStack mt={4} justifyContent="flex-start">
                    {project.demoLink ? (
                      <Button
                        size="sm"
                        as="a"
                        href={project.demoLink}
                        target="_blank"
                        colorScheme="purple"
                        leftIcon={<FaEye />}
                      >
                        View Demo
                      </Button>
                    ) : (
                      <div></div>
                    )}

                    <Button
                      size="sm"
                      as="a"
                      href={project.codeLink}
                      target="_blank"
                      colorScheme="purple"
                      leftIcon={<FaCode />}
                    >
                      Code
                    </Button>
                  </HStack>
                </Flex>
              </Grid>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Box>
  );
};

export default ProjectCard;
