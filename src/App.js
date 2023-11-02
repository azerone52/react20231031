import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={2}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Magni.</Box>
        <Box bg={"gray"}>Tenetur!</Box>
        <Box bg={"blue"}>Assumenda.</Box>
        <Box bg={"green"}>Modi!</Box>
      </Flex>
    </>
  );
}

export default App;
