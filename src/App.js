import MyBox, {
  city,
  country,
  address as yourAddress,
} from "./components/MyBox";
import MyElem, { address as myAddress, email } from "./components/MyElem";
// as로 named export 값을 import 할 때 별칭을 줄 수 있음
function App() {
  return (
    <>
      <h1>{myAddress}</h1>
      <h1>{yourAddress}</h1>
    </>
  );
}

export default App;
