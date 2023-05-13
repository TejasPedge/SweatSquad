import React, { useState, useEffect } from 'react';

interface Props {
  initialTime: number;
}

const Timer: React.FC<Props> = ({ initialTime }) => {
  const [time, setTime] = useState<number>(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{time}</div>;
};

export default Timer;