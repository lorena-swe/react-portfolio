import {
  Grid,
  // GridItem,
  Box,
  Image,
  Button,
  useDisclosure,
  Flex,
  Text,
  // Badge,
  Tag,
  TagLabel,
  HStack,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  // ModalHeader,
  // ModalFooter,
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
  demoLink: string;
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
          position="absolute"
          bottom="0"
          leftIcon={<FaEye />}
          bg="white"
          color="black"
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
        />
        <ModalContent maxWidth={["90vw", "80vw", "70vw"]} height="60vh">
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" height="100%">
            <Grid height="100%" templateColumns="3fr 2fr" gap={4}>
              <Flex align="center" justify="center">
                <Image
                  src={project.gif || project.image}
                  alt={project.name}
                  width="95%"
                  maxHeight="100%"
                  borderRadius="5px"
                />
              </Flex>

              <Flex direction="column" justify="space-between" height="100%">
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
                        colorScheme="green"
                      >
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                  </Box>
                </Box>
                <Box flex="1" mt={4} overflowY="auto">
                  <Text>{project.about}</Text>
                </Box>
                <HStack paddingBottom="10px">
                  <Button
                    size="sm"
                    as="a"
                    href={project.demoLink}
                    target="_blank"
                    colorScheme="gray"
                    leftIcon={<FaEye />}
                  >
                    View Demo
                  </Button>
                  <Button
                    size="sm"
                    as="a"
                    href={project.codeLink}
                    target="_blank"
                    colorScheme="gray"
                    leftIcon={<FaCode />}
                  >
                    Code
                  </Button>
                </HStack>
              </Flex>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProjectCard;
