import { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("hello");

  console.log(text);

  function handleButtonClick() {
    // text 라는 state 값변경
    setText("변경했습니다.");
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>상태 변경!</Button>
      <p>{text}</p>
    </div>
  );
}

export default App;
