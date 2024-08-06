import React, { useEffect } from "react";
import "../../style/main.css";

const Section = ({ text, setText, convertTextToSpeech }) => {
  useEffect(() => {
    (async () => {
      try {
        window.addEventListener("click", function () {});
        const btnEl = document.querySelector(".btn-convert");
        setTimeout(() => {
          btnEl.click();
        }, 1000);
      } catch (error) {
        console.log("에러" + error);
      }
      return () => {
        window.removeEventListener("click", function () {});
      };
    })();
  }, []);

  return (
    <div className="section-container">
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button className="btn-convert" onClick={() => convertTextToSpeech()}>
        Convert to Speech
      </button>
    </div>
  );
};

export default Section;
