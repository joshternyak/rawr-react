import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon } from '../../icons.js';

function Message(props) {
  let messageEl;
  if (props.show === true) {
    messageEl =
      <div
        className={`Message 
        ${props.placement ? `Message--${props.placement}` : ''}`}>
        <div className="Message__icon">
          {props.type === 'regular' && <InfoIcon />}
          {props.type === 'success' && <SuccessIcon />}
          {props.type === 'warning' && <WarningIcon />}
          {props.type === 'error' && <ErrorIcon />}
        </div>
        <p className="Message__text">{props.text}</p>
      </div>;
  } else {
    messageEl = null;
  }

  const [messageNode, setMessageNode] = useState(messageEl);
  const messageRef = useRef(messageNode);
  messageRef.current = messageNode;

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageNode(null);
    }, props.duration);
    return () => clearTimeout(timer);
  }, [messageNode]);

  return (
    [messageNode]
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  type: PropTypes.string,
  duration: PropTypes.number,
  show: PropTypes.bool,
  placement: PropTypes.string,
};

Message.defaultProps = {
  text: 'This is a message.',
  icon: '',
  type: 'regular',
  duration: 1000,
  show: true,
  placement: null
};

export default Message;
