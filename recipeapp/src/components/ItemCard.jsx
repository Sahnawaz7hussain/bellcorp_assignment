import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ItemCard = ({ item, deleteItem, updateItem }) => {
  const initialEditData = {
    name: item.name,
    weight: item.weight,
    price: item.price,
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editData, setEditData] = useState(initialEditData);
  const [editId, setEditId] = useState("");

  function openModal(id) {
    setEditId(id);
    onOpen();
  }

  const handleOnClick = () => {
    updateItem(editId, editData);
  };
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    console.log("hello world:", value);
    setEditData({
      ...editData,
      [name]: value,
    });
  };
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"15px"}
      boxSizing={"border-box"}
      py={"15px"}
      border={"1px"}
      borderRadius={"5px"}
    >
      <Heading size={"md"}>{item.name}</Heading>
      <Text>₹ {item.price}</Text>
      <Text>{item.weight} kg.</Text>
      <Flex gap={"15px"}>
        <>
          <IconButton
            onClick={() => openModal(item._id)}
            //onClick={onOpen}
            title="Update Item"
            colorScheme="green"
            icon={<EditIcon />}
          />
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Item</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    isRequired={true}
                    value={editData.name}
                    name="name"
                    onChange={handleOnChange}
                  />
                  <FormLabel>Weight(kg)</FormLabel>
                  <Input
                    type="text"
                    value={editData.weight}
                    name="weight"
                    onChange={handleOnChange}
                  />
                  <FormLabel>Price</FormLabel>
                  <Input
                    type="number"
                    value={editData.price}
                    name="price"
                    onChange={handleOnChange}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  variant="ghost"
                  colorScheme="red"
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button onClick={handleOnClick} colorScheme="green">
                  Update
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
        <IconButton
          onClick={() => deleteItem(`${item._id}`)}
          title="Delete Item"
          colorScheme="red"
          icon={<DeleteIcon />}
        />
      </Flex>
    </Box>
  );
};

export default ItemCard;
