import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { List, ListItem, ListIcon, Heading, Spinner } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { MealState } from "../Context/MealProvider";
import { useParams } from "react-router";
import { MdCheckCircle } from "react-icons/md";
import TagListItem from "./Miscellaneous/TagListItem";
import { ChevronLeftIcon, SmallAddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
const MealDetails = () => {
  const { loading, setLoading, favouriteList, setFavouriteList } = MealState();
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const toast = useToast();
  const navigate = useNavigate();
  const fetchSingleMeal = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();

      if (data.meals) {
        const {
          strMeal,
          idMeal,
          strMealThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15,
          strIngredient16,
          strIngredient17,
          strIngredient18,
          strIngredient19,
          strIngredient20,
          strInstructions,
          strArea,
          strCategory,
          strTags,
        } = data.meals[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15,
          strIngredient16,
          strIngredient17,
          strIngredient18,
          strIngredient19,
          strIngredient20,
        ];
        let newTags;

        if (strTags) {
          newTags = strTags
            .replaceAll(",", " ")
            .replace(/\s+/g, " ")
            .split(" ");
        }
        const meal = {
          mealId: idMeal,
          mealName: strMeal,
          mealImg: strMealThumb,
          ingredients,
          category: strCategory,
          area: strArea,
          instructions: strInstructions,
          tags: newTags,
        };
        setMeal(meal);

        setLoading(false);
      } else {
        setMeal(null);
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSingleMeal();
  }, [id]);

  const addHandler = (mealId) => {
    let inFav = favouriteList.find((f) => f.mealId === mealId);

    if (inFav) {
      toast({
        description: `${inFav.mealName} is already in your favourite list`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setFavouriteList([...favouriteList, meal]);
    toast({
      description: `${meal.mealName} has been added to your favourite list`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      {loading ? (
        <Box className="app">
          <Spinner
            w={10}
            h={10}
            alignSelf="center"
            color="#13ecab"
            margin="auto"
          />
        </Box>
      ) : (
        <>
          <Flex
            justify="center"
            alignItems="center"
            py={{ base: 5, md: 10 }}
            px={{ base: 3, md: 10 }}
            minHeight="100vh"
            direction={{ base: "column", md: "row" }}
          >
            <Box
              w={{ base: "80%", sm: "60%", md: "40%" }}
              mb={{ base: 8, md: 0 }}
              mr={{ base: 0, md: 12 }}
            >
              <Image
                src={meal.mealImg}
                alt=""
                shadow="2xl"
                borderRadius="circle"
              />
            </Box>
            <Box w={{ base: "80%", md: "40%" }}>
              <Heading
                variant="h4"
                fontSize="lg"
                fontWeight="semibold"
                color="#13ecab"
                mb={3}
              >
                {meal.mealName}
              </Heading>
              <Box>
                {meal.tags &&
                  meal.tags.map((t, i) => <TagListItem t={t} i={i} key={i} />)}
              </Box>
              <Box>
                <Heading my="3" fontSize="md" fontWeight="normal">
                  {meal && "Ingredients :"}
                </Heading>
                <List d="flex" alignItems="center" flexWrap="wrap">
                  {meal.ingredients &&
                    meal.ingredients.map((ingredient, i) => {
                      if (ingredient)
                        return (
                          <ListItem key={i} m="2">
                            <ListIcon
                              as={MdCheckCircle}
                              verticalAlign="middle"
                              color="teal"
                            />
                            {ingredient}
                          </ListItem>
                        );
                    })}
                </List>
              </Box>
              <Box mt="2">
                <Text mb="2">
                  <b>Area</b>:{meal.area}
                </Text>
                <Text>
                  <b>Category</b>:{meal.category}
                </Text>
              </Box>

              <Box className="instructions" my={3}>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {`Instructions on how to prepare ${meal.mealName}`}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel color="gray.900" pb={4}>
                      {meal.instructions}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Button
                className="add-btn"
                rightIcon={<SmallAddIcon fontSize="lg" />}
                colorScheme="teal"
                fontWeight="400"
                onClick={() => addHandler(meal.mealId)}
              >
                Add to favorite
              </Button>
            </Box>
          </Flex>
          <Button
            variant="solid"
            leftIcon={<ChevronLeftIcon />}
            colorScheme="teal"
            fontWeight="400"
            position="fixed"
            right="2"
            top="2"
            onClick={() => navigate("/")}
          >
            Back Home
          </Button>
        </>
      )}
    </>
  );
};

export default MealDetails;
