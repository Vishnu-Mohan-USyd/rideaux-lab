import React from 'react';
import Slider from 'react-slick';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

const mock = [
  {
    heading: 'How multisensory neurons solve causal inference',
    authors: 'Reuben Rideaux, Katherine R. Storrs, Guido Maiello, Andrew E. Welchman',
    newsTitle:
      'Sitting in a static railway carriage can produce illusory self-motion if the train on an adjoining track moves off. While our visual system registers motion, vestibular signals indicate that we are stationary. The brain is faced with a difficult challenge: is there a single cause of sensations (I am moving) or two causes (I am static, another train is moving)?...',
    avatar: '/assets/msi_4.jpg',
    url: 'https://doi.org/10.1073/pnas.2106235118'
  },
  {
    heading: 'Neural tuning instantiates prior expectations in the human visual system',
    authors: 'William J. Harrison, Paul M. Bays, Reuben Rideaux',
    newsTitle:
      'Perception is often modelled as a process of active inference, whereby prior expectations are combined with noisy sensory measurements to estimate the structure of the world. This mathematical framework has proven critical to understanding perception, cognition, motor control, and social interaction. While theoretical work...',
    avatar: '/assets/nti.jpg',
    url: 'https://doi.org/10.1038/s41467-023-41027-w'
  },
  {
    heading: 'Proscription supports robust perceptual integration by suppression in human visual cortex',
    authors: 'Reuben Rideaux, Andrew E. Welchman',
    newsTitle:
      'Perception relies on integrating information within and between the senses, but how does the brain decide which pieces of information should be integrated and which kept separate? Here we demonstrate how proscription can be used to solve this problem: certain neurons respond best to...',
    avatar: '/assets/proscrip.jpg',
    url: 'https://doi.org/10.1038/s41467-018-03400-y'
  },
  {
    heading: 'Inverted encoding of neural responses to audiovisual stimuli reveals super-additive multisensory enhancement',
    authors: 'Zak Buhmann, Amanda K Robinson, Jason B Mattingley, Reuben Rideaux',
    newsTitle:
      'A central challenge for the brain is how to combine separate sources of information from different sensory modalities to optimally represent objects and events in the external world, such as combining someone’s speech and lip movements to better understand them in a noisy environment...',
    avatar: '/assets/invert.jpg',
    url: 'https://doi.org/10.7554/eLife.97230.2.sa3'
  },
];

const LatestNews = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: !isMd,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: isMd,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position={'relative'} zIndex={2}>
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
            Paper highlights
          </Typography>
          <Typography
            variant="h4"
            align={'center'}
            data-aos={'fade-up'}
            gutterBottom
            sx={{
              fontWeight: 700,
              marginTop: theme.spacing(1),
            }}
          >
            A selection of studies from each
            of the three research streams
          </Typography>
          <Typography
            variant="h6"
            align={'center'}
            color={'text.secondary'}
            data-aos={'fade-up'}
          >
          </Typography>
        </Box>
        <Box
          sx={{
            height: { xs: 'auto', md: 1 },
            '& .slick-slide img': {
              objectFit: 'cover',
            },
            '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
              height: { xs: 'auto', md: 1 },
            },
            '& .slick-prev, & .slick-next': {
              zIndex: 2,
              bottom: 0,
              top: '100%',
              left: '100%',
              right: 0,
              transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
              marginLeft: theme.spacing(-2),
              width: 32,
              height: 32,
              '&:before': {
                fontSize: 32,
                color: 'primary.main',
              },
            },
            '& .slick-prev': {
              marginLeft: theme.spacing(-7),
            },
          }}
        >
          <Slider {...sliderOpts}>
            {mock.map((item, i) => (
              <Box key={i}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    boxShadow: 0,
                    background: 'transparent',
                  }}
                >
                  <CardMedia
                    image={item.avatar}
                    sx={{
                      height: 300,
                      width: '100%',
                      maxWidth: 400,
                      borderRadius: 2,
                      margin: { xs: '0 auto', md: 'none' },
                    }}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginLeft: { sx: 0, md: 2 },
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          textAlign: { xs: 'center', md: 'left' },
                          marginBottom: 1,
                        }}
                      >
                        {item.heading}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontStyle: 'italic',
                          textAlign: { xs: 'center', md: 'left' },
                          marginBottom: 2,
                          color: 'text.secondary',
                        }}
                      >
                        {item.authors}
                      </Typography>
                      <Typography
                        color="text.primary"
                        variant={'h6'}
                        sx={{
                          textAlign: { xs: 'center', md: 'left' },
                        }}
                      >
                        {item.newsTitle}
                      </Typography>
                      <Box
                        marginTop={2}
                        display={'flex'}
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                      >
                        <Button
                          component={Link}
                          to={item.url}
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
                          Read More
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
        <Box display="flex" justifyContent={'center'} marginTop={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/publications"
          >
            View all publications
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LatestNews;