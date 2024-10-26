import React, { useEffect, useState } from "react";
import azanSound from './azan.mp3';


export const PlayAzan = ({ currentTime, isAudioEnabled }) => {
    console.log("The current time is " + currentTime);
  const time = [529, 647, 1207, 341, 526, 118]; // Set your prayer times here
  const azanAudio = new Audio(azanSound);
//   const [lastPlayedTime, setLastPlayedTime] = useState(null); 

  useEffect(() => {
    const checkTimeAndPlay = () => {
    //   if (time.includes(currentTime) && isAudioEnabled && currentTime !== lastPlayedTime) {
      if (time.includes(currentTime) && isAudioEnabled) {
        console.log("It's time to play the Azan");
        azanAudio.play().catch((error) => {
        });
        // setLastPlayedTime(currentTime);
      }else if (!isAudioEnabled) {
        azanAudio.pause();
        azanAudio.currentTime = 0; // Reset the audio to the beginning
      }
    };

    checkTimeAndPlay();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkTimeAndPlay();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);


    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [currentTime, isAudioEnabled]); 

  return <div></div>;
};