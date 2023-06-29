import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const tickInterval = setInterval(() => {
      console.log('tick');
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      console.log('Clean up turn off my clock');
      clearInterval(tickInterval);
    };
  }, []);

  return <span>{currentTime.toLocaleTimeString('en-US')}</span>;
};

export default Clock;
