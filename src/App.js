
function App() {
  return (
    <div>
        <MyComponent1 />
        {/*
        <div>
            <h1>Hello Component</h1>
        </div>
        */}
        <MyComponent2 />
        {/*
          <p>lorem ipsum</p>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
           </ul>
          */}
    </div>
  );
}

function MyComponent1(){
    return (
        <div>
            <h1>Hello Component</h1>
        </div>
    )
}
function MyComponent2(){
    return (
        <>
            <p>Lorem ipsum dolor sit.</p>
            <ul>
                <li>lorem1</li>
                <li>lorem1</li>
                <li>lorem1</li>
            </ul>
        </>
    )
}

export default App;
