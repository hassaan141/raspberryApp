// import React, {useState, useEffect} from "react";

// export const PlayAzzan = () => {

//     const time = [529, 647, 1207, 341, 526, 645 ]
//     const azanAudio = new Audio("./azan.mp3");

//     const getTime = () => {
//         const d = new Date();
//         const hours = d.getHours();
//         const minutes = d.getMinutes();
//         const currentTime = hours * 100 + minutes; 

//         return hours+minutes;
//     }


//     useEffect(() => {
//         // Function that runs every second to check the current time
//         const interval = setInterval(() => {
//           const currentTime = getTime();
    
//           // If the current time matches any of the prayer times, play the azan
//           if (time.includes(currentTime)) {
//             console.log("It is time to play the Azan");
            
//             // Play the audio only if it's not already playing
//             if (azanAudio.paused) {
//               azanAudio.play();
//             }
//           }
//           console.log(currentTime);
//         }, 1000);

//         return () => clearInterval(interval);
//         }, [time, azanAudio]);

//     return (
//         <div></div>
//     );
// }