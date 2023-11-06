import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 1, name: "에스프레소" },
    { id: 2, name: "카푸치노" },
  ];

  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));

  return (
    <div>
      {/*<List>*/}
      {/*  <ListItem>{arr[0]}</ListItem>*/}
      {/*  <ListItem>{arr[1]}</ListItem>*/}
      {/*  <ListItem>{arr[2]}</ListItem>*/}
      {/*  <ListItem>{arr[3]}</ListItem>*/}
      {/*</List>*/}
      <List>{listItems}</List>
      <List>
        {arr2.map((e, index) => (
          <ListItem key={index}>{e}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
