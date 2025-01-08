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

const Nike2 = () => {
  const theme = useTheme();

  const publications = [
    {
      title: 'Task-related modulation of event-related potentials does not reflect changes to sensory representations (2024)',
      authors: 'Reuben Rideaux',
      url: 'https://doi.org/10.1162/imag_a_00266',
      description:
        'Attention supports efficient perception by increasing the neural signals of targets while suppressing those of distractors. Decades of work studying the event-related potentials of electroencephalography (EEG) recordings have established our understanding of attention in the human brain, but many aspects of this phenomenon remain unknown...',
    },
    {
      title: 'Individual Differences in Decision Strategy Relate to Neurochemical Excitability and Cortical Thickness (2023)',
      authors: 'Hannah L. Filmer, Kathleen Loughnan, Jennifer X. Seeto, Timothy Ballard, Shane E. Ehrhardt, Thomas B. Shaw, Yohan Wards, Reuben Rideaux, Li-Ann Leow, David K. Sewell and Paul E. Dux',
      url: 'https://www.jneurosci.org/content/43/42/7006.long',
      description:
        'The speed-accuracy trade-off (SAT), whereby faster decisions increase the likelihood of an error, reflects a cognitive strategy humans must engage in during the performance of almost all daily tasks. To date, computational modeling has implicated the latent decision variable of response caution (thresholds), the amount of evidence required for a decision to be made, in the SAT...',
    },
    {
      title: 'Functional Interactions between Sensory and Memory Networks for Adaptive Behavior (2021)',
      authors: 'Vasilis M Karlaftis, Joseph Giorgio, Elisa Zamboni, Polytimi Frangou, Reuben Rideaux, Joseph J Ziminski and Zoe Kourtzi',
      url: 'https://doi.org/10.1093/cercor/bhab160',
      description:
        'The brain\'s capacity to adapt to sensory inputs is key for processing sensory information efficiently and interacting in new environments. Following repeated exposure to the same sensory input, brain activity in sensory areas is known to decrease as inputs become familiar, a process known as adaptation. Yet, the brain-wide mechanisms that mediate adaptive processing remain largely unknown. Here, we combine multimodal brain imaging (functional magnetic resonance imaging [fMRI], magnetic resonance spectroscopy) with behavioral measures...',
    },
    {
      title: 'Fine-scale computations for adaptive processing in the human brain (2020)',
      authors: 'Elisa Zamboni, Valentin G Kemper, Nuno Reis Goncalves, Ke JiaVasilis M Karlaftis, Samuel J Bell, Joseph Giorgio, Reuben Rideaux, Rainer Goebel, Zoe Kourtzi',
      url: 'https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/full/10.1002/nbm.4702',
      description:
        'Adapting to the environment statistics by reducing brain responses to repetitive sensory information is key for efficient information processing. Yet, the fine-scale computations that support this adaptive processing in the human brain remain largely unknown. Here, we capitalise on the sub-millimetre resolution of ultra-high field imaging to examine functional magnetic resonance imaging signals across cortical depth and discern competing hypotheses about the brain mechanisms (feedforward vs. feedback) that mediate adaptive processing...',
    },
  ];

  return (
    <Box>
      {/* Original Nike2 heading */}

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
            Task Modulation, ERPs, and Higher-Level Cognitive Factors
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
            These studies investigate how the brain’s electrophysiological signals (ERPs) or neural tuning are modulated by tasks, attention, or decision-making processes—often addressing questions of whether these modulations reflect changes in low-level sensory encoding versus higher-order processing.
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

export default Nike2;
