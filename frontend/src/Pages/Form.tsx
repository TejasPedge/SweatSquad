import React, { useState } from 'react';
// import RealTimeAlarm from './RealTime';
import RealTimeAlarmWithInput from './RealTime';

interface Exercise {
  name: string;
  duration: number;
}

const initialExerciseState: Exercise = {
  name: '',
  duration: 0,
};

const Form = () => {
  const [exercise, setExercise] = useState<Exercise>(initialExerciseState);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExercise({ ...exercise, [name]: name === 'duration' ? parseInt(value, 10) : value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsTimerRunning(true);
    setTimeRemaining(exercise.duration);

        // setTimeout(() => {
        
        // }, timeRemaining); // 5000 milliseconds = 5 seconds
  };

  const tick = () => {
    setTimeRemaining((time) => time - 1);
   
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeRemaining > 0) {
      interval = setInterval(() => tick(), 1000);
    } else if (timeRemaining === 0) {
        // alert("Please wait...");
      setIsTimerRunning(false);
      
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeRemaining]);

  return (
    <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
      {/* <label htmlFor="name">Exercise Name:</label>
      <input type="text" id="name" name="name" value={exercise.name} onChange={handleChange} className='border border-gray-400 bg-blue-100' /> <br /> <br /> 

      <label htmlFor="duration">Duration (seconds):</label>
      <input type="number" id="duration" name="duration" value={exercise.duration} onChange={handleChange} /> <br /> 

      <button type="submit" className='border border-gray-400 bg-pink-100 rounded-md'>Start</button> <br /> <br /> 
      <p>Time Remaining: {timeRemaining}</p> */}
      {
        <RealTimeAlarmWithInput/>
      }
    </form>
  );
};

export default Form;
