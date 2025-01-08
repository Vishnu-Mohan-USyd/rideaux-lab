import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    title: 'Behavorial Experiments',
    description:
      'We study how humans process and sometimes misperceive sensory information through carefully designed perceptual experiments. These studies examine complex situations like the "stationary train illusion" to understand how the brain handles conflicting sensory signals, revealing the fundamental rules governing perception.',
    illustration:
      '/assets/eegframe.png',
    illustrationDark:
      '/assets/eegframe.png',
    maxWidth: '60%',  // Smaller size specifically for EEG frame
  },
  {
    title: 'Advanced Brain Imaging',
    description:
      'Using magnetic resonance spectroscopy and other advanced techniques, we map both the chemistry and neural activity patterns that enable perception. Our work has revealed how different brain regions maintain specialized chemical environments and employ distinct neural populations to process sensory information.',
    illustration:
      '/assets/fmripng.png',
    illustrationDark:
      '/assets/fmripng.png',
    maxWidth: '80%',
  },
  {
    label: 'Client portal access',
    title: 'Computational Modeling',
    description:
      'We develop artificial neural networks that help explain why the brain is organized as it is. By training these models on natural images, we show how many properties of biological perception emerge naturally from environmental statistics rather than requiring specialized neural architectures.',
    illustration:
      '/assets/cnnframe.png',
    illustrationDark:
      '/assets/cnnframe_dark.png',
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
          Our work
        </Typography>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} align={'center'}>
          How do we combine information from different senses? <br />
          How does brain chemistry shape our ability to learn and adapt?<br />
          How does the human brain transform visual information into perception?
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
        >
          We attempt to answer these questions by investigating how the brain constructs our perception of the world through a unique combination of computational and biological approaches.
          At the core of our work is understanding how the brain makes sense of ambiguous sensory information -
          like when you're sitting in a stationary train and see another train move, creating an illusion of self-motion.
          We utilize three powerful approaches:
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