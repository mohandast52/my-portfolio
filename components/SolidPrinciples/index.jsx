import React from 'react';
import Tracker from './singleResponsibility';

const SolidPrinciples = () => {
  /* singleResponsibility */
  const tracker = new Tracker(200);
  tracker.trackCalories(50);
  tracker.trackCalories(100);
  tracker.trackCalories(100);

  return (
    <div>
      Solid Principles
    </div>
  );
};

export default SolidPrinciples;
