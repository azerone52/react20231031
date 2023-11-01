// export된 컴포넌트(변수, 함수, 객체)를 import 해서 사용
import { MyElem } from "./components/MyElem";
import { MyComp } from "./components/MyComp";

function App() {
  return (
    <>
      <MyComp />
      <MyElem />
    </>
  );
}

export default App;
