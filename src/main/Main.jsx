import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import "../style/table.css";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>메인 페이지</div>

      <Button
        variant="contained"
        color="success"
        onClick={() => navigate("/signup")}
      >
        회원가입
      </Button>
    </div>
  );
};

export default Main;
