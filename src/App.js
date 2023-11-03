import { Button } from "@chakra-ui/react";

function MyButton({ executeClick, children }) {
  return <Button onClick={executeClick}>{children}</Button>;
}
function App() {
  function hello() {
    console.log("hello");
  }
  function greeting() {
    console.log("greeting");
  }
  return (
    <>
      <MyButton executeClick={hello}>hello</MyButton>
      <MyButton executeClick={greeting}>greeting</MyButton>
    </>
  );
}

export default App;
