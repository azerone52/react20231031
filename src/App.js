function App() {
  return (
    <div>
      <MyElem name={"흥민"} age={44} team={"토트넘"} />
      <MyElem name={"강인"} age={44} team={"파리"} />
    </div>
  );
}
function MyElem({ name, age, team }) {
  return (
    <div>
      <h1>이름: {name}</h1>
      <h2>나이: {age}</h2>
      <h2>팀: {team}</h2>
      <br />
    </div>
  );
}
export default App;
