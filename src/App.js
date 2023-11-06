import React from "react";
import { useImmer } from "use-immer";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";
let nextId = 1;
function App(props) {
  const [items, updateItems] = useImmer([]);

  function handleButtonClick(todo) {
    updateItems((draft) => {
      draft.push({ id: nextId++, done: false, text: todo });
    });
  }
  console.log("id", nextId);
  console.log(items);
  function handleDoneButton(id) {
    updateItems((draft) => {
      for (let i = 0; i < draft.length; i++) {
        if (draft[i].id === id) {
          draft[i].done = true;
        }
      }
    });
    // for (let i = 0; i < items.length; i++) {
    //   if (items[i].id == id) {
    //     items[i].done = true;
    //   }
    // }
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("자바공부")}>자바공부</Button>
      <Button onClick={() => handleButtonClick("점심먹기")}>점심먹기</Button>
      <Button onClick={() => handleButtonClick("잠자기")}>잠자기</Button>

      <Box>
        <UnorderedList>
          {items.map((item) => (
            <ListItem
              key={item.id}
              textDecoration={item.done ? "line-through" : "none"}
            >
              {item.text}
              <Button onClick={() => handleDoneButton(item.id)}>완료</Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
