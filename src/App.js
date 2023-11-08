import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub5?id=" + employeeId)
      .then((response) => response.data)
      .then((data) => setEmployee(data))
      .catch((error) => setEmployee(null))
      .finally(setIsLoading(false));
  }, [employeeId]);
  return (
    // 직원 번호를 선택하면 직원의 이름이 출력
    // /api/main1/sub5?id=5
    <div>
      <Select
        placeholder="직원 번호를 선택하세요"
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Select>
      <Box>
        {isLoading && <Spinner />}
        {isLoading || (
          <Text>
            {employee != null
              ? employee.firstName + " " + employee.lastName
              : "직원 정보가 없습니다."}
          </Text>
        )}
      </Box>
    </div>
  );
}

export default App;
