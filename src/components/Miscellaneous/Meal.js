import React from "react";

import { Link as ReachLink } from "react-router-dom";

import { MealState } from "../../Context/MealProvider";
import { Box, GridItem, Heading, HStack, Link } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import TagListItem from "./TagListItem";
import { Image } from "@chakra-ui/image";
const Meal = ({ meal }) => {
  return (
    <GridItem
      shadow="2xl"
      borderRadius="md"
      p="10px"
      borderWidth="1px"
      alignSelf="start"
    >
      <Box borderWidth="1px">
        <Image src={meal.mealImg} />
        <Box px={"12px"} py={"7px"}>
          <Heading
            variant="h4"
            fontSize="17px"
            color="#1af387"
            mb="2.5"
            fontWeight="500"
          >
            {meal.mealName}
          </Heading>

          <Link as={ReachLink} to={`meal/${meal.mealId}`} color="green.500">
            More Details
          </Link>
        </Box>
      </Box>
    </GridItem>
  );
};

export default Meal;
