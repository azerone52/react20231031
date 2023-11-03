import { useState } from "react";

function App() {
  let result = 0;
  const [number, setNumber] = useState(0);
  function handleChangeNumber(e) {
    setNumber(number + Number(e.target.value));
  }

  result = number;
  return (
    <>
      <input type="number" onChange={handleChangeNumber} /> +
      <input type="number" onChange={handleChangeNumber} />= {result}
    </>
  );
}

export default App;
