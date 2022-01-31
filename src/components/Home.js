import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/layout";
import React from "react";
import { useEffect } from "react";
import Meal from "./Miscellaneous/Meal";
import { MealState } from "../Context/MealProvider";
import { Icon, Spinner, useDisclosure } from "@chakra-ui/react";
import { BiErrorCircle } from "react-icons/bi";
import Navbar from "./Miscellaneous/Navbar";
import SideDrawer from "./Miscellaneous/SideDrawer";
const Home = () => {
  const { loading, setLoading, meals, setMeals, search, setSearch } =
    MealState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fetchMeals = async () => {
    try {
      if (!search) {
        return;
      }
      setLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      const meals = data.meals;
      console.log(meals);
      if (meals) {
        const newMeals = meals.map((meal) => {
          const { idMeal, strMeal, strMealThumb } = meal;

          return {
            mealId: idMeal,
            mealName: strMeal,
            mealImg: strMealThumb,
          };
        });

        setMeals(newMeals);
      } else {
        setMeals(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMeals();
  }, [search]);

  return (
    <>
      <Navbar onOpen={onOpen} />
      <Box className="app">
        {loading ? (
          <Box>
            <Spinner
              w={10}
              h={10}
              color="#13ecab"
              alignSelf="center"
              margin="auto"
            />
          </Box>
        ) : meals ? (
          <Box pt={{ base: 2, md: 8 }} pb="10" px={{ base: 7, md: 15 }}>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4,1fr)",
                lg: "repeat(5,1fr)",
              }}
              gap={4}
            >
              {meals &&
                meals.map((meal) => <Meal meal={meal} key={meal.mealId} />)}
            </Grid>
          </Box>
        ) : (
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Icon as={BiErrorCircle} />
            <Heading
              fontSize="20px"
              color="gray.900"
              mt="4"
              fontWeight="semibold"
            >
              your search didn't match any results
            </Heading>
          </Box>
        )}
      </Box>

      <SideDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default Home;
