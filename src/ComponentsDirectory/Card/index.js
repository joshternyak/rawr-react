import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div
      className={`Card ${props.withBoxShadow ? 'Card--with-box-shadow' : ''} 
      ${props.fullWidth ? 'Card--full-width' : ''} 
      ${props.size ? `Card--${props.size}` : ''} `}
    >
      {props.icon && props.icon}
      {props.img &&
      <img className="Card__img" src={props.img} alt={props.img} />
      }
      {props.title &&
      <h2
        className={`Card__title 
        ${props.size ? `Card__title--${props.size}` : ''} `}
      >
        {props.title}
      </h2>
      }
      {props.subtitle &&
      <p className={`Card__subtitle 
        ${props.size ? `Card__subtitle--${props.size}` : ''} `}>
        {props.subtitle}
      </p>
      }

      {props.children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.node,
  withBoxShadow: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.string,
};

Card.defaultProps = {
  title: 'This is a card title',
  subtitle: 'This is a card subtitle',
  img: null,
  withBoxShadow: false,
  fullWidth: false,
  size: 'regular',
};

export default Card;
