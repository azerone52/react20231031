import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  //3. context 사용하기
  const message = useContext(MessageContext);
  return <Text>받은 메세지: {message}</Text>;
}
function BComp() {
  return <CComp />;
}
function AComp() {
  return <BComp />;
}
function App(props) {
  const [message, setMessage] = useState("");
  //message state를 CComp에 전달하기
  //1. context 만들기 : createContext();
  //2. context에 state 넣기 : <Context.Provider value={state}></Context.Provider>
  //3. tree 안에서 context 사용하기 : useContext(Context);
  return (
    <div>
      <Button onClick={() => setMessage("바뀐 메세지!")}>메세지 바꾸기</Button>
      {/* AComp의 하위 컴포넌트들에서 message를 사용할 수 있게 됨 */}
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}
//1. context 만들기
// context 이름은 대문자로 시작하고 Context로 끝남 (ex)LoginContext
const MessageContext = createContext(null);
export default App;
