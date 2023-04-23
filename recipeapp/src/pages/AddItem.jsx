import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { postItemActionFn } from "../redux/itemReducer/itemAction";
import { useDispatch } from "react-redux";

const newItem = {
  name: "",
  weight: "",
  price: "",
};
const AddItem = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [item, setItem] = useState(newItem);

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleAddItem = () => {
    const { name, weight, price } = item;
    if (!name || !weight || !price) return;
    dispatch(postItemActionFn(item))
      .then((res) => {
        // console.log("res: ", res);
        setItem(newItem);
        toast({
          title: `${res.payload.message}`,
          duration: 2000,
          isClosable: true,
          status: "success",
          position: "top",
        });
      })
      .catch((err) => {
        // console.log("er: ", err);
      });
    // console.log("item ", item);
  };
  return (
    <Container
      mt={"40px"}
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
    >
      <Heading size={"xl"} textAlign={"center"} my={"5px"}>
        Add new Item
      </Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={item.name}
          onChange={handleOnChange}
        />
        <FormLabel>Weight(kg)</FormLabel>
        <Input
          type="number"
          name="weight"
          value={item.weight}
          onChange={handleOnChange}
        />
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          name="price"
          value={item.price}
          onChange={handleOnChange}
        />

        <Button
          mt={"15px"}
          colorScheme="blue"
          w={"100%"}
          onClick={handleAddItem}
        >
          Add
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddItem;
