import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const Main = () => {
  const [imageList, setImageList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/view`)
      .then((response) => {
        console.log(response.data);
        setImageList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>메인페이지</div>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/image")}
        >
          이미지 보기
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/imageinsert")}
        >
          이미지 등록
        </Button>
      </Stack>
    </div>
  );
};

export default Main;
