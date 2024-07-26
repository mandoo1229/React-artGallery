import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import axios from "axios";
import { useParams } from "react-router-dom";

const ImageView = () => {
  const [image, setImage] = useState([]);
  const { id } = useParams();

  // 백엔드에서 API를 가져옵니다.
  useEffect(() => {
    axios
      .get(`${API_URL}/api/view/${id}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setImage(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <div>
      <div>이미지 테스트용</div>
      <img src={`http://localhost:8080/upload/${image.saveNm}`} />
      <div>{image.orgNm}</div>
    </div>
  );
};

export default ImageView;