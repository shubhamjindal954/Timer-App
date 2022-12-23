import React, { useRef, useEffect, useState } from "react";
export default function Countdown() {
  const [num, setNum] = useState(100);
  const [pause, setPause] = useState(false);

  let intervalRef = 0;

  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef);
  }, []);

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef);
    } else {
      intervalRef = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  return (
    <div>
      <h1>Timer</h1>
      <div>{num}</div>
      <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
    </div>
  );
}
