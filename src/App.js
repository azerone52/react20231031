import React, { createContext, useState } from "react";
import { AComp } from "./AComp";
import { BComp } from "./BComp";

function App(props) {
  const [message, setMessage] = useState("초기 상태 메세지");
  return (
    <div>
      {/* 2. context에 value 넣기 : <Context.Provider value={state}></Context.Provider>*/}
      <MessageContext.Provider
        //프로퍼티명과 변수명이 같으면 프로퍼티명 생략 가능
        // value={{ message: message, setMessage: setMessage }}
        value={{ message, setMessage }}
      >
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}
//1. context 만들기: createContext(null)
export const MessageContext = createContext(null);
export default App;
