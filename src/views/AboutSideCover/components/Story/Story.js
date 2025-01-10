/* eslint-disable no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Story = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-start'
          }}
        >
          <Typography fontWeight={700} variant={'h5'}>
            Who We Are
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component={'p'} color={'text.secondary'} fontWeight={400}>
            We are a diverse team of scientists, students, and innovators united by our fascination with the human brain. Our lab brings together expertise in neuroscience, psychology, engineering, and computational modeling, creating a vibrant environment where fresh perspectives and interdisciplinary thinking flourish.
            <br />
            <br />
            Together, we design cutting-edge experiments and novel imaging techniques to tackle some of the toughest questions about how we perceive, learn, and interact with the world around us. Above all, we value curiosity, collaboration, and the continual pursuit of deeper scientific insights.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/*<Box display="flex" flexWrap="wrap" justifyContent={'center'}>*/}
          {/*  {[*/}
          {/*    '/assets/usyd_logo.svg',*/}
          {/*    '/assets/uq_logo.svg',*/}
          {/*    '/assets/arc_2.svg'*/}
          {/*  ].map((item, i) => (*/}
          {/*    <Box maxWidth={120} marginTop={2} marginRight={4} key={i}>*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        height={1}*/}
          {/*        width={1}*/}
          {/*        src={item}*/}
          {/*        alt="..."*/}
          {/*        sx={{*/}
          {/*          filter:*/}
          {/*            theme.palette.mode === 'dark'*/}
          {/*              ? 'brightness(0) invert(0.7)'*/}
          {/*              : 'none',*/}
          {/*        }}*/}
          {/*      />*/}
          {/*    </Box>*/}
          {/*  ))}*/}
          {/*</Box>*/}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;