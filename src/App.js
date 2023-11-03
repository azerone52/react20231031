import { Card, CardBody } from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <>
      <Card color={color} bg={bg}>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
}
function App(props) {
  return (
    <>
      <MyBox color={"pink.200"} bg={"blue.50"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
        repudiandae!
      </MyBox>
    </>
  );
}

export default App;
