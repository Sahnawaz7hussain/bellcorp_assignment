import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";

const AddItem = () => {
  return (
    <Container mt={"40px"}>
      <Heading size={"xl"} textAlign={"center"} my={"5px"}>
        Add new Item
      </Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" isRequired={true} />
        <FormLabel>Weight(kg)</FormLabel>
        <Input type="text" />
        <FormLabel>Price</FormLabel>
        <Input type="number" />

        <Button mt={"15px"} colorScheme="blue" w={"100%"}>
          Add
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddItem;
