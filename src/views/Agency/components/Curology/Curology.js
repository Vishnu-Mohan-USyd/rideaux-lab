/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link as MuiLink,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Curology = () => {
  const theme = useTheme();

  const publications = [
    {
      title: 'Inverted encoding of neural responses to audiovisual stimuli reveals super-additive multisensory enhancement (2024)',
      authors: 'Zak Buhmann, Amanda K Robinson, Jason B Mattingley and Reuben Rideaux',
      url: 'https://doi.org/10.7554/eLife.97230.2',
      description:
        'A central challenge for the brain is how to combine separate sources of information from different sensory modalities to optimally represent objects and events in the external world, such as combining someone’s speech and lip movements to better understand them in a noisy environment. At the level of individual neurons, audiovisual stimuli often elicit super-additive interactions, where the neural response is greater than the sum of auditory and visual responses. However...',
    },
    {
      title: 'How multisensory neurons solve causal inference (2021)',
      authors: 'Reuben Rideaux, Katherine R. Storrs, Guido Maiello and Andrew E. Welchman',
      url: 'https://doi.org/10.1073/pnas.2106235118',
      description:
        'Sitting in a static railway carriage can produce illusory self-motion if the train on an adjoining track moves off. While our visual system registers motion, vestibular signals indicate that we are stationary. The brain is faced with a difficult challenge: is there a single cause of sensations (I am moving) or two causes (I am static, another train is moving)? If a single cause, integrating signals produces a more precise estimate of self-motion, but if not, one cue should be ignored. In many cases, this process of causal inference works without error, but how does the brain achieve it?...',
    },
  ];

  return (
    <Box>
      {/* Original Curology heading */}

      {/* Outer box for full-width background (heading + description) */}
      <Box
        sx={{
          width: '100vw',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          py: 4,
          mb: 4,
        }}
      >
        {/* Inner box to constrain text and center it */}
        <Box
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            px: 2,
          }}
        >
          <Typography
            variant="h3"
            align="left"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: theme.palette.common.white,
              textTransform: 'uppercase',
              mt: 0,
            }}
          >
            Multisensory Integration (Audiovisual) and Causal Inference
          </Typography>
          <Typography
            variant="h5"
            component="p"
            align="left"
            sx={{
              color: theme.palette.common.white,
              marginBottom: 0,
            }}
          >
            These studies highlight how information from multiple senses (vision, audition) is combined in the brain, often examining super-additive effects or how the brain infers causal relationships for multisensory stimuli.
          </Typography>
        </Box>
      </Box>

      {/* Publications as accordions */}
      {publications.map((pub, index) => (
        <Accordion
          key={index}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            boxShadow: 'none',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            marginBottom: 2,
            '&:before': {
              display: 'none',
            },
            '& .MuiAccordionSummary-expandIconWrapper': {
              color: theme.palette.common.white,
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600, color: theme.palette.common.white }}>
              {pub.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Authors in italics and yellow color */}
            <Typography
              variant="body2"
              sx={{ fontStyle: 'italic', color: '#f9b934', marginBottom: 1 }}
            >
              {pub.authors}
            </Typography>

            <Typography variant="body2" sx={{ mb: 1, color: theme.palette.grey[300] }}>
              {pub.description}
            </Typography>
            <MuiLink
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="primary"
            >
              View Full Paper
            </MuiLink>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Curology;
