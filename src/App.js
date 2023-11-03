import { Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      {/*첫번째 버튼 클릭시 first 콘솔에 출력 두번째 버튼은 second*/}
      <Button onClick={() => console.log("first")}>Lorem.</Button>
      <Button onClick={() => console.log("second")}>ipsum.</Button>
    </>
  );
}

export default App;
