/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Application, Main as MainSection, Newsletter } from './components';

const Career3316 = () => {
  return (
    <Main>
      <Container>
        <MainSection />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Application />
        </Container>
      </Box>
      {/*<Container>*/}
      {/*  <Newsletter />*/}
      {/*</Container>*/}
    </Main>
  );
};

export default Career3316;
