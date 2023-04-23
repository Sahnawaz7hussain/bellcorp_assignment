import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { data } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { getItemsActionFn } from "../redux/itemReducer/itemAction";
import { postRecipeActionFn } from "../redux/recipeReducer/recipeAction";

const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const Toast = useToast();
  const { isLoading, isError, data } = useSelector(
    (state) => state.itemReducer
  );

  useEffect(() => {
    dispatch(getItemsActionFn());
  }, []);

  const handleCheckBox = (e) => {
    setItems(e);
  };
  console.log(items, "checkbox");
  const handleOnClick = () => {
    if (!name || items.length === 0) {
      return Toast({
        title: "Name and atleast one item is required.",
        duration: 3000,
        isClosable: true,
        position: "top",
        status: "warning",
      });
    }
    dispatch(postRecipeActionFn({ name, items }))
      .then((res) => {
        Toast({
          title: `${res.payload.message}`,
          duration: 3000,
          isClosable: true,
          position: "top",
          status: "info",
        });
        //  console.log("res: ", res);
      })
      .catch((err) => {
        Toast({
          title: `Something went wrong!`,
          duration: 3000,
          isClosable: true,
          position: "top",
          status: "error",
        });
        // console.log("er: ", err);
      });
  };
  //console.log("add: ", data);
  return (
    <Container
      mt={"20px"}
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
    >
      <Heading my={10} textAlign={"center"} size={"xl"}>
        Create new Recipe
      </Heading>
      <FormControl>
        <FormLabel>Recipe Name</FormLabel>
        <Input
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <Text fontSize={"18px"} my={"14px"}>
        All your Items
      </Text>
      {isError && (
        <Box as="span" color={"red"}>
          Something went wrong please refresh the page.
        </Box>
      )}
      {isLoading ? (
        <Box as="span">Loading...</Box>
      ) : (
        <Box maxH={"300px"} overflowY={"scroll"}>
          <CheckboxGroup colorScheme="blue" onChange={handleCheckBox}>
            <Stack spacing={[1, 1]}>
              {data.map((item, i) => (
                <Checkbox key={i} value={item.name}>
                  {item.name}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </Box>
      )}
      <Button onClick={handleOnClick} my={"12px"} w={"100%"} colorScheme="blue">
        Create Recipe
      </Button>
    </Container>
  );
};

export default CreateRecipe;
