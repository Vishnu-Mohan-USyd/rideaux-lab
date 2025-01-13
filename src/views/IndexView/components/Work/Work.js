/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    title: 'Behavioural & Physiological',
    description:
      'Tracking metrics like response time, accuracy, and pupil dilation.',
    illustration: '/assets/mouse.png',
    illustrationDark: '/assets/mouse.png',
  },
  {
    title: 'Neural Recordings',
    description:
      'EEG, MRI, MRS data acquisition for deeper insights into the brain.',
    illustration: '/assets/fmripng.png',
    illustrationDark: '/assets/fmripng.png',
  },
  {
    title: 'Computational Modelling',
    description:
      'Designing artificial neural networks to test novel hypotheses.',
    illustration: '/assets/ann_2.svg',
    illustrationDark: '/assets/ann_2.svg',
  },
];

const Work = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4} textAlign="center">
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          methodology
        </Typography>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }}>
          Three Key Methodologies
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                component="img"
                src={theme.palette.mode === 'light' ? item.illustration : item.illustrationDark}
                alt={item.title}
                sx={{ maxWidth: '80%', mb: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
                {item.title}
              </Typography>
              <Typography color="text.secondary" paragraph>
                {item.description}
              </Typography>
              {/*<Button*/}
              {/*  size="large"*/}
              {/*  endIcon={*/}
              {/*    <Box*/}
              {/*      component="svg"*/}
              {/*      xmlns="http://www.w3.org/2000/svg"*/}
              {/*      fill="none"*/}
              {/*      viewBox="0 0 24 24"*/}
              {/*      stroke="currentColor"*/}
              {/*      width={24}*/}
              {/*      height={24}*/}
              {/*    >*/}
              {/*      <path*/}
              {/*        strokeLinecap="round"*/}
              {/*        strokeLinejoin="round"*/}
              {/*        strokeWidth={2}*/}
              {/*        d="M17 8l4 4m0 0l-4 4m4-4H3"*/}
              {/*      />*/}
              {/*    </Box>*/}
              {/*  }*/}
              {/*>*/}
              {/*  Learn more*/}
              {/*</Button>*/}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
