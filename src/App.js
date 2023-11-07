import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    axios
      .get("/api/main1/sub3")
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch((err) => console.log(err));
  }, []);
  // useEffect로
  // get 요청 /api/main1/sub3
  // 받은 값으로 message state를 업데이트
  return (
    <div>
      <h1>고객 정보</h1>
      <h1>{customer.customerId}</h1>
      <h1>{customer.customerName}</h1>
      <h1>{customer.address}</h1>
    </div>
  );
}

export default App;
