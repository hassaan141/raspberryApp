import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { azaanTime, iqamaTime } from './extractSalahTime.js';

export const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState([]);
  // This should be determined dynamically in a real app
  const isDayLightSaving = true; 

  const timeFormat = (time) => {
    let number = time.toString();
    let hours, minutes;
    if (number.length === 3) {
      hours = parseInt(number.substring(0, 1));
      minutes = number.substring(1, 3);
    } else if (number.length === 4) {
      hours = parseInt(number.substring(0, 2));
      minutes = number.substring(2, 4);
    } else {
      throw new Error("Invalid time format");
    }
   
    hours = isDayLightSaving ? hours + 1 : hours;
    hours = hours === 13 ? 1 : hours;

    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    const azaan = azaanTime();
    const iqama = iqamaTime();
    
    const times = [
      { name: 'Fajr', azaan: timeFormat(azaan.fajr), iqama: timeFormat(iqama.fajr) },
      { name: 'Dhuhr', azaan: timeFormat(azaan.dhuhr), iqama: timeFormat(iqama.dhuhr) },
      { name: 'Asr', azaan: timeFormat(azaan.asr), iqama: timeFormat(iqama.asr) },
      { name: 'Maghrib', azaan: timeFormat(azaan.maghrib), iqama: timeFormat(iqama.maghrib) },
      { name: 'Isha', azaan: timeFormat(azaan.isha), iqama: timeFormat(iqama.isha) },
    ];

    setPrayerTimes(times);
  }, []);

  return (
    <View>
      {prayerTimes.map((prayer, index) => (
        <View key={index}>
          <Text>{prayer.name}</Text>
          <Text>Azaan: {prayer.azaan}</Text>
          <Text>Iqama: {prayer.iqama}</Text>
        </View>
      ))}
    </View>
  );
};
