import React, { useState } from "react";
import Header from "./Header";
import Section from "./Section";
import AWS from "aws-sdk";
import AudioPlayer from "./AudioPlayer";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_CLIENTID,
  secretAccessKey: process.env.REACT_APP_SECRETKEY,
  region: process.env.REACT_APP_REGION,
});

const polly = new AWS.Polly();

const AwsPolly = () => {
  const [text, setText] = useState("");
  const [audioFile, setAudioFile] = useState();

  const convertTextToSpeech = () => {
    polly.synthesizeSpeech(
      {
        Text: text,
        OutputFormat: "mp3",
        VoiceId: "Seoyeon",
        Engine: "neural",
      },
      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(data);
          setAudioFile(data);
        }
      }
    );
  };

  return (
    <div className="container">
      <Header />

      <Section
        text={text}
        setText={setText}
        convertTextToSpeech={convertTextToSpeech}
      />
      <AudioPlayer audioFile={audioFile} />
    </div>
  );
};

export default AwsPolly;
