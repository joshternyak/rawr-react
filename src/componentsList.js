import React from 'react';
import Card from './ComponentsDirectory/Card';
import Button from './ComponentsDirectory/Button';
import Message from './ComponentsDirectory/Message';
import Menu from './ComponentsDirectory/Menu';
import Grid from './ComponentsDirectory/Grid';
import Accordion from './ComponentsDirectory/Accordion';

export const componentsList = [
  {
    name: 'Card',
    description: 'To group information together.',
    whenToUse: 'A card makes grouping information together easy.',
    howToUse: 'The Card component accepts three props: title, subtitle, and size.',
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
    whenToUse: 'A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.',
    howToUse: 'The Button component accepts six props: text (as children),' +
      ' type, size, disabled, rounded, circle.',
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
    name: 'Message',
    description: 'To alert your users.',
    whenToUse: 'When you want to alert your users certain information.',
    howToUse: 'The Message component accepts three props: duration, type, and text',
    examples:
      <>
        <Message
          duration={10000}
          type={'regular'}
          text={'This is a center aligned regular alert.'}
        />
        <Message
          duration={10000}
          placement={'topLeft'}
          type={'success'}
          text={'This is a topLeft aligned success alert.'}
        />
        <Message
          duration={10000}
          placement={'topRight'}
          type={'warning'}
          text={'This is a topRight aligned warning alert.'}
        />
        <Message
          duration={10000}
          placement={'bottomRight'}
          type={'error'}
          text={'This is a bottomRight aligned error alert.'}
        />
        <Message
          duration={10000}
          placement={'bottomLeft'}
          type={'regular'}
          text={'This is a bottomLeft aligned regular alert.'}
        />
      </>,
  },
  {
    name: 'Menu',
    description: 'To make navigating your website easy.',
    whenToUse: 'When you have multiple pages in your application or website.',
    howToUse: 'The Menu component accepts four props: mode, theme, links, and btn.',
    examples:
      <>
        <Menu links={[
          {
            url: '#',
            text: 'Home',
          },
          {
            url: '#',
            text: 'About',
          },
          {
            url: '#',
            text: 'Contact',
          },
          {
            url: '#',
            text: 'Sign Up',
          },
        ]} />
        <Menu theme={'dark'} links={[
          {
            url: '#',
            text: 'Home',
          },
          {
            url: '#',
            text: 'About',
          },
          {
            url: '#',
            text: 'Contact',
          },
          {
            url: '#',
            text: 'Sign Up',
          },
        ]} />
        <Menu btn={'Sign Up'} links={[
          {
            url: '#',
            text: 'Home',
          },
          {
            url: '#',
            text: 'About',
          },
          {
            url: '#',
            text: 'Contact',
          },
          {
            url: '#',
            text: 'Log In',
          },
        ]} />
        <Menu mode={'vertical'} links={[
          {
            url: '#',
            text: 'Home',
          },
          {
            url: '#',
            text: 'About',
          },
          {
            url: '#',
            text: 'Contact',
          },
          {
            url: '#',
            text: 'Sign Up',
          },
        ]} />
      </>
    ,
  },
  {
    name: 'Grid',
    description: 'To organize information on your website.',
    whenToUse: 'When you want to group information in an organized layout.',
    howToUse: 'The Grid component accepts three props: display, justifyContent, and alignItems.',
    examples:
      <>
        <Grid>
          <Card />
          <Card />
          <Card />
        </Grid>
        <Grid>
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </>
    ,
  },
  {
    name: 'Accordion',
    description: 'A content area which can be collapsed and expanded.',
    whenToUse: 'Can be used to group or hide complex regions to keep the page clean.',
    howToUse: 'The Accordion component accepts two props: title and content.',
    examples:
      <div>
        <Accordion
          title="What is your return policy?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Accordion
          title="What is your return policy?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Accordion
          title="What is your return policy?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>,
  },
  {
    name: 'Input',
    description: 'To get necessary data from your users.',
    whenToUse: 'When your website needs to get info from your users.',
    examples: <Card />,
  },
  {
    name: 'Dropdown',
    description: 'For organizing a website with many pages',
    whenToUse: 'When your website has many pages in the same category.',
    examples: <Card />,
  },
];
