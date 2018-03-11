import React from 'react';

import { storiesOf } from '@storybook/react';

import { Grid, Row, Column } from '../index';

storiesOf('Grid', module).add('with 3 rows', () => (
  <Grid>
    <Row>
      <Column size={8}>Header</Column>
    </Row>
    <Row>
      <Column size={1}>This is some stuff!</Column>
      <Column size={5}>Some middle stuff!</Column>
      <Column size={2}>Some end stuff!</Column>
    </Row>
    <Row>
      <Column size={8}>Footer</Column>
    </Row>
  </Grid>
));
