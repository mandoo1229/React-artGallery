import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../../config";
import Button from "@mui/material/Button";

const SignUp = () => {
  const [loginId, setLoginId] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [createDate, setCreateDate] = useState();

  const signUpHandler = () => {
    const data = {
      loginId: loginId,
      password: password,
      name: name,
      createDate: createDate,
    };

    axios
      .post(`${API_URL}/api/admin/signup`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>회원가입</div>
      <div>ID</div>
      <input type="text" onChange={(e) => setLoginId(e.target.value)} />
      <div>PASSWORD</div>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <div>NAME</div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>CREATEDATE</div>
      <input type="text" onChange={(e) => setCreateDate(e.target.value)} />
      <Button
        type="button"
        variant="contained"
        color="success"
        onClick={signUpHandler}
      >
        등록
      </Button>
    </div>
  );
};

export default SignUp;
