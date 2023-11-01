import { MyElem, city } from "./components/MyElem";
// default -> 중괄호 필요 없음, 아무거나 써도 가능
import myAge from "./components/MyElem";
import MyBox, { person, country } from "./components/MyBox";

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{myAge}</h1>
      <MyBox />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;
