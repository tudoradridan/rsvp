"use client";

import { useRef, useState, useEffect } from "react";
import sound from "@/app/assets/sound.mp3";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";

const Audio = () => {
  const [togglePlay, setTogglePlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = (): void => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const stop = (): void => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (togglePlay) {
      play();
    } else {
      stop();
    }
  }, [togglePlay]);

  return (
    <div>
      <audio ref={audioRef} src={sound} />
      <button
        onClick={() => setTogglePlay((prev) => !prev)} // Fix: Assign a function to onClick event handler
        className="mt-4 text-white"
      >
        {togglePlay ? <GiSoundOn size={50} /> : <GiSoundOff size={50} />}
      </button>
    </div>
  );
};

export default Audio;
