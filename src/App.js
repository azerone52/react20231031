import { Button, Flex } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <>
      <Flex>
        <Button m="10px" variant={"link"}>
          <a href={to}>{children}</a>
        </Button>
        <Button as={"a"} href={to}>
          {children}
        </Button>
      </Flex>
    </>
  );
}

function App() {
  return (
    <>
      <MyLink to={"https://www.naver.com"}>naver로</MyLink>
      <MyLink to={"https://www.daum.net"}>daum으로</MyLink>
    </>
  );
}

export default App;
