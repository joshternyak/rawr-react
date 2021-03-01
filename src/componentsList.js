import React from 'react';
import Card from './ComponentsDirectory/Card';
import Button from './ComponentsDirectory/Button';

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
    examples: [
      <Button type={'primary'}>
        Primary
      </Button>,
      <Button>
        Default
      </Button>,
      <Button type={'dashed'}>
        Dashed
      </Button>,
      <Button type={'danger'}>
        Danger
      </Button>,
      <Button rounded>
        Rounded
      </Button>,
      <Button circle>
        Circle
      </Button>,
      <Button type={'link'}>
        Link
      </Button>,
      <Button onClick={() => alert('You clicked a button!')} type={'primary'}>
        With Event Handler
      </Button>,
      <Button disabled type={'primary'}>
        Disabled
      </Button>,

      <Button size={'large'} type={'primary'}>
        Primary (large)
      </Button>,
      <Button size={'large'}>
        Default (large)
      </Button>,
      <Button size={'large'} type={'dashed'}>
        Dashed (large)
      </Button>,
      <Button size={'large'} type={'danger'}>
        Danger (large)
      </Button>,

      <Button size={'small'} type={'primary'}>
        Primary (small)
      </Button>,
      <Button size={'small'}>
        Default (small)
      </Button>,
      <Button size={'small'} type={'dashed'}>
        Dashed (small)
      </Button>,
      <Button size={'small'} type={'danger'}>
        Danger (small)
      </Button>,
      <Button size={'small'} type={'link'}>
        Link (small)
      </Button>,
    ],
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
