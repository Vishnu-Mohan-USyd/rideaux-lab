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
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';

const mock = [
  {
    name: 'Reuben Rideaux',
    title: 'Neuroscientist',
    avatar: '/assets/Reuben.jpg',
    about: 'Dr Reuben Rideaux is a Senior Lecturer and NHMRC Emerging Leadership Fellow at the University of Sydney\'s School of Psychology, and an Honorary Senior Research Fellow at the Queensland Brain Institute',
    social: {
      facebook: 'https://facebook.com/reuben.rideaux',
      github: 'https://reubenrideaux.github.io/',
      twitter: 'https://x.com/reubenrideaux?lang=en'
    }
  },
  {
    name: 'Zak Buhmann',
    title: 'PhD Researcher',
    avatar: '/assets/Zak.png',
    about: 'My PhD explores audiovisual processing, and how our perception of one modality influences our perception of the other. The project aims to use forward modelling techniques on neural data to characterise this multisensory processing.',
    social: {
      facebook: 'https://facebook.com/zak.buhmann',
      github: 'https://github.com/zakbuhmann',
      twitter: 'https://twitter.com/zakbuhmann'
    }
  },
  {
    name: 'Immy Breen',
    title: 'Intern',
    avatar: '/assets/Immy.png',
    about: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    social: {
      facebook: 'https://facebook.com/immy.breen',
      github: 'https://github.com/immybreen',
      twitter: 'https://twitter.com/immybreen'
    }
  },
  {
    name: 'Zoey Hu',
    title: 'Research Assistant',
    avatar: '/assets/Zoey_2.png',
    about: 'I completed my Honours thesis in the lab, where I focused on predictive coding and multisensory integration, and I currently work as a Research Assistant. My research interests lie in understanding how the brain regulates perception, cognition, and motor responses to facilitate effective interaction with the world. I aim to explore the neural mechanisms driving these processes, contributing to a deeper understanding of human perception and cognition.',
    social: {
      facebook: 'https://facebook.com/zoey.hu',
      github: 'https://github.com/zoeyhu',
      twitter: 'https://twitter.com/zoeyhu'
    }
  },
];

const Team = () => {
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
                    height: 'auto',
                    maxHeight: '300px',
                  }
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
                      height: '4.5em',
                      overflow: 'hidden',
                      transition: 'all .3s ease',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '100%',
                        height: '1.5em',
                        background: 'linear-gradient(transparent, white)',
                      },
                      '&:hover::after': {
                        display: 'none'
                      }
                    }}
                  >
                    {item.about}
                  </Typography>
                  <Box marginTop={4}>
                    <Link href={item.social.facebook} target="_blank" rel="noopener noreferrer">
                      <IconButton size={'small'} color={'primary'}>
                        <FacebookIcon />
                      </IconButton>
                    </Link>
                    <Link href={item.social.github} target="_blank" rel="noopener noreferrer">
                      <IconButton size={'small'} color={'primary'}>
                        <GitHubIcon />
                      </IconButton>
                    </Link>
                    <Link href={item.social.twitter} target="_blank" rel="noopener noreferrer">
                      <IconButton size={'small'} color={'primary'}>
                        <TwitterIcon />
                      </IconButton>
                    </Link>
                  </Box>
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