import React, { useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Switch(props) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    if (!props.disabled) {
      setChecked(!checked);
    }
  };
  return (
    <div
      className={`Switch ${checked ? 'Switch--checked' : ''}
      ${props.disabled ? 'Switch--disabled' : ''}
    `}
      onClick={() => handleToggle()}
    >
      {props.checkedChildren &&
      <p
        className="Switch__children Switch__children--checked">{props.checkedChildren}</p>}
      <div
        className={`Switch__btn ${checked ? 'Switch__btn--checked' : ''} `}>
        {props.btnContent && props.btnContent}
      </div>
      {props.unCheckedChildren &&
      <p
        className="Switch__children Switch__children--unchecked">{props.unCheckedChildren}</p>}
    </div>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool,
  btnContent: PropTypes.any,
  disabled: PropTypes.bool,
  unCheckedChildren: PropTypes.string,
  checkedChildren: PropTypes.string,
};

Switch.defaultProps = {
  checked: false,
  btnContent: null,
  disabled: false,
  unCheckedChildren: null,
  checkedChildren: null,
};


export default Switch;
