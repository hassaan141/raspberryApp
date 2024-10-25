import './App.css';
import React, {useState, useEffect} from 'react';
import {getGeolocationInfo} from './Geolocation/geolocation';
import { DisplaySalahTime } from './data/waterloo-masjid/displaySalah';
// import {PlayAzzan} from './playAzan/playAzan.js';

function App() {
  const[latLong, setLatLong] = useState({lat: 0, long: 0});
  const [inRange, setInRange] = useState({isIn: "", distance: 0});
  const[currentTime, setCurrentTime] = useState("");
  const arduinoPos={lat: 43.63671, long:-79.73283}

  const showCurrentTime = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1; // Months are zero-based, so add 1
    const date = d.getDate();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    // Format the date and time
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    return `${formattedDate} ${formattedTime}`;
  };

  //Refreshes every page refresh and displays the current location of the computer
  useEffect(() => {
    getGeolocationInfo(setLatLong, setInRange);

    const interval = setInterval(() => {
      setCurrentTime(showCurrentTime());
      // PlayAzzan();
      console.log("The current time is " + showCurrentTime());
    }, 1000);
   
  }, []);


  console.log("The latLong is " + JSON.stringify(latLong, null, 2));

  return (
    <div className="border-2 text-white h-screen flex justify-center bg-slate-500 pt-4">
      <div className="mr-10 mt-10 text-2xl">{showCurrentTime()}
      </div>
      <header className="text-xl font-bold gap-3">
        {/* <p>The computer latitude is {latLong.lat}</p>
        <p>The computer longitude is {latLong.long}</p>
        <p>The arduino longitude is {arduinoPos.lat}</p>
        <p>The arduino longitude is {arduinoPos.long}</p>
        <p>The arduino is within the computer range: {inRange.isIn} and the distance is {inRange.distance} meters.</p>
       */}
        <DisplaySalahTime/>
      </header>
    </div>
  );
}

export default App;
