import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted orange"}>
        A, repellat!
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Consectetur, et.
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        Architecto, culpa.
      </Box>
      <Box border={"5px solid blue"} borderRadius={"5px"}>
        Id, optio!
      </Box>
      <Box border={"5px solid orange"} borderRadius={"50%"}>
        Non, perspiciatis?
      </Box>
      <Box border={"5px solid gray"} borderRadius={5}>
        Quas, ullam.
      </Box>
      <Box border={"5px solid blue"} borderTopLeftRadius={10}>
        Exercitationem, facilis.
      </Box>
      <Box border={"5px solid orange"} borderBottomRightRadius={10}>
        Aperiam, sed!
      </Box>
      <Box shadow={"10px 5px 5px red"}>Doloribus, sunt.</Box>
      <Box shadow={"lg"}>Saepe, totam.</Box>
      <Box shadow={"xl"}>Consequatur, nemo?</Box>
      <Box shadow={"md"}>Dolorum, quas?</Box>
      <Box bg={"blue.100"} m={"10px"}>
        Ducimus, perspiciatis.
      </Box>
      <Box bg={"pink.100"} m={"20px"}>
        Delectus, ullam.
      </Box>
      <Box bg={"yellow.100"} mx={"50px"}>
        Est, expedita.
      </Box>
      <Box bg={"red.50"} m="1">
        Nemo, sed!
      </Box>
      <Box bg={"green.50"} m="3">
        Eum, sapiente?
      </Box>
      <Box bg={"blue.100"} m="5">
        Cum, voluptatum?
      </Box>
      <Box bg={"orange.100"} m="7">
        Earum, labore!
      </Box>
      <Box bg={"red.400"} px="20px">
        Lorem ipsum.
      </Box>
      <Box bg={"blue.400"} py="20px">
        Incidunt, maiores?
      </Box>
      <Box bg={"purple"} pl="20px">
        Earum, illo?
      </Box>
      <Box bg={"gold"} p={"3"}>
        Aut, odit.
      </Box>
      <Box bg={"beige"} pr={"10px"}>
        Consectetur, voluptatum.
      </Box>
      <div
        style={{ margin: "10px", padding: "10px", backgroundColor: "green" }}
      >
        Lorem ipsum.
      </div>
    </>
  );
}

export default App;
