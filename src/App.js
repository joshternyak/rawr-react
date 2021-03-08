import React, { useState } from 'react';
import './App.scss';
import ComponentDetails from './ComponentDetails';
import { componentsList } from './componentsList';
import Grid from './ComponentsDirectory/Grid';
import { ThemeContext } from './contexts/theme';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const { theme, toggle, dark } = React.useContext(ThemeContext);

  return (
    <div className="App" style={{
      backgroundColor: theme.backgroundColor,
      color: theme.color,
    }}>
      <Grid justifyContent={'space-between'} alignItems={'start'}>
        <ComponentTabsList
          title={' < Rawr /> React Components'}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <div>
          <button className="App__toggle-theme-btn" onClick={toggle}>
            {!dark ? '🔦' : '💡'}
          </button>
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
        </div>
      </Grid>
    </div>
  );
}

function ComponentTabsList({ setActiveTab, activeTab, title }) {
  const { dark } = React.useContext(ThemeContext);

  return (
    <div className="ComponentTabsList">
      <h3 className="ComponentTabsList__title">{title}</h3>
      {componentsList.map((componentItem, index) => {
        const isActive = activeTab === index;
        return (
          <div
            className={isActive ? 'Component' : 'Component Component--inactive'}
            style={{ color: dark && isActive ? 'black' : 'inherit' }}
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
