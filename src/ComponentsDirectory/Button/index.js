import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Button(props) {
  let buttonNode;
  if (props.type !== 'link') {
    buttonNode =
      <button
        className={`Button ${props.size ? `Button--${props.size}` : ''} 
      ${props.type ? `Button--${props.type}` : ''}
      ${props.rounded ? 'Button--rounded' : ''}
      ${props.circle ? 'Button--circle' : ''}
      `}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.icon && props.icon}
        {props.children}
      </button>;
  } else {
    buttonNode = <a href="#" className="Button Button--link">{props.children}</a>;
  }
  return (
    [buttonNode]
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
};

Button.defaultProps = {
  text: 'Button',
  icon: '',
  type: '',
  size: '',
  disabled: false,
  rounded: false,
  circle: false,
};

export default Button;
