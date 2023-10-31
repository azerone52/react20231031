function MyComp() {
  const address = "seoul";
  const country = "korea";
  const phone = "0109999999";
  const age = 44;
  return (
    <>
      <h1>age는 {age}</h1>
      <h1>address는 {address}</h1>
      <h1>country는 {country}</h1>
      <h1>전화번호는 {phone}</h1>
    </>
  );
}

function App() {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
