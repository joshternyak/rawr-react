import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Grid(props) {
  const gridCustomStyles = {
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    display: props.display,
    flexWrap: 'wrap',
  };

  return (
    <div className="Grid" style={gridCustomStyles}>
      {props.children}
    </div>
  );
}

Grid.propTypes = {
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};

Grid.defaultProps = {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
};

export default Grid;
