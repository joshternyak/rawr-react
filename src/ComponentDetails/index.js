import React from 'react';
import './style.scss';
import Card from '../ComponentsDirectory/Card';
import Grid from '../ComponentsDirectory/Grid';

function ComponentDetails({ name, description, whenToUse, index, examples }) {
  return (
    <div className="ComponentDetails" key={index}>
      <h1 className="ComponentDetails__name">
        <code className="ComponentDetails__name-code">
          {'<'}
          {name}
          {'/>'}
        </code>
      </h1>
      <p>{description}</p>
      <h2>When To Use</h2>
      <p>{whenToUse}</p>
      <h2>Examples</h2>
      <Card title={''} subtitle={''} fullWidth={true} withBoxShadow={true}>
        <Grid justifyContent={'start'} alignItems={'start'}>
          {examples}
        </Grid>
      </Card>
    </div>
  );
}

export default ComponentDetails;
