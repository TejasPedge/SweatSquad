// import React, { useState, useEffect } from "react";

// function RealTimeAlarmWithInput() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const [alarmTime, setAlarmTime] = useState("");
//   const [isAlarmSet, setIsAlarmSet] = useState(false);
//   console.log(alarmTime,"alarmTime")
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentTime = new Date().toLocaleTimeString();
//       setTime(currentTime);

//       if (isAlarmSet && currentTime === alarmTime) {
//         alert("Alarm triggered!");
//         setIsAlarmSet(false);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [isAlarmSet, alarmTime]);

//   function handleAlarmTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setAlarmTime(event.target.value);
//     // alert("Its time for doing something...");
//   }

//   function setAlarm() {
//     setIsAlarmSet(true);
//     alert("Alarm added successfully")
//   }

//   return (
//     <div>
//       <h1>{time}</h1>
//       <input type="time" value={alarmTime} onChange={handleAlarmTimeChange} />
//       <button onClick={setAlarm}>Set Alarm</button>
//     </div>
//   );
// }

// export default RealTimeAlarmWithInput;

