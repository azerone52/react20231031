import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function MyComp1({ onClick }) {
  return (
    <Box>
      <Button onClick={() => onClick("world")}>텍스트 바꾸기!</Button>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("hello");
  return (
    <div>
      <MyComp1 onClick={setMessage}></MyComp1>
      {/* MyComp1에 있는 버튼이 클릭되면 */}
      <MyComp2 message={message}></MyComp2>
      {/* MyComp2에 있는 텍스트가 바뀌도록 */}
    </div>
  );
}

export default App;
