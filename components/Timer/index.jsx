import React, { useState, useRef, useEffect } from 'react';
import { ParentContainer } from './styles';

const Timer = () => {
  const [isTimerOn, setTimerOn] = useState(false);
  const [duration, setDuration] = useState(50);
  const timerRef = useRef(null);

  const handleStart = () => {
    setTimerOn(true);
  };

  const handleStop = () => {
    setTimerOn(false);
  };

  useEffect(() => {
    if (isTimerOn) {
      timerRef.current = setInterval(() => {
        setDuration(prevDuration => prevDuration + 1);
      }, 1000);
    } else if (timerRef) {
      clearInterval(timerRef.current);
    }
  }, [isTimerOn]);

  // const hrs = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  return (
    <ParentContainer>
      <div className="container">
        <div className="circle">
          <div className="show-timerRef">
            <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
            :
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
          </div>
        </div>

        <div className="buttons">
          <button type="button" onClick={handleStart}>
            Start
          </button>
          <button type="button" onClick={handleStop}>
            Stop
          </button>
        </div>
      </div>
    </ParentContainer>
  );
};

export default Timer;

// https://codepen.io/Basit600/pen/YzwRaRp?editors=0010
