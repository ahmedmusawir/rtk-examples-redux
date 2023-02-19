import React from 'react';
import { Container, Row, Box } from '../components';

function PageTwo() {
  return (
    <Container twClasses={''} FULL={false} pageTitle={'PageTwo'}>
      <Row twClasses={'prose text-center'}>
        <h3>Testing Daisy UI Buttons</h3>
        <Box twClasses={'grid gap-2'}>
          <button className='btn'>Button</button>
          <button className='btn btn-primary'>Button</button>
          <button className='btn btn-secondary'>Button</button>
          <button className='btn btn-accent'>Button</button>
          <button className='btn btn-ghost'>Button</button>
          <button className='btn btn-link'>Button</button>
        </Box>
      </Row>
    </Container>
  );
}

export default PageTwo;
