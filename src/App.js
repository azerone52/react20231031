function App() {
  return (
    <div>
      <MyText
        value={"Hello world"}
        style={{
          backgroundColor: "skyblue",
          color: "orange",
          fontWeight: "bold",
        }}
      />
    </div>
  );
}
function MyText(props) {
  return (
    <div style={props.style}>
      <p>{props.value}</p>
    </div>
  );
}
export default App;
