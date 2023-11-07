import React, { useContext } from "react";
import { Input } from "@chakra-ui/react";
import { TextContext } from "../App";

export function MyInput() {
  const { text, setText } = useContext(TextContext);
  return <Input value={text} onChange={(e) => setText(e.target.value)} />;
}
