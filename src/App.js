import React from "react";
import { Box, FormControl, Select } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요." multiple h={"120px"}>
            <option value="value1">Lorem.</option>
            <option value="value2">Sed.</option>
            <option value="value3">Fuga.</option>
            <option value="value4">Aliquid?</option>
            <option value="value5">Voluptate!</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
