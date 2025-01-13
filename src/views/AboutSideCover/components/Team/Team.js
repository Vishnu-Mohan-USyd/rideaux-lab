/* eslint-disable no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

const mock = [
  {
    name: 'Reuben Rideaux',
    title: 'Group Leader',
    avatar: '/assets/Reuben.jpg',
    about: 'Dr Reuben Rideaux is a Senior Lecturer and NHMRC Emerging Leadership Fellow at the University of Sydney\'s School of Psychology, and an Honorary Senior Research Fellow at the Queensland Brain Institute',
    social: {
      googleScholar: 'https://scholar.google.com.au/citations?user=YcarQiUAAAAJ&hl=en',
      github: 'https://reubenrideaux.github.io/',
      bluesky: 'https://bsky.app/profile/reubenrideaux.bsky.social',
    },
  },
  {
    name: 'Zak Buhmann',
    title: 'PhD Researcher',
    avatar: '/assets/Zak.png',
    about: 'My PhD explores audiovisual processing, and how our perception of one modality influences our perception of the other. The project aims to use forward modelling techniques on neural data to characterise this multisensory processing.',
    social: {
      googleScholar: 'https://scholar.google.com/',
      github: 'https://github.com/zakbuhmann',
      bluesky: 'https://bsky.app/profile/zakbuhmann.bsky.social',
    },
  },
  {
    name: 'Immy Breen',
    title: 'Intern',
    avatar: '/assets/Immy.png',
    about: 'My name is Immy. I am a third-year undergraduate student from Cardiff University currently completing a research placement year at the University of Sydney. My research interests focus on understanding the neural mechanisms underlying sensory processing and how these processes are disrupted in neurological and psychiatric disorders like autism and schizophrenia. I am particularly fascinated by how research can contribute to improving people\'s quality of life by identifying key mechanisms and tailoring interventions to optimize individual performance.',
    social: {
      googleScholar: 'https://scholar.google.com/',
      github: 'https://github.com/immybreen',
      bluesky: 'https://bsky.app/profile/immybreen.bsky.social',
    },
  },
  {
    name: 'Zoey Hu',
    title: 'Research Assistant',
    avatar: '/assets/Zoey_2.png',
    about: 'I completed my Honours thesis in the lab, where I focused on predictive coding and multisensory integration, and I currently work as a Research Assistant. My research interests lie in understanding how the brain regulates perception, cognition, and motor responses to facilitate effective interaction with the world. By utilizing neuroimaging and modeling techniques, I aim to explore the neural mechanisms driving these processes, contributing to a deeper understanding of human perception and cognition.',
    social: {
      googleScholar: 'https://scholar.google.com/',
      github: 'https://github.com/zoeyhu',
      bluesky: 'https://bsky.app/profile/zoeyhu.bsky.social',
    },
  },
  {
    name: 'Vishnu Mohan',
    title: 'MPhil Researcher',
    avatar: '/assets/vish.JPG',
    about: 'I\'m doing my MPhil here. My research interests lie at the intersection of artificial intelligence and neuroscience.',
    social: {
      googleScholar: 'https://scholar.google.com/',
      github: 'https://github.com/zoeyhu',
      bluesky: 'https://bsky.app/profile/vyso.bsky.social',
    },
  },
];

const Team = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          Our team
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Meet the researchers
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              component={Card}
              boxShadow={2}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                position: 'relative',
                zIndex: 1,
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                  zIndex: 2,
                  '& .about-text': {
                    maxHeight: '1000px', // Increased from 300px for longer bios
                    '&::after': {
                      opacity: '0 !important',
                    }
                  },
                },
              }}
            >
              <CardContent>
                <Box
                  component={Avatar}
                  src={item.avatar}
                  height={80}
                  width={80}
                />
                <Box marginTop={4}>
                  <ListItemText primary={item.name} secondary={item.title} />
                  <Typography
                    variant={'subtitle2'}
                    color={'text.secondary'}
                    className="about-text"
                    sx={{
                      maxHeight: '4.5em',
                      overflow: 'hidden',
                      transition: 'all .5s ease',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '100%',
                        height: '2em',
                        background: theme => {
                          const baseColor = theme.palette.background.paper;
                          return `linear-gradient(transparent, ${baseColor})`;
                        },
                        transition: 'opacity .3s ease',
                      },
                    }}
                  >
                    {item.about}
                  </Typography>
                  {/* Show social links for Reuben, Zak, and Vishnu */}
                  {(item.name === 'Reuben Rideaux' || item.name === 'Zak Buhmann' || item.name === 'Vishnu Mohan') && (
                    <Box marginTop={4}>
                      {/* Only show Google Scholar and GitHub for Reuben */}
                      {item.name === 'Reuben Rideaux' && (
                        <>
                          <Link
                            href={item.social.googleScholar}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconButton size={'small'} color={'primary'}>
                              <Box
                                component="img"
                                src="/assets/gscho.svg"
                                alt="Google Scholar"
                                sx={{ width: 24, height: 24 }}
                              />
                            </IconButton>
                          </Link>

                          <Link
                            href={item.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconButton size={'small'} color={'primary'}>
                              <GitHubIcon />
                            </IconButton>
                          </Link>
                        </>
                      )}

                      {/* Bluesky Link for Reuben, Zak, and Vishnu */}
                      <Link
                        href={item.social.bluesky}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconButton size={'small'} color={'primary'}>
                          <Box
                            component="img"
                            src="/assets/bluesky_2.svg"
                            alt="Bluesky"
                            sx={{ width: 24, height: 24 }}
                          />
                        </IconButton>
                      </Link>
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;