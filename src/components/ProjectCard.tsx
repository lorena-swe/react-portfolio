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

export interface Project {
  name: string;
  image: string;
  gif?: string;
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

  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="md"
      boxShadow="lg"
      height="300px"
      bg="black"
      cursor="pointer"
    >
      <Flex align="center" justify="center" height="100%">
        <Image
          src={project.image}
          alt={project.name}
          objectFit="cover"
          width="100%"
          height="100%"
          onClick={onOpen}
        />
      </Flex>
      <Flex align="center" justify="center">
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
            height="60vh"
            marginY="auto"
          >
            <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column" height="100%">
              <Grid height="100%" templateColumns="3fr 2fr" gap={4}>
                <Flex align="center" justify="center" height="100%">
                  <Image
                    src={project.gif || project.image}
                    alt={project.name}
                    width="95%"
                    maxHeight="100%"
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
                          size="sm"
                          key={tag}
                          borderRadius="full"
                          variant="solid"
                          colorScheme="purple"
                          marginRight="8px"
                        >
                          <TagLabel>{tag}</TagLabel>
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
                        colorScheme="blue"
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
                      colorScheme="blue"
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
