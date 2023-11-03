import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  // let number = 0;
  function handleClick() {
    // number++;
    // document.querySelector(".txt").value = number;
    //리액트가 클래스명 등을 관리하기 때문에 유효하지 않음
    setNumber(number + 1);
  }
  return (
    <div>
      <Button onClick={handleClick}>바꾸기</Button>
      <Text className="txt">{number}</Text>
    </div>
  );
}

export default App;
