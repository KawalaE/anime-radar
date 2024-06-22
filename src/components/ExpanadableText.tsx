import React, { ReactNode, useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  children: string;
}
const ExpanadableText = ({ children: text }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let limit = 600;
  if (text.length < 600) return <Text>{text}</Text>;
  let displayText = isExpanded ? text : text.substring(0, limit);

  return (
    <Text>
      {displayText + "..."}{" "}
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

export default ExpanadableText;
