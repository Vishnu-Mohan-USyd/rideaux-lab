/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Welcome = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h3"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
        }}
      >
        From action potentials to perception and behaviour:
        Pushing the boundaries of Neuroscience research
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        align={'center'}
        sx={{
          fontWeight: 400,
        }}
      >
        We study the building blocks of sensory and
        cognitive neural processing within the context of normative models of
        brain function that emphasize efficient coding, and their role in neural
        dysfuction.
      </Typography>
      <Typography
        variant="heading3"
        component="p"
        align={'center'}
        sx={{
          fontStyle: 'italic',
          mt: 2
        }}
      >
        We were born too late to explore earth and too early to explore space, but we were born at just the right time to explore the brain.
      </Typography>
    </Box>
  );

  const GridItemPartnersBlock = () => (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'} width={1}>
      {[
        '/assets/usyd_logo.svg',
        '/assets/uq_logo.svg',
        '/assets/arc_2.svg'
      ].map((item, i) => (
        <Box maxWidth={150} width={1} marginTop={2} marginRight={4} key={i}>
          <Box
            component="img"
            height={1}
            width={1}
            src={item}
            alt="..."
            sx={{
              filter:
                theme.palette.mode === 'dark'
                  ? 'brightness(0) invert(0.7)'
                  : 'contrast(0) brightness(0)',
            }}
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12}>
          {/*<Box*/}
          {/*  width="100%"*/}
          {/*  height="100%"*/}
          {/*  display="flex"*/}
          {/*  justifyContent={'center'}*/}
          {/*>*/}
          {/*  <GridItemPartnersBlock />*/}
          {/*</Box>*/}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
