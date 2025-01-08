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
    heading: 'But still it moves: static image statistics underlie how we see motion',
    authors: 'Reuben Rideaux, Andrew E. Welchman',
    newsTitle:
      'Seeing movement promotes survival. It results from an uncertain interplay between evolution and experience, making it hard to isolate the drivers of computational architectures found in brains. Here we seek insight into motion perception using a neural network (MotionNet) trained on moving images...',
    avatar: '/assets/mnet_4.png',
    url: 'https://doi.org/10.1523/JNEUROSCI.2760-19.2020'
  },
  {
    heading: 'No balance between glutamate+ glutamine and GABA+ in visual or motor cortices of the human brain',
    authors: 'Reuben Rideaux',
    newsTitle:
      'Theoretical work, supported by electrophysiological evidence, asserts that a balance between excitation and inhibition (E/I) is critical for healthy brain function. In magnetic resonance spectroscopy (MRS) studies...',
    avatar: '/assets/gaba_2.jpg',
    url: 'https://doi.org/10.1016/j.neuroimage.2021.118191'
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
            A few key findings we've pioneered over the last decade
          </Typography>
          <Typography
            variant="h6"
            align={'center'}
            color={'text.secondary'}
            data-aos={'fade-up'}
          >
            We investigate how the brain constructs our perception of the world using both computational and biological approaches…
          </Typography>
          <Box display="flex" justifyContent={'center'} marginTop={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/agency"
            >
              View all publications
            </Button>
          </Box>
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
      </Box>
    </Box>
  );
};

export default LatestNews;