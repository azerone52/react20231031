function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);

  return (
    <>
      <h3>첫번째 주사위: {num1} </h3>
      <h3>두번째 주사위: {num2}</h3>
      {/* === : 변수 타입까지 확인 == : 값만 확인 */}
      <h1>{num1 == num2 ? "당첨!" : "다시 던져 보세요"}</h1>
    </>
  );
  // 두 수를 출력하고
  // 두 수가 같으면 당첨!
  // 두 수가 다르면 다시 던져 보세요
}

export default App;
