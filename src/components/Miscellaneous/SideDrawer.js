import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Text,
} from "@chakra-ui/react";
import FavListItem from "./FavListItem";
import { MealState } from "../../Context/MealProvider";
const SideDrawer = ({ isOpen, onClose }) => {
  const { favouriteList, setFavouriteList } = MealState();
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            fontWeight="400"
            color="#13ecab"
          >
            Favourite Dishes
          </DrawerHeader>
          <DrawerBody>
            <Box d="flex" flexDir="column">
              {favouriteList.length > 0 ? (
                favouriteList.map((item) => {
                  return (
                    <FavListItem
                      item={item}
                      itemId={item.mealId}
                      key={item.mealId}
                    />
                  );
                })
              ) : (
                <Text textAlign="center">Nothing to see here yet</Text>
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
