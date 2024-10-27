import React, {useState, useEffect} from 'react';
import { azaanTime, iqamaTime } from './extractSalahTime.js';

export const DisplaySalahTime = () => {

    const[azaan, setAzaan] = useState(azaanTime());
    const[iqama, setIqama] = useState(iqamaTime());
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
        hours = hours == 13 ? 1 : hours;
    
        return `${hours}:${minutes}`;
    };

    useEffect(() => {
        setAzaan(azaanTime());
        setIqama(iqamaTime());
    }, []);

    return(
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
        <h3 className="text-3xl font-semibold text-white dark:text-gray-100 flex justify-center align-center mb-2">Salah Times</h3>
        <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-gray-300">
          <thead className="text-xs text-white uppercase bg-green-700 dark:bg-green-600 dark:text-white">
            <tr>
              <th className="px-6 py-3">Fajr</th>
              <th className="px-6 py-3">Ishraq</th>
              <th className="px-6 py-3">Duhr</th>
              <th className="px-6 py-3">Asr</th>
              <th className="px-6 py-3">Maghrib</th>
              <th className="px-6 py-3">Isha</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:hover:bg-gray-50 dark:hover:bg-gray-600">
              {azaan.map((time, index) => {
                return (
                  <td key={index} className="px-6 py-4">
                    {timeFormat(time)}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    
    )

}