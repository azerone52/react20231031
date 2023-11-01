// style 적용 방법
// 보통 css 파일
// css module 사용
// chakraui css library
import { MyComp } from "./components/MyComp";
import { MyBox } from "./components/MyBox";
import { MyContainer } from "./components/MyContainer";

function App() {
  return (
    <>
      <MyComp />
      <MyBox />
      <MyContainer />
    </>
  );
}

export default App;
