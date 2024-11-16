import salahTime from "./calenderTime.js";

const d = new Date();

let month = d.getMonth();
let day = d.getDate();

const azaanTime=()=>{
    return salahTime[month][day-1][0];
}

const iqamaTime=()=>{

    return salahTime[month][day-1][1];
}


export {azaanTime, iqamaTime};