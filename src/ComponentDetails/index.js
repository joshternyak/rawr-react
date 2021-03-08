import React from 'react';
import './style.scss';
import Card from '../ComponentsDirectory/Card';
import Grid from '../ComponentsDirectory/Grid';
import { ThemeContext } from '../contexts/theme';

function ComponentDetails({ name, description, whenToUse, howToUse, examples }) {
  const { dark } = React.useContext(ThemeContext);
  return (
    <div className="ComponentDetails">
      <h1 className="ComponentDetails__name">
        <code
          className="ComponentDetails__name-code"
          style={{ color: dark ? '#242424' : 'inherit' }}
        >
          {'<'}
          {name}
          {'/>'}
        </code>
      </h1>
      <p>{description}</p>
      <h2 className="ComponentDetails__heading">When To Use</h2>
      <p>{whenToUse}</p>
      <h2 className="ComponentDetails__heading">How To Use</h2>
      <p>{howToUse}</p>
      <h2 className="ComponentDetails__heading">Examples</h2>
      <Card title={''} subtitle={''} fullWidth={true} withBoxShadow={true}>
        <Grid justifyContent={'start'} alignItems={'start'}>
          {examples}
        </Grid>
      </Card>
    </div>
  );
}

export default ComponentDetails;
