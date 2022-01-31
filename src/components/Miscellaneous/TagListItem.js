import { Tag } from "@chakra-ui/tag";
import React from "react";

const TagListItem = ({ t, i }) => {
  return (
    <Tag variant="subtle" colorScheme="cyan" m="1">
      #{t}
    </Tag>
  );
};

export default TagListItem;
