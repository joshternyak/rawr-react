import React, { useState } from 'react';
import './App.scss';
import './ComponentTabsList/style.scss';
import './ComponentTabsList/Component/style.scss';
import ComponentDetails from './ComponentDetails';

export const componentsList = [
  {
    name: 'Button',
    description: 'This is a description for Button.',
  },
  {
    name: 'Navbar',
    description: 'This is a description for Navbar.',
  },
  {
    name: 'Input',
    description: 'This is a description for Input.',
  },
  {
    name: 'Dropdown',
    description: 'This is a description for Dropdown.',
  },
  {
    name: 'Grid',
    description: 'This is a description for Grid.',
  },
];

function App() {
  const [active, setActive] = useState(0);
  return (
    <div className="App">
      <ComponentTabsList setActive={setActive} active={active} />
      {componentsList.map((componentItem, index) => {
        const isActive = active === index;
        return isActive &&
          <ComponentDetails
            key={index}
            description={componentItem.description}
            name={componentItem.name}
          />;
      })}
    </div>
  );
}

function ComponentTabsList({ setActive, active }) {
  return (
    <div className="ComponentTabsList">
      {componentsList.map((componentItem, index) => {
        const isActive = active === index;
        return (
          <div
            className={isActive ? 'Component' : 'Component Component--inactive'}
            onClick={() => setActive(index)} key={index}>
            {componentItem.name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
