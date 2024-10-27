import './App.css';
import React, {useState, useEffect} from 'react';
import {getGeolocationInfo} from './Geolocation/geolocation';
import { DisplaySalahTime } from './data/waterloo-masjid/displaySalah';
import {PlayAzan} from './playAzan/playAzan.js';
import Map from './Geolocation/map.js';

function App() {
  const[latLong, setLatLong] = useState({lat: 0, long: 0});
  const [inRange, setInRange] = useState({isIn: "", distance: 0});
  const[currentTime, setCurrentTime] = useState('');
  const[showTime, setShowTime] = useState("");
  const [isAudioEnabled, setIsAudioEnabled] = useState(true); 
  const arduinoPos={lat: 43.63671, long:-79.73283}


  const passTime = () => { 
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const currentTime = hours * 100 + minutes; 

    return `${currentTime}`;
  }

  //Refreshes every page refresh and displays the current location of the computer
  useEffect(() => {
    getGeolocationInfo(setLatLong, setInRange);

    const interval = setInterval(() => {
      setCurrentTime(passTime());
      setShowTime(new Date().toLocaleString());
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isAudioEnabled]);


  console.log("The latLong is " + JSON.stringify(latLong, null, 2));

  return (
    <div className="text-white h-screen bg-slate-500 flex flex-col items-center space-y-4">
  <header className="mt-10 flex flex-col items-center space-y-4">
    <div className="text-center text-3xl font-bold text-white px-4 py-2 rounded-lg">
      <DisplaySalahTime />
    </div>

    <div className="block text-2xl bg-gray-700 text-white px-4 py-2 rounded-lg">
      {showTime}
    </div>
  </header>

  <PlayAzan currentTime={currentTime}/>

  <div>
    <Map/>
  </div>
</div>




  );
}

export default App;
