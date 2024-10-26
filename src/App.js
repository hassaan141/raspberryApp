import './App.css';
import React, {useState, useEffect} from 'react';
import {getGeolocationInfo} from './Geolocation/geolocation';
import { DisplaySalahTime } from './data/waterloo-masjid/displaySalah';
import {PlayAzan} from './playAzan/playAzan.js';

function App() {
  const[latLong, setLatLong] = useState({lat: 0, long: 0});
  const [inRange, setInRange] = useState({isIn: "", distance: 0});
  const[currentTime, setCurrentTime] = useState("");
  const[showTime, setShowTime] = useState("");
  const [isAudioEnabled, setIsAudioEnabled] = useState(false); 
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

  const passTime = () => { 
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const currentTime = hours * 100 + minutes; 

    return 118;
  }

  //Refreshes every page refresh and displays the current location of the computer
  useEffect(() => {
    getGeolocationInfo(setLatLong, setInRange);

    const interval = setInterval(() => {
      setCurrentTime(passTime());
      setShowTime(showCurrentTime())

      console.log("The current time is " + showCurrentTime());
      console.log("Is allowed is " + isAudioEnabled);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isAudioEnabled]);


  console.log("The latLong is " + JSON.stringify(latLong, null, 2));

  return (
    <div className="text-white h-screen bg-slate-500 flex flex-col items-center pt-6 space-y-4">
  <header className="mt-10 flex flex-col items-center space-y-4">
    <div className="text-center text-3xl font-bold text-white px-4 py-2 rounded-lg">
      <DisplaySalahTime />
    </div>

    <div className="text-2xl bg-gray-700 text-white px-4 py-2 rounded-lg">
      {showTime}
    </div>
  </header>

  <div className="flex space-x-4 mt-4">
    <button
      onClick={() => setIsAudioEnabled(true)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md"
    >
      Enable Azan Sound
    </button>
    <button
      onClick={() => setIsAudioEnabled(false)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-md"
    >
      Disable Azan Sound
    </button>
  </div>

  {/* Play Azan Component */}
  <PlayAzan currentTime={currentTime} isAudioEnabled={isAudioEnabled} />
</div>
  );
}

export default App;
