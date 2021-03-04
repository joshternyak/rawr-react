import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Progress(props) {
  const progressCustomStyles = {
    width: `${props.percent}%`,
  };
  return (
    <div className="Progress">
      <div className="Progress__fill" style={progressCustomStyles} />
    </div>
  );
}

Progress.propTypes = {
  percent: PropTypes.number,
};

Progress.defaultProps = {
  percent: 0,
};


export default Progress;
