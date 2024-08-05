import React, { useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import axios from "axios";
import Button from "@mui/material/Button";

const ImageInsert = () => {
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const imageHandler = () => {
    const formData = new FormData();

    formData.append("image", image);

    axios
      .post(`${API_URL}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div>
      <div>이미지 등록</div>
      <Button
        component="label"
        // role={undefined}
        variant="contained"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      >
        파일선택
        <VisuallyHiddenInput type="file" />
      </Button>
      <Button
        type="button"
        variant="contained"
        color="success"
        onClick={imageHandler}
      >
        등록
      </Button>
    </div>
  );
};

export default ImageInsert;
