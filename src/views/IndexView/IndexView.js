/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { alpha, useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'components/Container';
import Main from 'layouts/Main';
import Typography from '@mui/material/Typography';
import { ArrowLeft, ArrowRight, ChevronUp } from 'lucide-react';  // Added ChevronUp
import {
  Hero,
  Work,
  Streams,
  CaseStudy1,
  CaseStudy2,
  CaseStudy3,
  QuickStart,
  Services,
  Features,
  Benefits,
  GetStarted,
  Courses,
  News
} from './components';

const ArrowButton = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '50%',
  cursor: 'pointer',
  boxShadow: theme.shadows[2],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease, opacity 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const IndexView = () => {
  const theme = useTheme();
  const [currentCase, setCurrentCase] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);  // Added for scroll button
  const totalCases = 3;

  // Keyframes for the slow-moving background (snowfall)
  const keyframes = `
    @keyframes moveSnow {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 0 200vh;
      }
    }
  `;

  // Added scroll event listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentCase((prev) => (prev + 1) % totalCases);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentCase((prev) => (prev - 1 + totalCases) % totalCases);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTransitioning]);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      {/* Inject our keyframes */}
      <style>{keyframes}</style>

      {/* SNOW LAYER */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,                // keep it behind text but above <body> background
          pointerEvents: 'none',    // ignore mouse events
          backgroundImage: 'url("/assets/rideauxlab_logo.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          backgroundPosition: '0 0',
          animation: 'moveSnow 30s linear infinite',
          filter: 'grayscale(100%)',
          // Make it faint
          opacity: 0.05,
        }}
      />

      {/* MAIN CONTENT, now partially transparent so snow is visible behind it */}
      <Main
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // slightly transparent
        }}
      >
        {/* Hero Section */}
        <Hero />
        <Container>
          <Streams />
        </Container>

        <Container>
          <Work />
        </Container>

        {/* Introduction / Explanation */}
        {/*<Container>*/}
        {/*  <Box marginBottom={4}>*/}
        {/*    <Typography*/}
        {/*      sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}*/}
        {/*      gutterBottom*/}
        {/*      color="secondary"*/}
        {/*      align="center"*/}
        {/*    >*/}
        {/*      paper highlights*/}
        {/*    </Typography>*/}
        {/*    <Typography variant="h4" sx={{ fontWeight: 700 }} align="center">*/}
        {/*      Here are a few of the key findings we've pioneered over the last decade*/}
        {/*    </Typography>*/}
        {/*    <Typography*/}
        {/*      variant="h6"*/}
        {/*      component="p"*/}
        {/*      color="text.secondary"*/}
        {/*      align="center"*/}
        {/*      sx={{ mt: 2 }}*/}
        {/*    >*/}
        {/*      We investigate how the brain constructs our perception of the world*/}
        {/*      using both computational and biological approaches…*/}
        {/*    </Typography>*/}
        {/*  </Box>*/}
        {/*</Container>*/}

        {/* Example: A Curved Divider */}
        {/*<Box*/}
        {/*  component="svg"*/}
        {/*  preserveAspectRatio="none"*/}
        {/*  xmlns="http://www.w3.org/2000/svg"*/}
        {/*  x="0px"*/}
        {/*  y="0px"*/}
        {/*  viewBox="0 0 1920 100.1"*/}
        {/*  sx={{*/}
        {/*    width: '100%',*/}
        {/*    marginBottom: theme.spacing(-1),*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <path*/}
        {/*    fill={*/}
        {/*      theme.palette.mode === 'dark' ? '#111827' : 'rgb(240, 247, 255)'*/}
        {/*    }*/}
        {/*    d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"*/}
        {/*  />*/}
        {/*</Box>*/}

        {/*/!* CASE STUDIES (Carousel) *!/*/}
        {/*<Box*/}
        {/*  sx={{*/}
        {/*    position: 'relative',*/}
        {/*    bgcolor:*/}
        {/*      theme.palette.mode === 'dark' ? '#111827' : 'rgb(240, 247, 255)',*/}
        {/*    py: 6,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Container sx={{ position: 'relative', overflow: 'hidden' }}>*/}
        {/*    <Box*/}
        {/*      sx={{*/}
        {/*        display: 'flex',*/}
        {/*        width: '100%',*/}
        {/*        transition: 'transform 0.5s ease-in-out',*/}
        {/*        transform: `translateX(-${currentCase * 100}%)`,*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <Box*/}
        {/*        sx={{*/}
        {/*          flex: '0 0 100%',*/}
        {/*          px: { xs: 2, sm: 3, md: 4 },*/}
        {/*          py: { xs: 2, sm: 3 },*/}
        {/*          boxSizing: 'border-box',*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <CaseStudy1 />*/}
        {/*      </Box>*/}

        {/*      <Box*/}
        {/*        sx={{*/}
        {/*          flex: '0 0 100%',*/}
        {/*          px: { xs: 2, sm: 3, md: 4 },*/}
        {/*          py: { xs: 2, sm: 3 },*/}
        {/*          boxSizing: 'border-box',*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <CaseStudy2 />*/}
        {/*      </Box>*/}

        {/*      <Box*/}
        {/*        sx={{*/}
        {/*          flex: '0 0 100%',*/}
        {/*          px: { xs: 2, sm: 3, md: 4 },*/}
        {/*          py: { xs: 2, sm: 3 },*/}
        {/*          boxSizing: 'border-box',*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <CaseStudy3 />*/}
        {/*      </Box>*/}
        {/*    </Box>*/}

        {/*    /!* Left Arrow *!/*/}
        {/*    <Box*/}
        {/*      sx={{*/}
        {/*        position: 'absolute',*/}
        {/*        top: '50%',*/}
        {/*        left: { xs: 8, sm: 16, md: 24 },*/}
        {/*        transform: 'translateY(-50%)',*/}
        {/*        zIndex: 2,*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <ArrowButton*/}
        {/*        onClick={handlePrev}*/}
        {/*        sx={{*/}
        {/*          p: { xs: 0.5, sm: 1 },*/}
        {/*          opacity: isTransitioning ? 0.5 : 1,*/}
        {/*          pointerEvents: isTransitioning ? 'none' : 'auto',*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <ArrowLeft size={theme.breakpoints.down('sm') ? 18 : 24} />*/}
        {/*      </ArrowButton>*/}
        {/*    </Box>*/}

        {/*    /!* Right Arrow *!/*/}
        {/*    <Box*/}
        {/*      sx={{*/}
        {/*        position: 'absolute',*/}
        {/*        top: '50%',*/}
        {/*        right: { xs: 8, sm: 16, md: 24 },*/}
        {/*        transform: 'translateY(-50%)',*/}
        {/*        zIndex: 2,*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <ArrowButton*/}
        {/*        onClick={handleNext}*/}
        {/*        sx={{*/}
        {/*          p: { xs: 0.5, sm: 1 },*/}
        {/*          opacity: isTransitioning ? 0.5 : 1,*/}
        {/*          pointerEvents: isTransitioning ? 'none' : 'auto',*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <ArrowRight size={theme.breakpoints.down('sm') ? 18 : 24} />*/}
        {/*      </ArrowButton>*/}
        {/*    </Box>*/}

        {/*    /!* Nav dots *!/*/}
        {/*    <Box*/}
        {/*      sx={{*/}
        {/*        position: 'absolute',*/}
        {/*        bottom: 16,*/}
        {/*        left: '50%',*/}
        {/*        transform: 'translateX(-50%)',*/}
        {/*        display: 'flex',*/}
        {/*        gap: 1,*/}
        {/*        zIndex: 2,*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      {[...Array(totalCases)].map((_, index) => {*/}
        {/*        const isActive = currentCase === index;*/}
        {/*        return (*/}
        {/*          <Box*/}
        {/*            key={index}*/}
        {/*            onClick={() => {*/}
        {/*              if (!isTransitioning && currentCase !== index) {*/}
        {/*                setIsTransitioning(true);*/}
        {/*                setCurrentCase(index);*/}
        {/*                setTimeout(() => setIsTransitioning(false), 500);*/}
        {/*              }*/}
        {/*            }}*/}
        {/*            sx={{*/}
        {/*              width: isActive ? 24 : 8,*/}
        {/*              height: 8,*/}
        {/*              borderRadius: 4,*/}
        {/*              bgcolor: isActive ? 'primary.main' : 'grey.300',*/}
        {/*              transition:*/}
        {/*                'width 0.3s ease-in-out, background-color 0.3s ease',*/}
        {/*              cursor: 'pointer',*/}
        {/*              '&:hover': {*/}
        {/*                bgcolor: isActive ? 'primary.dark' : 'grey.400',*/}
        {/*              },*/}
        {/*            }}*/}
        {/*          />*/}
        {/*        );*/}
        {/*      })}*/}
        {/*    </Box>*/}
        {/*  </Container>*/}
        {/*</Box>*/}

        {/* Additional sections */}
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
          <Container>
            <News />
          </Container>
          {/*<Container>*/}
          {/*  <Courses />*/}
          {/*</Container>*/}
          {/*<Container maxWidth={600}>*/}
          {/*  <QuickStart />*/}
          {/*</Container>*/}
          {/*<Container>*/}
          {/*  <Services />*/}
          {/*</Container>*/}
          {/*<Container>*/}
          {/*  <Features />*/}
          {/*</Container>*/}
          {/*<Container>*/}
          {/*  <Benefits />*/}
          {/*</Container>*/}
          <Box
            component="svg"
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
            />
          </Box>
        </Box>

        {/*<Container>*/}
        {/*  <GetStarted />*/}
        {/*</Container>*/}

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <ArrowButton
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 1000,
              p: 1,
              opacity: showScrollTop ? 1 : 0,
              transition: 'all 0.3s ease',
              transform: 'scale(1)',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <ChevronUp size={24} />
          </ArrowButton>
        )}
      </Main>
    </Box>
  );
};

export default IndexView;