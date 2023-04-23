import { CheckCircleIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Button,
  Input,
  CheckboxGroup,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsActionFn } from "../redux/itemReducer/itemAction";

const RecipeCard = ({ recipe, deleteRecipe, updateRecipe }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState(recipe.name);
  const [items, setItems] = useState(recipe.items);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const { isLoading, isError, data } = useSelector(
    (state) => state.itemReducer
  );

  useEffect(() => {
    dispatch(getItemsActionFn());
  }, []);

  const openModal = (id) => {
    setId(id);
    onOpen();
  };
  const handleCheckBox = (e) => {
    setItems(e);
  };

  const handleUpdateOnClick = () => {
    if (name.length === 0 || items.length === 0)
      return alert("Please give valid data");
    updateRecipe(id, { name, items });
  };
  //console.log("recipe: ", items);

  return (
    <Box
      border={"1px"}
      boxSizing={"border-box"}
      p={"16px"}
      borderRadius={"5px"}
    >
      <Heading size={"md"} textAlign={"center"}>
        {recipe.name}
      </Heading>
      <Text fontSize={18} fontWeight={"bold"}>
        Used Items
      </Text>
      {recipe.items.length > 0 ? (
        recipe.items.map((item, i) => (
          <Text key={i}>
            <CheckCircleIcon color={"green"} /> {item}
          </Text>
        ))
      ) : (
        <Text>No Item has been used</Text>
      )}

      <Flex minW={"200px"} justifyContent={"flex-end"} gap={"15px"}>
        <>
          <IconButton
            onClick={() => openModal(recipe._id)}
            colorScheme={"green"}
            icon={<EditIcon />}
          />

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Recipe</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
                <Text fontSize={"14px"}>Items</Text>
                {isLoading ? (
                  <Box as="span">Loading...</Box>
                ) : (
                  <Box maxH={"300px"} overflowY={"scroll"}>
                    <CheckboxGroup
                      colorScheme="blue"
                      onChange={handleCheckBox}
                      defaultValue={recipe.items}
                    >
                      <Stack spacing={[1, 1]}>
                        {data?.map((item, i) => (
                          <Checkbox key={i} value={item.name}>
                            {item.name}
                          </Checkbox>
                        ))}
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                )}
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="red"
                  variant="ghost"
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button onClick={handleUpdateOnClick} colorScheme="blue">
                  Update
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>

        <IconButton
          onClick={() => deleteRecipe(recipe._id)}
          colorScheme={"red"}
          icon={<DeleteIcon />}
        />
      </Flex>
    </Box>
  );
};

export default RecipeCard;
