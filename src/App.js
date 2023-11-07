import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { useImmer } from "use-immer";

function App(props) {
  const [person1, setPerson1] = useState({
    name: "son",
    city: "seoul",
    email: "son@gmail.com",
  });

  const [person2, updatePerson2] = useImmer({
    name: "kim",
    city: "jeju",
    email: "kim@naver.com",
  });

  function handleNameChange1(e) {
    const copyPerson1 = { ...person1 };

    copyPerson1.name = e.target.value;
    setPerson1(copyPerson1);
  }

  function handleCityChange1(e) {
    setPerson1({ ...person1, city: e.target.value });
  }

  function handleEmailChange1(e) {
    setPerson1({ ...person1, email: e.target.value });
  }

  function handleNameChange2(e) {
    updatePerson2((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleCityChange2(e) {
    updatePerson2((draft) => {
      draft.city = e.target.value;
    });
  }

  return (
    <div>
      <Box>
        <Input value={person1.name} onChange={handleNameChange1} />
        <Text>이름: {person1.name}</Text>

        <Input value={person1.city} onChange={handleCityChange1} />
        <Text>도시: {person1.city}</Text>

        <Input value={person1.email} onChange={handleEmailChange1} />
        <Text>메일: {person1.email}</Text>
      </Box>

      <hr />
      <hr />

      <Box>
        <Input value={person2.name} onChange={handleNameChange2}></Input>
        <Text>{person2.name}</Text>

        <Input value={person2.city} onChange={handleCityChange2}></Input>
        <Text>{person2.city}</Text>

        <Input
          value={person2.email}
          onChange={(e) =>
            updatePerson2((draft) => {
              draft.email = e.target.value;
            })
          }
        ></Input>
        <Text>{person2.email}</Text>
      </Box>
    </div>
  );
}

export default App;
