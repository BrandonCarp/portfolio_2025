"use client";

import React, { useState, useRef, useEffect } from "react";
import loficafe from '../utility/loficafe.mp3'

const MusicButton: React.FC = () => {
  const [music, setMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audioRef only in the browser
    if (!audioRef.current) {
      audioRef.current = new Audio(loficafe);
      audioRef.current.loop = true;
    }
  }, []);

  const playLofi = () => {
    if (music) {
      setMusic(false);
      audioRef.current?.pause();
    } else {
      setMusic(true);
      audioRef.current?.play();
    }
  };

  return (
    <div>
      <button
        onClick={playLofi}
        className=" bg-black text-white px-2  py-1 rounded font-bold hover:-translate-y-1 hover:scale-110 duration-300"
      >
        {music ? "Pause" : "Vibe"}
      </button>
    </div>
  );
};

export default MusicButton;