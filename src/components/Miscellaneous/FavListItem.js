import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MealState } from "../../Context/MealProvider";

const FavListItem = ({ item, itemId }) => {
  const { favouriteList, setFavouriteList } = MealState();
  const removeItem = (id) => {
    const newFavList = favouriteList.filter((item) => item.mealId !== id);
    console.log(newFavList, favouriteList);
    setFavouriteList(newFavList);
  };

  return (
    <Box d="flex" alignItems="center" justifyContent="space-around">
      <Image
        src={item.mealImg}
        boxSize="60px"
        borderRadius="full"
        shadow="xl"
      />
      <Box d="flex" flexDir="column" mb="4">
        <Heading
          variant="h6"
          fontSize="14px"
          fontWeight="400"
          mb="8px"
          color="#13ecab"
        >
          {item.mealName}
        </Heading>
        <Text>category: {item.category}</Text>
      </Box>
      <IconButton
        variant="unstyled"
        color="red"
        aria-label="remove list"
        fontSize="20px"
        icon={<BsFillTrashFill />}
        onClick={() => removeItem(itemId)}
      />
    </Box>
  );
};

export default FavListItem;
