import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [customerIdList, setCustomerIdList] = useState([]);
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //고객 번호들 가져오기
    axios
      .get("/api/main1/sub6")
      .then((response) => setCustomerIdList(response.data));
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get("api/main1/sub4?id=" + customerId)
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch((err) => setCustomer(null))
      .finally(() => setLoading(false));
  }, [customerId]);
  return (
    <div>
      <Select
        placeholder="고객 번호를 선택하세요"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        {/*option[value=$]{$}*10*/}
        {customerIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>
      <Box>
        {loading && <Spinner />}
        {loading || (
          <Text>
            {customer != null
              ? "고객이름: " + customer.customerName
              : "고객이 없습니다"}
          </Text>
        )}
        {/*{customer == null && <Text>조회한 고객이 없습니다.</Text>}*/}
        {/*{customer != null && <Text>{customer.customerName}</Text>}*/}
      </Box>
    </div>
  );
}

export default App;
