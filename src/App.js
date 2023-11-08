import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [employeeList, setEmployeeList] = useState([1]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub5?id=" + employeeId)
      .then((response) => response.data)
      .then((data) => {
        console.log("data", data);
        console.log("data.responseEntity", data.responseEntity);
        console.log("data.employeeList", data.employeeList);
      })
      // .then((data) => {
      //   setEmployee(data.responseEntity);
      //   setEmployeeList(data.employeeList);
      // })
      .catch((error) => setEmployee(null))
      .finally(setIsLoading(false));
  }, [employeeId]);

  console.log(employeeList);
  return (
    // 직원 번호를 선택하면 직원의 이름이 출력
    // /api/main1/sub5?id=5
    <div>
      <Select
        placeholder="직원 번호를 선택하세요"
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        {employeeList.map((e) => (
          <option value={e}>{e}</option>
        ))}
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
