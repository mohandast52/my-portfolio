/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { ParentContainer } from './styles';

const StopWatch = ({ initial = '0', interval = '1' }) => {
  const [isTimerOn, setTimerOn] = useState(false);
  const [duration, setDuration] = useState(parseInt(initial, 10));
  const timerRef = useRef(null);

  const handleStartPause = () => {
    setTimerOn(!isTimerOn);
  };

  const handleStop = () => {
    setDuration(0);
    setTimerOn(false);
  };

  useEffect(() => {
    if (isTimerOn) {
      timerRef.current = setInterval(() => {
        setDuration(prevDuration => {
          const newTime = prevDuration + parseInt(interval, 10);
          if (newTime > 90) {
            setTimerOn(false);
          }
          return newTime;
        });
      }, 1000);
    } else if (timerRef) {
      clearInterval(timerRef.current);
    }
  }, [isTimerOn]);

  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  return (
    <div className="container">
      <div className="circle">
        <div className="show-timer">
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
          :
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
      </div>

      <div className="buttons">
        <button type="button" onClick={handleStartPause}>
          {isTimerOn ? 'Pause' : 'Start'}
        </button>
        <button type="button" onClick={handleStop}>
          Stop
        </button>
      </div>
    </div>
  );
};

/* ------------------------- */
const TimerComponent = () => (
  <ParentContainer className="container-fluid">
    <StopWatch initial="12" interval="2" />
    <StopWatch initial="74" interval="6" />
    <StopWatch initial="9" interval="1" />
  </ParentContainer>
);

export default TimerComponent;
