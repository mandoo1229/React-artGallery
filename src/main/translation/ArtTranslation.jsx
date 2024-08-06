import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../../style/main.css";

const ArtTranslation = () => {
  const [kor, setKor] = useState("");
  const [usa, setUsa] = useState("");
  const [ja, setJa] = useState("");
  const [cn, setCn] = useState("");

  // 번역 기능입니다.
  function decodeHTMLEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }
  // 한국어 텍스트를 입력하면 각 언어별로 번역됩니다.
  const handlerTranslateTo = async (text, target, setter) => {
    const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
    try {
      const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${encodeURIComponent(
        text
      )}&source=ko&target=${target}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.data && data.data.translations) {
        const translatedText = decodeHTMLEntities(
          data.data.translations[0].translatedText
        );
        setter(translatedText);
      }
    } catch (error) {
      console.error("Translation Error:", error);
      setter("번역 중 오류가 발상했습니다.");
    }
  };

  return (
    <div className="container">
      <div className="art-box">
        <div>한국어</div>
        <TextField
          id="outlined-basic"
          label="내용을 입력하세요."
          variant="outlined"
          value={kor}
          onChange={async (e) => {
            const newValue = e.target.value;
            setKor(newValue);
            await handlerTranslateTo(newValue, "en", setUsa);
            await handlerTranslateTo(newValue, "zh", setCn);
            await handlerTranslateTo(newValue, "ja", setJa);
          }}
        />
        <div>영어</div>
        <TextField
          id="outlined-basic"
          label="내용을 입력하세요."
          variant="outlined"
          value={usa}
          onChange={async (e) => {
            const newValue = e.target.value;
            setKor(newValue);
            await handlerTranslateTo(newValue, "en", setUsa);
          }}
        />
        <div>중국어</div>
        <TextField
          id="outlined-basic"
          label="내용을 입력하세요."
          variant="outlined"
          value={cn}
          onChange={async (e) => {
            const newValue = e.target.value;
            setKor(newValue);
            await handlerTranslateTo(newValue, "zh", setCn);
          }}
        />
        <div>일본어</div>
        <TextField
          id="outlined-basic"
          label="내용을 입력하세요."
          variant="outlined"
          value={ja}
          onChange={async (e) => {
            const newValue = e.target.value;
            setKor(newValue);
            await handlerTranslateTo(newValue, "ja", setJa);
          }}
        />
      </div>
    </div>
  );
};

export default ArtTranslation;
