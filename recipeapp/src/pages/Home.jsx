import React, { useEffect } from "react";
import ItemCard from "../components/ItemCard";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
//import { data } from "../data";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemActionFn,
  getItemsActionFn,
  updateItemActionFn,
} from "../redux/itemReducer/itemAction";
const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector(
    (state) => state.itemReducer
  );

  function getItems() {
    dispatch(getItemsActionFn());
  }
  useEffect(() => {
    getItems();
  }, []);

  function deleteItem(id) {
    dispatch(deleteItemActionFn(id))
      .then((res) => {
        getItems();
      })
      .catch((err) => {
        getItems();
      });
  }
  function updateItem(id, data) {
    dispatch(updateItemActionFn(id, data))
      .then((res) => {
        getItems();
      })
      .catch((err) => {
        getItems();
      });
  }
  // console.log("data;", data);
  return (
    <Box w={["96%", "96%", "90%"]} m={"auto"} mt={"40px"}>
      {isLoading && <Box as="span">Loading...</Box>}
      {isError && (
        <Box as="span">Something went wrong please refresh the page</Box>
      )}
      <Flex flexDir={"row-reverse"} my={"15px"}>
        <Link to="/additem">
          <Button colorScheme="blue">Add new Item</Button>
        </Link>
      </Flex>
      <SimpleGrid columns={[1, 2, 3]} spacing={"55px"}>
        {data.length > 0 &&
          data.map((item, i) => (
            <ItemCard
              key={i}
              item={item}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
