import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRecipeActionFn,
  getRecipesActionFn,
  updateRecipeActionFn,
} from "../redux/recipeReducer/recipeAction";

const Recipe = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector(
    (state) => state.recipeReducer
  );

  function getRecipes() {
    dispatch(getRecipesActionFn());
  }
  useEffect(() => {
    getRecipes();
  }, []);

  function deleteRecipe(id) {
    dispatch(deleteRecipeActionFn(id))
      .then((res) => {
        getRecipes();
      })
      .catch((err) => {
        getRecipes();
      });
  }
  function updateRecipe(id, data) {
    dispatch(updateRecipeActionFn(id, data))
      .then((res) => {
        getRecipes();
      })
      .catch((err) => {
        getRecipes();
      });
  }
  //console.log("data;", data);
  return (
    <Box w={"100%"} px={["2%", "2%", "5%"]} mt={"30px"}>
      {isLoading && <Box as="span">Loading...</Box>}
      {isError && (
        <Box as="span" color={"red"}>
          Something went wrong...
        </Box>
      )}
      <Flex>
        <Heading size={"md"}>All your Recipes</Heading>
        <Spacer />
        <Link to="/createrecipe">
          <Button colorScheme="blue">Create new Recipe</Button>
        </Link>
      </Flex>
      <br />
      <SimpleGrid columns={[1, 2, 3]} spacing={25}>
        {data.length > 0 &&
          data.map((recipe, i) => (
            <RecipeCard
              key={i}
              recipe={recipe}
              deleteRecipe={deleteRecipe}
              updateRecipe={updateRecipe}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Recipe;
