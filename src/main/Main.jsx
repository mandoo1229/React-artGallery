import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config";
import "../style/table.css";
import axios from "axios";

const Main = () => {
  const [imageList, setImageList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/view`)
      .then((response) => {
        setImageList(response.data);
        console.log(response.data);

        console.log(imageList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table>
        <caption>미술관 전시 목록</caption>
        <thead>
          <tr>
            <th>NO</th>
            <th>작품 이미지</th>
            <th>작품명</th>
          </tr>
        </thead>
        <tbody>
          {imageList.map((imageList) => (
            <tr
              key={imageList.id}
              onClick={() => navigate(`/view/${imageList.id}`)}
            >
              <td>{imageList.id}</td>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: "0 auto",
                  }}
                  src={`http://localhost:8080/upload/${imageList.saveNm}`}
                />
              </td>
              <td>{imageList.orgNm}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/view")}
        >
          이미지 보기
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/upload")}
        >
          이미지 등록
        </Button>
      </Stack>
    </div>
  );
};

export default Main;