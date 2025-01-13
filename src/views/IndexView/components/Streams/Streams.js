import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionDivider = motion(Divider);

const dividerVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const mock = [
  {
    title: 'Prioritization and integration of sensory information within and between sensory modalities',
    description:
      'This research investigates unisensory and multisensory information processing in the brain, and how this effectively supports perception and action.',
    bgColorLight: '#E1F5FE',
    bgColorDark: '#0D47A1',
    section: 'imaging'
  },
  {
    title: 'Relationships between neurochemistry, cognition, and behaviour.',
    description:
      'This research focuses on understanding the mechanistic role of neural metabolites, particularly GABA and glutamate, in perception, cognition, and action.',
    bgColorLight: '#E8F5E9',
    bgColorDark: '#1B5E20',
    section: 'chem'
  },
  {
    title: 'Computational, MR imaging/spectroscopy, and neural decoding methods development.',
    description:
      'This research seeks to develop new methods, or improve existing methods, for studying the brain.',
    bgColorLight: '#FFF3E0',
    bgColorDark: '#a18511',
    section: 'adaptation'
  },
];

const Streams = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [inViewItems, setInViewItems] = useState({});

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInViewItems(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });

    mock.forEach((_, index) => {
      const element = document.getElementById(`card-${index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLearnMore = (sectionId) => {
    navigate('/agency');
    setTimeout(() => {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        window.scrollTo({
          left: 0,
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <Box>
      {/* Header Section */}
      <Box marginBottom={4}>
        <Typography
          sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}
          gutterBottom
          color="secondary"
          align="center"
        >
          RESEARCH STREAMS
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700 }} align="center">
          We focus on three streams of research
        </Typography>
      </Box>

      {/* Animated Divider */}
      <MotionDivider
        variants={dividerVariants}
        initial="hidden"
        animate={Object.keys(inViewItems).length > 0 ? 'visible' : 'hidden'}
        sx={{ my: 4, borderColor: 'secondary.main', borderWidth: 2 }}
      />

      {/* Colored Cards */}
      <Grid container spacing={4}>
        {mock.map((item, i) => {
          const backgroundColor = theme.palette.mode === 'dark' ? item.bgColorDark : item.bgColorLight;

          return (
            <Grid item xs={12} key={i}>
              <motion.div
                id={`card-${i}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inViewItems[`card-${i}`] ?
                  { opacity: 1, y: 0, scale: 1 } :
                  { opacity: 0, y: 50, scale: 0.9 }
                }
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                <Box
                  sx={{
                    backgroundColor,
                    borderRadius: 2,
                    p: 4,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: {
                      xs: 'column',
                      sm: i % 2 === 1 ? 'row-reverse' : 'row',
                    },
                    alignItems: 'center',
                    opacity: theme.palette.mode === 'dark' ? 0.9 : 1,
                  }}
                >
                  {/* Text Content */}
                  <Box flex={'1 1 auto'}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                    <Button
                      size="large"
                      sx={{ marginTop: 2 }}
                      onClick={() => handleLearnMore(item.section)}
                      endIcon={
                        <Box
                          component="svg"
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
                </Box>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Streams;
