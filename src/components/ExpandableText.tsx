import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}
const ExpandableText = ({ children: text }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 600;
  if (text.length < 600) return <Text>{text}</Text>;
  const displayText = isExpanded ? text : text.substring(0, limit) + "...";

  return (
    <Text>
      {displayText}{" "}
      <Button
        size="sm"
        colorScheme="teal"
        variant="ghost"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
