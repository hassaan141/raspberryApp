const arduinoPos={lat: 43.63671, long:-79.73283}

  const toRad =(value)=>(value*Math.PI)/180.0;
  const calculateDistance = (lat1, long1, lat2, long2) => {
    //Converting all the latitudes and longitudes to radians
    const earthRadiusMetres = 6371000;
    const lat1Rad = toRad(lat1);
    const lat2Rad = toRad(lat2);
    const latRadDiff = toRad(lat2-lat1);
    const longRadDiff = toRad(long2-long1);

    //Harvesine formula component
    const a = Math.pow(Math.sin(latRadDiff/2),2) + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.pow(Math.sin(longRadDiff/2),2);
    //Angular distance in radians
    const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const distance = earthRadiusMetres * c;
    return distance;
 
  }

  export const getGeolocationInfo = (setLatLong, setInRange) => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("The position is " + JSON.stringify(position, null, 2));
      setLatLong({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
  
      const distanceToArduino = calculateDistance(position.coords.latitude, position.coords.longitude, arduinoPos.lat, arduinoPos.long);
      console.log("The distance is " + distanceToArduino + " metres");
  
      if (distanceToArduino < 500) {
        setInRange({
          isIn: "yes",
          distance: distanceToArduino
        });
      } else {
        setInRange({
          isIn: "no",
          distance: distanceToArduino
        });
      }
    });
  };