import { Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick() {
    console.log("바깥 상자 클릭됨");
  }
  function handleInnerBoxClick(e) {
    e.stopPropagation();
    console.log("안쪽 상자 클릭됨");
  }
  function handleButtonClick(e) {
    e.stopPropagation();
    console.log("버튼 클릭됨");
  }
  return (
    <>
      <Center onClick={handleOuterBoxClick} bg={"blue"} w={"200px"}>
        <Center onClick={handleInnerBoxClick} bg={"orange"} w={"100px"}>
          <Button onClick={handleButtonClick} bg={"white"}>
            button
          </Button>
        </Center>
      </Center>
    </>
  );
}

export default App;
