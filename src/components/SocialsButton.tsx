import { IconButton, Tooltip, Link } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  label: string;
  icon: ReactElement;
  href?: string;
  onClick?: () => void;
}

const SocialsButton = ({ label, icon, href, onClick }: Props) => {
  const button = (
    <IconButton
      bg="transparent"
      borderRadius="50%"
      aria-label={label}
      icon={icon}
      onClick={onClick}
    />
  );

  return (
    <Tooltip label={label} placement="left" borderRadius="7px">
      {href ? (
        <Link href={href} isExternal>
          {button}
        </Link>
      ) : (
        button
      )}
    </Tooltip>
  );
};

export default SocialsButton;
