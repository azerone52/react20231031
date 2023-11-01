import {
  MyBox,
  MyContainer,
  MyElem,
  name,
  address,
  person,
} from "./components/MyBox";

function App() {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);
  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}

export default App;
