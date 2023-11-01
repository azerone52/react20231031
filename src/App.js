function App() {
  return (
    <>
      <MyBox
        p={"10px"}
        m={"10%"}
        color={"orange"}
        text={"2023-11-01"}
        bg={"blue"}
      />
      <MyBox
        p={"20px"}
        m={"20%"}
        color={"pink"}
        text={"벌써 11월"}
        bg={"skyblue"}
      />
    </>
  );
}

function MyBox({ p, m, color, text, bg }) {
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}
export default App;
