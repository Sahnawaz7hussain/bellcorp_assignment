import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import React from "react";

const ItemCard = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"15px"}
      h={"auto"}
      boxSizing={"border-box"}
      py={"15px"}
      border={"1px"}
      borderRadius={"5px"}
    >
      <Heading>Mango</Heading>
      <Text>₹ 200</Text>
      <Text>20 kg.</Text>
      <Flex gap={"15px"}>
        <IconButton
          title="Update Item"
          colorScheme="green"
          icon={<EditIcon />}
        />
        <IconButton
          title="Delete Item"
          colorScheme="red"
          icon={<DeleteIcon />}
        />
      </Flex>
    </Box>
  );
};

export default ItemCard;
