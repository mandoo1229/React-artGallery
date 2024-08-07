import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "../../style/main.css";

const AudioPlayer = ({ audioFile }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0);

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

      audio.addEventListener("loadeddata", () => {
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
    setCurrentTime(audio.currentTime);
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

  const handleVolumeChange = (e) => {
    const volumeValue = e.target.value;
    setVolume(volumeValue);
    audioRef.current.volume = volumeValue;
  };

  useEffect(() => {
    (async () => {
      try {
        window.addEventListener("click", function () {});
        const btnEl = document.querySelector(".audio-button");
        setTimeout(() => {
          btnEl.click();
          console.log("setTimeOut 실행");
        }, 3000);
      } catch (error) {
        console.log(error);
      }
      return () => {
        window.removeEventListener("click", function () {});
      };
    })();
  }, []);

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
          onClick={togglePlay}
        >
          {isPlay ? (
            <FaPause className="icon-btn" />
          ) : (
            <FaPlay className="icon-btn" />
          )}
        </button>
      </div>
      <div className="volume-control">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
