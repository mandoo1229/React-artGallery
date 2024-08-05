import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import "../style/main.css";

const AudioPlayer = ({ audioFile }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentTime, setCurretnTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();

  useEffect(() => {
    if (audioFile) {
      const audioArrayBuffer = audioFile.AudioStream.buffer;
      const audioURL = URL.createObjectURL(
        new Blob([audioArrayBuffer], { type: "audio/mpeg" })
      );

      const audio = audioRef.current;
      audio.src = audioURL;

      audio.addEventListener("loaddate", () => {
        setDuration(audio.duration);
      });

      audio.addEventListener("timeupdate", updateProgressBar);

      return () => {
        URL.revokeObjectURL(audioURL);
      };
    }
  }, [audioFile]);

  const updateProgressBar = () => {
    const audio = audioRef.current;
    const progress = (audio.currentTime / audio.duration) * 100;

    setCurretnTime(audio.currentTime);
    progressBarRef.current.style.width = `${progress}%`;
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlay) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlay(!isPlay);
  };

  const downloadAudio = () => {};

  return (
    <div className="audio-container">
      <audio ref={audioRef} />
      <div className="progress-container">
        <div
          className="progress-bar"
          ref={progressBarRef}
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
      <div>
        <button
          className="audio-button"
          disabled={!audioFile}
          onClick={() => togglePlay()}
        >
          {isPlay ? (
            <FaPause className="icon-btn" />
          ) : (
            <FaPlay className="icon-btn" />
          )}
        </button>

        <button
          className="audio-button"
          disabled={!audioFile}
          onClick={() => downloadAudio()}
        >
          <FaCloudDownloadAlt className="icon-btn" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
