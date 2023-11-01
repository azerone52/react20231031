import Box, { color as boxColor } from "./component/Box";
import Container, { color } from "./component/Container";
function App() {
  return (
    <div>
      <Box style={{ color: boxColor }} />
      <Container style={{ color: color }} />
    </div>
  );
}

export default App;
