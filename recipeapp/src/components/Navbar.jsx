import {
  Avatar,
  Box,
  Flex,
  Image,
  Spacer,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isAuth = true;
  return (
    <>
      <Flex
        alignItems={"center"}
        h={["50px", "70px", "70px"]}
        w={"100%"}
        boxSizing={"border-box"}
        px={["3%", "3%", "5%"]}
        boxShadow={"xl"}
        pos={"sticky"}
        top={0}
        bg={"#4e4bf7"}
        zIndex={2}
      >
        <Box fontSize={20} fontWeight={"bold"}>
          RecipeApp
        </Box>
        <Spacer />
        <Box display={"flex"} alignItems={"center"} gap={[4, 8, 12]}>
          <Text color={"white"} fontSize={"18px"}>
            <Link to="/">Items</Link>
          </Text>
          <Text color={"white"} fontSize={"18px"}>
            <Link to="/recipe">Recipe</Link>
          </Text>

          {isAuth ? (
            <>
              <Menu>
                <MenuButton as={Button} px={0} bg={"transparent"}>
                  <Image
                    h={"30px"}
                    w={"30px"}
                    borderRadius={"50%"}
                    src="https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?b=1&s=170667a&w=0&k=20&c=cVOZ3OYMmZQt9_G4TXXiCM3a3oJQlJ-FLGdVO0rCPpY="
                  />
                </MenuButton>
                <MenuList>
                  <MenuGroup title="Profile">
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Payments </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Help">
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                    <MenuItem onClick={toggleColorMode}>
                      {colorMode === "dark" ? "Light" : "Dark"} Theme
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuItem color={"red"}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Text color={"white"} fontSize={"18px"}>
              <Link to="/login">Login</Link>
            </Text>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
