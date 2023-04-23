import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Container,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActionFn } from "../redux/authReducer/authActions";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.authReducer);

  const handleLogin = () => {
    if (!email) {
      return toast({
        title: "Email required",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    dispatch(userLoginActionFn({ email }))
      .then((res) => {
        toast({
          title: `${res.payload.message}`,
          duration: 2000,
          status: "success",
          isClosable: true,
          position: "top",
        });
        if (res.payload.token !== undefined) {
          localStorage.setItem("TOKEN", JSON.stringify(res.payload.token));
          navigate("/");
        }
        //  console.log("toe: ", res);
      })
      .catch((err) => {
        toast({
          title: `${err.payload.message}`,
          duration: 2000,
          status: "error",
          isClosable: true,
          position: "top",
        });
        //console.log("er: ", err);
      });
  };
  // console.log("login: ", state);
  return (
    <Container
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      mt={130}
    >
      <Heading fontSize={"2xl"} align={"center"}>
        Sign in to your account
      </Heading>

      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={handleLogin}
        >
          {state.isLoading ? <Spinner /> : "Sign in"}
        </Button>
        {state.isError && (
          <Box as="span" color={"red"}>
            Something went wrong try again
          </Box>
        )}
      </Stack>
    </Container>
  );
}
