import React, { useState } from 'react';
import './App.scss';
import './ComponentTabsList/style.scss';
import './ComponentTabsList/Component/style.scss';
import ComponentDetails from './ComponentDetails';
import Card from './ComponentsDirectory/Card';
import Grid from './ComponentsDirectory/Grid';

export const componentsList = [
  {
    name: 'Card',
    description: 'To group information together.',
    when_to_use: 'A card makes grouping information together easy.',
    examples: [
      <Card
        title={'Small Card'}
        subtitle={'This is a small card.'}
        size={'small'}
      />,
      <Card
        title={'Regular Card'}
        subtitle={'This is a regular card.'}
      />,
      <Card
        title={'Large Card'}
        subtitle={'This is a large card.'}
        size={'large'}
      />,
      <Card
        title={'Image Card'}
        subtitle={'This is an image card.'}
        size={'large'}
        img={'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80'}
      />,
    ],
  },
  {
    name: 'Button',
    description: 'To trigger an operation.',
    when_to_use: 'A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.',
    examples: <Card />,
  },
  {
    name: 'Navbar',
    description: 'To make navigating your website easy.',
    when_to_use: 'When you have multiple pages in your application or website.',
    examples: <Card />,
  },
  {
    name: 'Input',
    description: 'To get necessary data from your users.',
    when_to_use: 'When your website needs to get info from your users.',
    examples: <Card />,
  },
  {
    name: 'Dropdown',
    description: 'For organizing a website with many pages',
    when_to_use: 'When your website has many pages in the same category.',
    examples: <Card />,
  },
  {
    name: 'Grid',
    description: 'To organize information on your website.',
    when_to_use: 'When you want to group information in an organized layout.',
    examples: <Card />,
  },
];

function App() {
  const [active, setActive] = useState(0);
  return (
    <div className="App">
      <Grid justifyContent={'space-between'} alignItems={'start'}>
        <ComponentTabsList title={'Rawr React Components'}
                           setActive={setActive} active={active} />
        {componentsList.map((componentItem, index) => {
          const isActive = active === index;
          return isActive &&
            <ComponentDetails
              key={index}
              description={componentItem.description}
              name={componentItem.name}
              whenToUse={componentItem.when_to_use}
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
            onClick={() => setActive(index)} key={index}>
            {componentItem.name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
