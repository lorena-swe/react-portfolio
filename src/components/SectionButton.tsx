import { IconButton, Tooltip } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  label: string;
  icon: ReactElement;
  onClick: () => void;
}

const SectionButton = ({ label, icon, onClick }: Props) => {
  return (
    <Tooltip
      label={label}
      placement="right"
      bg="rgba(0, 29, 50, 0.5)"
      color="white"
      borderRadius="7px"
    >
      <IconButton aria-label={label} icon={icon} onClick={onClick} />
    </Tooltip>
  );
};

export default SectionButton;
