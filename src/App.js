import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function CComp({ message }) {
  return <Text>{message}</Text>;
}

function AComp({ message }) {
  return <CComp message={message} />;
}

function DComp({ message, onChange }) {
  return <Input value={message} onChange={(e) => onChange(e.target.value)} />;
}

function BComp({ message, onChange }) {
  return <DComp message={message} onChange={onChange} />;
}

function App(props) {
  const [message, setMessage] = useState("message");
  return (
    <div>
      <AComp message={message} />
      <BComp message={message} onChange={setMessage} />
    </div>
  );
}

export default App;
