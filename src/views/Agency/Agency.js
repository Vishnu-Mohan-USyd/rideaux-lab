/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import { ChevronUp } from 'lucide-react';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Welcome,
  Goby,
  Process,
  Nike2,
  Larq,
  Nike,
  Trek,
  Curology,
  GrantsDisplay,
  Contact,
} from './components';

const Agency = () => {
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    const handleScroll = () => {
      setIsScrollButtonVisible(window.scrollY > 300);
    };

    jarallaxInit();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setTimeout(() => {
      if (!id) {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }
      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });

  return (
    <Main>
      <Box minHeight={'100vh'} display={'flex'} alignItems={'center'} bgcolor={'alternate.main'} marginTop={-13} paddingTop={13}>
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Welcome />
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('agency__portfolio-item--js-scroll')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box id="imaging" className={'jarallax'} data-jarallax data-speed="0.2" position={'relative'} minHeight={'100vh'} display={'flex'} alignItems={'center'}>
        <Box className={'jarallax-img'} sx={styles('/assets/fmri_1.jpeg')} />
        <Container>
          <Goby />
        </Container>
      </Box>
      <Box id="chem" className={'jarallax'} data-jarallax data-speed="0.2" position={'relative'} minHeight={'100vh'} display={'flex'} alignItems={'center'}>
        <Box className={'jarallax-img'} sx={styles('/assets/synapse_2.jpeg')} />
        <Container>
          <Larq />
        </Container>
      </Box>
      {/*<Box minHeight={'100vh'} display={'flex'} alignItems={'center'} bgcolor={'alternate.main'}>*/}
      {/*  <Container>*/}
      {/*    <Process />*/}
      {/*  </Container>*/}
      {/*</Box>*/}
      <Box id="adaptation" className={'jarallax'} data-jarallax data-speed="0.2" position={'relative'} minHeight={'100vh'} display={'flex'} alignItems={'center'}>
        <Box className={'jarallax-img'} sx={styles('/assets/perception.jpeg')} />
        <Container>
          <Nike />
        </Container>
      </Box>
      {/*<Box id="motion" className={'jarallax'} data-jarallax data-speed="0.2" position={'relative'} minHeight={'100vh'} display={'flex'} alignItems={'center'}>*/}
      {/*  <Box className={'jarallax-img'} sx={styles('/assets/motion.jpeg')} />*/}
      {/*  <Container>*/}
      {/*    <Trek />*/}
      {/*  </Container>*/}
      {/*</Box>*/}
      <Box minHeight={'100vh'} display={'flex'} alignItems={'center'} bgcolor={'alternate.main'}>
        <Container>
          <GrantsDisplay />
        </Container>
      </Box>
      {/*<Box id="av" className={'jarallax'} data-jarallax data-speed="0.2" position={'relative'} minHeight={'100vh'} display={'flex'} alignItems={'center'}>*/}
      {/*  <Box className={'jarallax-img'} sx={styles('/assets/av.jpeg')} />*/}
      {/*  <Container>*/}
      {/*    <Curology />*/}
      {/*  </Container>*/}
      {/*</Box>*/}
      {/*<Box id="cogsci" className={'jarallax'} data-jarallax data-speed="0.2" position={'relative'} minHeight={'100vh'} display={'flex'} alignItems={'center'}>*/}
      {/*  <Box className={'jarallax-img'} sx={styles('/assets/cogn_2.jpeg')} />*/}
      {/*  <Container>*/}
      {/*    <Nike2 />*/}
      {/*  </Container>*/}
      {/*</Box>*/}
      <Box minHeight={'100vh'} display={'flex'} alignItems={'center'} bgcolor={'alternate.main'}>
        <Container>
          <Contact />
        </Container>
      </Box>

      {isScrollButtonVisible && (
        <Box
          onClick={() => scrollTo()}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            backgroundColor: theme.palette.background.paper,
            borderRadius: '50%',
            padding: 1,
            cursor: 'pointer',
            boxShadow: 3,
            zIndex: 1000,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <ChevronUp size={24} />
        </Box>
      )}
    </Main>
  );
};

export default Agency;