import React, { useEffect, useState } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const tickInterval = setInterval(() => {
      console.log("tick");
      setCurrentTime(new Date());
    }, 1000);
    // variable tickInterval is only a reference to setInterval() function
    // setInterval() function is executed whenever the useEffect is executed anyhow

    return () => {
      console.log("Clean up turn off my clock");
      clearInterval(tickInterval);
      // run clearInterval() when component dismounted
    };
  }, []);

  return <span>{currentTime.toLocaleTimeString("en-US")}</span>;
};

export default Clock;
