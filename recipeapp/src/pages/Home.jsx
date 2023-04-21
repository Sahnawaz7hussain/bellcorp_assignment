import React from "react";
import ItemCard from "../components/ItemCard";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { data } from "../data";
const Home = () => {
  return (
    <Box w={["96%", "96%", "90%"]} m={"auto"} mt={"40px"}>
      <Flex flexDir={"row-reverse"} my={"15px"}>
        <Link to="/additem">
          <Button colorScheme="blue">Add new Item</Button>
        </Link>
      </Flex>
      <SimpleGrid columns={[1, 2, 3]} spacing={"55px"}>
        {data.map((item, i) => (
          <ItemCard key={i} item={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
