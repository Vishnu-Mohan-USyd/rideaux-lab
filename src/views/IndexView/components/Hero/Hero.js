import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const images = [
  {
    group: [
      {
        cover:
          '/papers/paper_1_light.jpg',
        coverDark:
          '/papers/dark/paper_1_dark.jpg',
      },
      {
        cover:
          '/papers/paper_2_light.jpg',
        coverDark:
          '/papers/dark/paper_2_dark.jpg',
      },
    ],
  },
  {
    group: [
      {
        cover:
          '/papers/paper_3_light.jpg',
        coverDark:
          '/papers/dark/paper_3_dark.jpg',
      },
      {
        cover:
          '/papers/paper_4_light.jpg',
        coverDark:
          '/papers/dark/paper_4_dark.jpg',
      },
      {
        cover:
          '/papers/paper_5_light.jpg',
        coverDark:
          '/papers/dark/paper_5_dark.jpg',
      },
    ],
  },
  {
    group: [
      {
        cover:
          '/papers/paper_6_light.jpg',
        coverDark:
          '/papers/dark/paper_6_dark.jpg',
      },
      {
        cover:
          '/papers/paper_7_light.jpg',
        coverDark:
          '/papers/dark/paper_7_dark.jpg',
      },
      {
        cover:
          '/papers/paper_8_light.jpg',
        coverDark:
          '/papers/dark/paper_8_dark.jpg',
      },
      {
        cover:
          '/papers/paper_9_light.jpg',
        coverDark:
          '/papers/dark/paper_9_dark.jpg',
      },
    ],
  },
];

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Rideaux
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                Lab
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Our lab combines computational
              modelling, neuroimaging, and psychophysics, to study perception and
              cognition.   Our   research   investigates   ‘canonical’   features   of   neural
              processing, such as cue integration and adaptation, and how these fit
              within current normative models of brain function, such as predictive
              coding. We use a fundamentally multimodal approach to understand these
              neural building blocks of information processing at the circuit level. We
              also seek to develop new methods for understanding brain function and
              dysfunction,   such   as   bio-inspired   artificial   intelligence   systems,   high
              resolution functional MR spectroscopy, and neural decoding.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
            >
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                href={'/agency'}
              >
                View publications
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={'a'}
                  href={'/about-side-cover'}
                  target={'blank'}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  The team
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{ transform: 'translate3d(20%, -50%, 0)' }}
          >
            {images.map((item, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={'img'}
                      loading="lazy"
                      src={
                        theme.palette.mode === 'dark' ? g.coverDark : g.cover
                      }
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
