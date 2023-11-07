import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ value, onChange }) {
  return (
    <Box>
      {/*<Input value={address} onChange={onChange} />*/}
      <Input value={value} onChange={(e) => onChange(e.target.value)} />
    </Box>
  );
}

function MyText({ value }) {
  return (
    <Box>
      <Text>{value}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  // function handleInputChange(text) {
  //   setAddress(text);
  // }

  return (
    <div>
      <MyInput
        value={address}
        // onChange={(e) => handleInputChange(e.target.value)}
        onChange={setAddress}
      />
      <MyText value={address} />
      <hr />
      <MyInput value={email} onChange={setEmail} />
      <MyText value={email} />
    </div>
  );
}

export default App;
