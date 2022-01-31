import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Container } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MealState } from "../../Context/MealProvider";
import { Icon, Text } from "@chakra-ui/react";
const Navbar = ({ onOpen }) => {
  const { search, setSearch } = MealState();
  const [mobile, setMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const inputRef = React.useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const getInnerWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getInnerWidth);
    return () => {
      window.removeEventListener("resize", getInnerWidth);
    };
  }, []);

  const getDeviceType = () => {
    if (width < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  useEffect(() => {
    getDeviceType();
  }, [width]);
  console.log(width);
  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        p="8px 40px 8px 40px"
        bg="#13ecab"
        w="100%"
        shadow="2xl"
        position="fixed"
        top="0"
        right="0"
      >
        <Text
          fontSize={{ base: "15", md: "20" }}
          color="white"
          fontWeight="500"
        >
          MealDbApi
        </Text>
        <Container maxWidth={{ base: "sm", md: "md" }}>
          <FormControl>
            <InputGroup size="md">
              <Input
                placeholder="Search Meals"
                color="black"
                variant="flushed"
                focusBorderColor="none"
                bg="#ffffff"
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="md"
              />
              <InputLeftElement
                children={
                  <SearchIcon
                    color="gray.400"
                    pointerEvents="none"
                    fontSize="16px"
                  />
                }
              />
            </InputGroup>
          </FormControl>
        </Container>

        <Box
          as="button"
          p={2}
          d="flex"
          alignItems="center"
          color="#13ecab"
          fontWeight="300"
          borderRadius="md"
          onClick={onOpen}
          bg="#fefefe"
          _hover={{
            opacity: 0.7,
          }}
        >
          <Icon as={GrFavorite} me={mobile ? "0" : "2"} />{" "}
          {mobile ? "" : "Favorite"}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
