import React, { useEffect, useState } from "react";
import azanSound from './azanFajr.mp3';

export const PlayAzan = ({ currentTime }) => {
    const timeInt = parseInt(currentTime);
    console.log(timeInt);
    const time = [529, 647, 1207, 341, 526, 1119]; // Set your prayer times here
    const azanAudio = new Audio(azanSound);
    const [isTime, setIsTime] = useState(false);

    const onPlayAzanClicked = () => {
        azanAudio.play().catch((error) => {
            console.error("Autoplay failed:", error);
        });
    };
    const pauseAzan = () => {
        azanAudio.pause()

    };

    useEffect(() => {
        if (time.includes(timeInt)) {
            console.log("It's time to play the Azan");
            setIsTime(true);
        } else {
            setIsTime(false);
        }
    }, [timeInt]);

    return (
        <div className="">
            {isTime && 
            <div>
                <h6 className="flex align-center justify-center text-xl">It is prayer time</h6>
                <button
                    onClick={() => onPlayAzanClicked(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md"
                >
                    Enable Azan Sound
                </button>
                <button
                    onClick={() => pauseAzan()}
                    className="bg-red-500 ml-4 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-md"
                >
                    Disable Azan Sound
                </button>
            </div>
            }
            
        </div>
    );
};