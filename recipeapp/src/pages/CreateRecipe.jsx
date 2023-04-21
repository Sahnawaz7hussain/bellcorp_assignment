import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { data } from "../data";
const CreateRecipe = () => {
  const handleCheckBox = (e) => {
    console.log(e, "checkbox");
  };
  return (
    <Container
      mt={"20px"}
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
    >
      <FormControl>
        <FormLabel>Recipe Name</FormLabel>
        <Input placeholder="Recipe Name" />
      </FormControl>
      <Text fontSize={"18px"} my={"14px"}>
        All your Items
      </Text>
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
      <Button my={"12px"} w={"100%"} colorScheme="blue">
        Create Recipe
      </Button>
    </Container>
  );
};

export default CreateRecipe;
