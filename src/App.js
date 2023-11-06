import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function handleButtonClick1() {
    setNumber(number + 1);
  }

  function handleButtonClick2() {
    setNumber(number - 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <Button onClick={handleButtonClick1}>증가</Button>
      <Button onClick={handleButtonClick2}>감소</Button>
    </>
  );
}

export default App;
