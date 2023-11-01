function App() {
  return (
    <>
      <MyComp name={"흥민"} address="신촌" age={33} city="서울" />
      <MyComp address="강남" age={22} city="부산" />
      <MyComp address="은행동" city="대전" />
    </>
  );
}

function MyComp({ name = "anonymous", address, city, age = 100 }) {
  return (
    <div>
      <p>
        {name}은 {age}세 이고 {address}, {city}에 산다
      </p>
    </div>
  );
}

export default App;
