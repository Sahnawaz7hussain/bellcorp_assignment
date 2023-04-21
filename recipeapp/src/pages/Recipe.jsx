import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const Recipe = () => {
  return (
    <Box w={"100%"} px={["2%", "2%", "5%"]} mt={"30px"}>
      <Flex>
        <Heading size={"md"}>All your Recipes</Heading>
        <Spacer />
        <Link to="/createrecipe">
          <Button colorScheme="blue">Create new Recipe</Button>
        </Link>
      </Flex>
      <br />
      <SimpleGrid columns={[1, 2, 3]} spacing={25}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </SimpleGrid>
    </Box>
  );
};

export default Recipe;
