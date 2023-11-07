import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ address, onChange }) {
  return (
    <Box>
      {/*<Input value={address} onChange={onChange} />*/}
      <Input value={address} onChange={(e) => onChange(e.target.value)} />
    </Box>
  );
}

function MyText({ address }) {
  return (
    <Box>
      <Text>{address}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");

  // function handleInputChange(text) {
  //   setAddress(text);
  // }

  return (
    <div>
      <MyInput
        address={address}
        // onChange={(e) => handleInputChange(e.target.value)}
        onChange={setAddress}
      />
      <MyText address={address} />
    </div>
  );
}

export default App;
