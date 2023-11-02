import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, DownloadIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <Box
      bg={"gray.100"}
      px={{ base: "0px", md: "70px", lg: "120px", xl: "180px" }}
      py="8px"
    >
      <Flex justify={"space-between"}>
        <Flex gap={"7px"} align={"center"}>
          <Box fontWeight={"bold"}>Navbar</Box>
          <Button variant={"ghost"}>Home</Button>
          <Button variant={"ghost"}>Link</Button>
          <Menu>
            <MenuButton
              variant={"ghost"}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Dropdown
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Button variant={"ghost"} isDisabled>
            Disabled
          </Button>
        </Flex>
        <Flex gap={"7px"} align={"center"}>
          <Input size={"sm"} bg={"white"} color={"gray.400"} />
          <Button size={"sm"} variant={"outline"} colorScheme="green">
            Search
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
