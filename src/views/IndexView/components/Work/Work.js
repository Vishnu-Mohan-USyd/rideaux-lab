import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    title: 'Behavioural and physiological recordings',
    description:
      'We   measure   behavioural   performance   and\n' +
      'physiological reactions, e.g., response time, accuracy, and pupil dilation, in\n' +
      'response to different stimuli and task demands.',
    illustration:
      '/assets/eegframe.png',
    illustrationDark:
      '/assets/eegframe.png',
    maxWidth: '60%',  // Smaller size specifically for EEG frame
  },
  {
    title: 'Neural recordings',
    description:
      'We   measure   neural   activity   using\n' +
      'electroencephalography   and   magnetic   resonance   imaging   and\n' +
      'spectroscopy while participants engage in different tasks.',
    illustration:
      '/assets/fmripng.png',
    illustrationDark:
      '/assets/fmripng.png',
    maxWidth: '80%',
  },
  {
    label: 'Client portal access',
    title: 'Computational modelling',
    description:
      'We build, train, and interrogate biologically\n' +
      'inspired artificial neural networks, e.g., using in silico electrophysiology\n' +
      'and artificial lesions, to understand aspects of brain function that are\n' +
      'unreachable using the tools currently available to study biological systems.',
    illustration:
      '/assets/ann_2.svg',
    illustrationDark:
      '/assets/ann_2.svg',
    maxWidth: '90%',
  },
];

const Work = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          RESEARCH STREAMS
        </Typography>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} align={'center'}>
          Prioritization and integration of sensory information within and between
          sensory modalities. <br />
          Relationships between neurochemistry, cognition, and behaviour.<br />
          Computational, MR imaging/spectroscopy, and neural decoding methods
          development.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
        >
          To address research questions, we use a
          multimodal approach that incorporates three types of methodology:
        </Typography>
        <Box marginTop={2} display={'flex'} justifyContent={'center'}>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
            key={i}
            item
            container
            xs={12}
            spacing={4}
            direction={i % 2 === 1 ? 'row-reverse' : 'row'}
          >
            <Grid item container alignItems={'center'} xs={12} sm={6}>
              <Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
                <Button
                  size={'large'}
                  sx={{ marginTop: 2 }}
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </Box>
                  }
                >
                  Learn more
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              alignItems={'center'}
              xs={12}
              sm={6}
            >
              <Box
                component={'img'}
                src={`${
                  theme.palette.mode === 'light'
                    ? item.illustration
                    : item.illustrationDark
                }`}
                alt={item.title}
                width={1}
                maxWidth={item.maxWidth || '80%'}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;