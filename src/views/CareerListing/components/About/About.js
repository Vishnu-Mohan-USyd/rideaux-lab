import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const About = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          color={'text.secondary'}
          sx={{ textTransform: 'uppercase' }}
          variant={'subtitle2'}
          fontWeight={600}
        >
          About
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          About our lab
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid
          item
          container
          justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
          xs={12}
          md={6}
        >
          <Typography color={'text.secondary'}>
            We are a pioneering research team investigating how the human brain processes and integrates visual
            information. Our work combines cutting-edge neuroimaging techniques, computational modeling, and brain
            stimulation methods to understand the fundamental mechanisms of perception.
            <br />
            <br />
            Our research has revealed groundbreaking insights into how the brain combines different visual cues, the
            role of brain chemistry in perception, and how neural circuits maintain robust processing even when faced
            with conflicting information. We're particularly interested in understanding how neurotransmitters like GABA
            and glutamate shape visual processing and perceptual integration.

          </Typography>
        </Grid>
        <Grid item container xs={12} md={6}>
          <Typography color={'text.secondary'}>
            We take pride in our collaborative, interdisciplinary approach. Our team members bring expertise in
            experimental psychology, neuroimaging, computational neuroscience, and clinical applications. We foster an
            environment where innovative ideas flourish and rigorous scientific methods help us uncover new insights
            about brain function.
            <br />
            <br />
            If you're passionate about understanding how the brain creates our visual experience of the world, and
            you're excited about using multiple research techniques to tackle complex questions, we'd love to hear from
            you. We're looking for curious, motivated individuals who can contribute to our mission of advancing our
            understanding of human perception.
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
        >
          <Box
            component={'img'}
            loading="lazy"
            height={1}
            width={1}
            maxHeight={{ xs: 300, sm: 400, md: 520 }}
            borderRadius={2}
            src={'https://assets.maccarianagency.com/backgrounds/img1.jpg'}
            alt="..."
            sx={{
              objectFit: 'cover',
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
