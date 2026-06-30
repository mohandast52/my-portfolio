import React, { useState } from 'react';
import { FaVideo, FaMicrophone } from 'react-icons/fa';
import Card from './Card';
import { Container, VideoContainer } from './styles';


const Assignment = () => {
  const [step, setStep] = useState(0);

  const handleClick = e => {
    e.preventDefault();
    const count = (step + 1) % 3;
    setStep(count);
  };

  // console.log(step);
  return (
    <Container>
      {step === 1 && (
        <VideoContainer>
          <div className="video-info">
            <div className="message">Please Check Your Audio & Video</div>
            <div className="icons">
              <FaMicrophone />
              <FaVideo />
            </div>
          </div>
        </VideoContainer>
      )}

      <Card step={step} handleClick={handleClick} />
    </Container>
  );
};

export default Assignment;
