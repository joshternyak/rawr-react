import React, { useState } from 'react';
import './App.scss';
import './ComponentTabsList/style.scss';
import './ComponentTabsList/Component/style.scss';
import ComponentDetails from './ComponentDetails';
import { componentsList } from './componentsList';
import Grid from './ComponentsDirectory/Grid';

function App() {
  const [active, setActive] = useState(0);
  return (
    <div className="App">
      <Grid justifyContent={'space-between'} alignItems={'start'}>
        <ComponentTabsList
          title={' < Rawr /> React Components'}
          setActive={setActive}
          active={active}
        />
        {componentsList.map((componentItem, index) => {
          const isActive = active === index;
          return isActive &&
            <ComponentDetails
              key={index}
              description={componentItem.description}
              name={componentItem.name}
              whenToUse={componentItem.whenToUse}
              howToUse={componentItem.howToUse}
              examples={componentItem.examples}
            />;
        })}
      </Grid>
    </div>
  );
}

function ComponentTabsList({ setActive, active, title }) {
  return (
    <div className="ComponentTabsList">
      <h3 className="ComponentTabsList__title">{title}</h3>
      {componentsList.map((componentItem, index) => {
        const isActive = active === index;
        return (
          <div
            className={isActive ? 'Component' : 'Component Component--inactive'}
            onClick={() => setActive(index)}
            key={index}
          >
            {componentItem.name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
