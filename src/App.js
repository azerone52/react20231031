import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

function App(props) {
  // 상태(state)가 변경되면(이전 state와 달라짐)되면
  // Component를 다시 그림(re render)

  // state: react가 관리하는 component의 값

  // state를 얻는 방법
  // useState();

  //배열을 리턴함
  //index 0: 현재상태(state)
  //index 1: state를 변경할 수 있는 메소드
  const [state, func] = useState("");
  // const [message, setMessage] = useState("");
  //실제로 상태가 바뀔 때에만  컴포넌트가 re render 됨
  let text = "초기 메시지";
  function handleInputChange(e) {
    text = e.taget.value;
    console.log("text", text);
  }
  function handleButtonClick(e) {
    func("바뀐 상태");
  }
  return (
    <div>
      <Input onChange={handleInputChange} />
      <p>{text}</p>
      <Button onClick={handleButtonClick}>상태 바꾸기</Button>
      <Button onClick={() => func("")}>빈 문자열로 바꾸기</Button>
      <p>{state}</p>
    </div>
  );
}

export default App;
