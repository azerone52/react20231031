import { Center, Circle, Square } from "@chakra-ui/react";
import { BellIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"red.100"} h={"200px"}>
        <Square bg={"blue.100"} w={"100px"} h={"100px"}>
          <PhoneIcon />
        </Square>
      </Center>

      <Center bg={"red.200"} h={"200px"}>
        <Circle bg={"blue.200"} w={"100px"} h={"100px"}>
          <BellIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
