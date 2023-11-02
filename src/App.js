import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Quasi.</Button>
      <Button colorScheme="yellow">Exercitationem.</Button>
      <Button colorScheme="orange">Eligendi?</Button>
      <Button bgColor={"orange.300"}>Temporibus.</Button>
      <Button colorScheme="teal" size={"sm"}>
        Modi.
      </Button>
      <Button colorScheme="facebook" size={"lg"}>
        Vel?
      </Button>
      <Button colorScheme="telegram" variant={"outline"}>
        Debitis!
      </Button>
      <Button colorScheme="orange" variant={"ghost"}>
        Molestiae.
      </Button>
      <Button variant={"link"}>Quam?</Button>
      <Button leftIcon={<EmailIcon />}>Similique.</Button>
      <Button rightIcon={<ArrowRightIcon />}>Quidem.</Button>
      <Button isLoading>Commodi!</Button>
      <Button isLoading loadingText={"전송중"}>
        Ab!
      </Button>
    </>
  );
}

export default App;
