import React, { useState } from 'react';
import './App.scss';
import './ComponentTabsList/style.scss';
import './ComponentTabsList/Component/style.scss';
import ComponentDetails from './ComponentDetails';
import { componentsList } from './componentsList';
import Grid from './ComponentsDirectory/Grid';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="App">
      <Grid justifyContent={'space-between'} alignItems={'start'}>
        <ComponentTabsList
          title={' < Rawr /> React Components'}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        {componentsList.map((componentItem, index) => {
          const isActiveTab = activeTab === index;
          return isActiveTab &&
            <div key={index}>
              <ComponentDetails
                description={componentItem.description}
                name={componentItem.name}
                whenToUse={componentItem.whenToUse}
                howToUse={componentItem.howToUse}
                examples={componentItem.examples}
              />
            </div>
            ;
        })}
      </Grid>
    </div>
  );
}

function ComponentTabsList({ setActiveTab, activeTab, title }) {
  return (
    <div className="ComponentTabsList">
      <h3 className="ComponentTabsList__title">{title}</h3>
      {componentsList.map((componentItem, index) => {
        const isActive = activeTab === index;
        return (
          <div
            className={isActive ? 'Component' : 'Component Component--inactive'}
            onClick={() => setActiveTab(index)}
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
