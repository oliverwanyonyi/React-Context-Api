import { Button } from "@chakra-ui/button";
import { Text, Box } from "@chakra-ui/layout";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Box
      minHeight="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
      px="3"
    >
      <Box textAlign="center">
        <Text fontSize="15px" color="red.300">
          404 | page Not found
        </Text>
        <Text fontSize="20px" my="4">
          sorry we ran into some errors my team and i are working on fixing this
          problem
        </Text>
        <Button
          onClick={() => navigate("/")}
          variant="solid"
          colorScheme="teal"
          fontWeight="400"
        >
          Back Home
        </Button>
      </Box>
    </Box>
  );
};

export default Error;
