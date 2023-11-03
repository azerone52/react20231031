import { Button } from "@chakra-ui/react";

function MyComp({ children, executeClick }) {
  return <Button onClick={executeClick}>{children}</Button>;
}

function App(props) {
  function func1() {
    console.log("func1 실행");
  }
  let func2 = () => {
    console.log("arrow function 실행 11");
  };
  return (
    <div>
      <MyComp executeClick={func1}>Button1</MyComp>
      <MyComp executeClick={func2}>Button2</MyComp>
      <MyComp
        executeClick={() => {
          console.log("arrow function 실행 22");
        }}
      >
        Button3
      </MyComp>
      {/*중괄호 없는 arrow function=> 실행문이 바로 실행되고 그게 리턴임*/}
      <MyComp executeClick={() => console.log("arrow function 실행 333")}>
        Button4
      </MyComp>
    </div>
  );
}

export default App;
