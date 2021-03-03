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
      ${props.className !== '' ? props.className : ''}
      `}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.icon && props.icon}
        {props.children}
      </button>;
  } else {
    buttonNode =
      <a href="#" className="Button Button--link">{props.children}</a>;
  }
  return (
    [buttonNode]
  );
}

Button.propTypes = {
  icon: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  icon: '',
  type: '',
  size: '',
  disabled: false,
  rounded: false,
  circle: false,
  className: '',
};

export default Button;
