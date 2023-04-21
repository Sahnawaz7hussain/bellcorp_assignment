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
} from "@chakra-ui/react";
import React from "react";

const RecipeCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      border={"1px"}
      boxSizing={"border-box"}
      p={"16px"}
      borderRadius={"5px"}
    >
      <Heading size={"md"} textAlign={"center"}>
        Pie Filling - Pumpkin
      </Heading>
      <Text fontSize={18} fontWeight={"bold"}>
        Used Items
      </Text>
      <Text>
        <CheckCircleIcon color={"green"} /> sdfsd dfs
      </Text>
      <Text>
        <CheckCircleIcon color={"green"} /> sdfsd dfs
      </Text>
      <Text>
        <CheckCircleIcon color={"green"} /> sdfsd dfs
      </Text>
      <Text>
        <CheckCircleIcon color={"green"} /> sdfsd dfs
      </Text>
      <Text>
        <CheckCircleIcon color={"green"} /> sdfsd dfs
      </Text>
      <Text>
        <CheckCircleIcon color={"green"} /> sdfsd dfs
      </Text>
      <Text>
        <CheckCircleIcon color={"green"} /> sdfsd dfs
      </Text>
      <Flex minW={"200px"} justifyContent={"flex-end"} gap={"15px"}>
        <>
          <IconButton
            onClick={onOpen}
            colorScheme={"green"}
            icon={<EditIcon />}
          />

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box>Hboddfdffffffffffff</Box>
                <Box>Hboddfdffffffffffff</Box>
                <Box>Hboddfdffffffffffff</Box>
                <Box>Hboddfdffffffffffff</Box>
                <Box>Hboddfdffffffffffff</Box>
                <Box>Hboddfdffffffffffff</Box>
                <Box>Hboddfdffffffffffff</Box>
                <Box>Hboddfdffffffffffff</Box>
                <Box>Hboddfdffffffffffff</Box>
                <Box>Hboddfdffffffffffff</Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>

        <IconButton colorScheme={"red"} icon={<DeleteIcon />} />
      </Flex>
    </Box>
  );
};

export default RecipeCard;
