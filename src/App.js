import React from "react";
import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
            <FormHelperText>띄어쓰기 없이 입력하세요</FormHelperText>
          </FormControl>
        </Box>
      </Center>
      <Center mt={5}>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>하나만 선택하세요 </FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">Lorem1.</Radio>
                <Radio value="value2">Lorem2.</Radio>
                <Radio value="value3">Lorem3.</Radio>
                <Radio value="value4">Lorem4.</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>

      <Center>
        <Box w={"480px"}>
          <FormControl>
            <CheckboxGroup>
              <Flex gap={5}>
                <Checkbox colorScheme="blue">Lorem.</Checkbox>
                <Checkbox colorScheme="orange">Ipsam!</Checkbox>
                <Checkbox colorScheme="purple">Doloribus.</Checkbox>
              </Flex>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;
