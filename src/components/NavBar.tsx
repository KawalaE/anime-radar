import { HStack, Text } from "@chakra-ui/react";
import { GiRadarDish } from "react-icons/gi";

const NavBar = () => {
  return (
    <HStack>
      <GiRadarDish size={55} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
