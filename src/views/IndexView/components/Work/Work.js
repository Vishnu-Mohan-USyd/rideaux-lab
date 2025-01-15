/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Motion-enabled components
const MotionBox = motion(Box);
const MotionDivider = motion(Divider);
const MotionImg = motion(Box);

// Mock data
const mock = [
  {
    id: 1,
    title: 'Behavioural & Physiological',
    description:
      'Tracking metrics like response time, accuracy, and pupil dilation.',
    illustration: '/assets/mouse.png',
    illustrationDark: '/assets/mouse.png',
  },
  {
    id: 2,
    title: 'Neural Recordings',
    description:
      'EEG, MRI, MRS data acquisition for deeper insights into the brain.',
    illustration: '/assets/fmripng.png',
    illustrationDark: '/assets/fmripng.png',
  },
  {
    id: 3,
    title: 'Computational Modelling',
    description:
      'Designing artificial neural networks to test novel hypotheses.',
    illustration: '/assets/ann_2.svg',
    illustrationDark: '/assets/ann_2.svg',
  },
];

// Animation variants

// Container for staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay between child animations
      delayChildren: 0.2,   // Delay before children start animating
    },
  },
};

// Divider animation
const dividerVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

// Image animation variants
const imageVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: 'spring', stiffness: 300 },
  },
  tap: {
    scale: 0.95,
    rotate: -5,
    transition: { type: 'spring', stiffness: 300 },
  },
};

const Work = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,  // Animate only once
    threshold: 0.1,     // Trigger when 10% of the component is visible
  });

  return (
    <Box>
      {/* Header Section */}
      <Box marginBottom={4} textAlign="center">
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          methodology
        </Typography>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }}>
          Key Methodologies
        </Typography>
      </Box>

      {/* Animated Divider */}
      <MotionDivider
        variants={dividerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        sx={{ my: 4, borderColor: 'secondary.main' }}
      />

      {/* Animated Grid Container */}
      <MotionBox
        component={Grid}
        container
        spacing={4}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        ref={ref}
      >
        {mock.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            {/* Animated Card */}
            <MotionBox
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: theme.shadows[6],
                transition: { type: 'spring', stiffness: 300 },
              }}
              whileTap={{ scale: 0.98 }}
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                textAlign: 'center',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                // Removed 'height: 100%' to allow variable heights
              }}
            >
              {/* Animated Image */}
              <MotionImg
                component="img"
                src={
                  theme.palette.mode === 'light'
                    ? item.illustration
                    : item.illustrationDark
                }
                alt={item.title}
                sx={{ maxWidth: '80%', mb: 2 }}
                variants={imageVariants}
                whileHover="hover"
                whileTap="tap"
              />
              <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
                {item.title}
              </Typography>
              <Typography color="text.secondary" paragraph>
                {item.description}
              </Typography>
              {/* Optional: Learn More Button */}
              <Box mt="auto">
                {/*<Button*/}
                {/*  size="large"*/}
                {/*  endIcon={*/}
                {/*    <Box*/}
                {/*      component="svg"*/}
                {/*      xmlns="http://www.w3.org/2000/svg"*/}
                {/*      fill="none"*/}
                {/*      viewBox="0 0 24 24"*/}
                {/*      stroke="currentColor"*/}
                {/*      width={24}*/}
                {/*      height={24}*/}
                {/*    >*/}
                {/*      <path*/}
                {/*        strokeLinecap="round"*/}
                {/*        strokeLinejoin="round"*/}
                {/*        strokeWidth={2}*/}
                {/*        d="M17 8l4 4m0 0l-4 4m4-4H3"*/}
                {/*      />*/}
                {/*    </Box>*/}
                {/*  }*/}
                {/*  sx={{ mt: 2 }}*/}
                {/*>*/}
                {/*  Learn more*/}
                {/*</Button>*/}
              </Box>
            </MotionBox>
          </Grid>
        ))}
      </MotionBox>
    </Box>
  );
};

export default Work;
