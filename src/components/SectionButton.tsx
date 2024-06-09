import {
  Button,
  IconButton,
  useBreakpointValue,
  Tooltip,
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  label: string;
  icon: ReactElement;
  onClick: () => void;
}

const SectionButton = ({ label, icon, onClick }: Props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile ? (
        <Button
          leftIcon={icon}
          onClick={onClick}
          variant="ghost"
          justifyContent="flex-start"
          width="100%"
          aria-label={label}
          fontSize="xl"
          margin="10px 0"
        >
          {label}
        </Button>
      ) : (
        <Tooltip label={label} placement="right" borderRadius="7px">
          <IconButton aria-label={label} icon={icon} onClick={onClick} />
        </Tooltip>
      )}
    </>
  );
};

export default SectionButton;
