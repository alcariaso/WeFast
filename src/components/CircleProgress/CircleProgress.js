

import React from 'react';
import PropTypes from 'prop-types';

const CircleProgress = ({ percentage }) => {
  const strokeDashoffset = 100 - percentage;

  return (
    <svg viewBox="0 0 100 100">
      <circle r="45" cx="50" cy="50" className="base" />
      <circle
        r="45"
        cx="50"
        cy="50"
        className="progress"
        strokeDasharray={`${percentage}, 100`}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

CircleProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircleProgress;