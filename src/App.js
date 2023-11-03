import { Button } from "@chakra-ui/react";

function App(props) {
  // 함수명 작성 관습
  // handle이벤트명
  // someFunctionName=>handleClick

  // 특별한 일이 없으면 컴포넌트 안에서 작성하도록 하자
  function someFunctionName() {
    console.log("second");
  }
  function handleMouseEnter() {
    console.log("third");
  }
  function handleMouseLeave() {
    console.log("out");
  }
  return (
    <div>
      <Button onClick={() => console.log("first")}>버튼1</Button>
      <Button onClick={someFunctionName}>버튼2</Button>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        버튼3
      </Button>
    </div>
  );
}

export default App;
