import React, { useState, useRef } from 'react';
import './style.scss';
import { RightChevron } from '../../icons';

function Accordion(props) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
  }

  return (
    <div className={`Accordion ${setActive}`} onClick={toggleAccordion}>
      <button className="Accordion__title-btn">
        <p className="Accordion__title-btn-text">{props.title}</p>
        <RightChevron
          className={`Accordion__icon 
          ${setActive === 'active' ? 'Accordion__icon--rotated' : ''}`}
          width={10} fill={'#777'}
        />
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }}
           className="Accordion__content">
        <div
          className="Accordion__content-text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}


export default Accordion;
