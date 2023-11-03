function App() {
  function handleClick(e) {
    //a 태그 클릭시 네이버로 이동하도록
    e.preventDefault();
    // console.log("테스트");
    window.location.href = "https://www.naver.com";
  }
  return (
    <>
      <a href="http://www.daum.net" onClick={handleClick}>
        다음으로 이동
      </a>
    </>
  );
}

export default App;
