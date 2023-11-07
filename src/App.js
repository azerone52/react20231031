import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("/api/main1/sub2")
      .then((response) => response.data)
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);
  // useEffect로
  // get 요청 /api/main1/sub2
  // 받은 값으로 message state를 업데이트
  return <div>{message}</div>;
}

export default App;
