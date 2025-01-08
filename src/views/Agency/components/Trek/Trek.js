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

const Trek = () => {
  const theme = useTheme();

  const publications = [
    {
      title: 'Exploring and explaining properties of motion processing in biological brains using a neural network (2021)',
      authors: 'Reuben Rideaux and Andrew E. Welchman',
      url: 'https://doi.org/10.1167/jov.21.2.11',
      description:
        'Visual motion perception underpins behaviors ranging from navigation to depth perception and grasping. Our limited access to biological systems constrains our understanding of how motion is processed within the brain. Here we explore properties of motion perception in biological systems by training a neural network to estimate the velocity of image sequences. The network recapitulates key characteristics of motion processing in biological brains, and we use our access to its structure to explore and understand motion (mis)perception...',
    },
    {
      title: 'But Still It Moves: Static Image Statistics Underlie How We See Motion (2020)',
      authors: 'Reuben Rideaux and Andrew E. Welchman',
      url: 'https://doi.org/10.1523/JNEUROSCI.2760-19.2020',
      description:
        'Seeing movement promotes survival. It results from an uncertain interplay between evolution and experience, making it hard to isolate the drivers of computational architectures found in brains. Here we seek insight into motion perception using a neural network (MotionNet) trained on moving images to classify velocity. The network recapitulates key properties of motion direction and speed processing in biological brains, and we use it to derive, and test, understanding of motion (mis)perception at the computational, neural, and perceptual levels...',
    },
    {
      title: 'Parallel consolidation into visual working memory results in reduced precision representations (2018)',
      authors: 'Reuben Rideaux, Emma Baker and Mark Edwards',
      url: 'https://doi.org/10.1016/j.visres.2018.06.005',
      description:
        'Information can be consolidated into visual working memory in parallel, i.e. two items can be consolidated in the same time required to consolidate one. However, while motion direction items consolidated in parallel are encoded at a reduced precision, no such reduction has been reported for colour. Here we examine two possible explanations for the inconsistency between the phenomena associated with consolidating these features in parallel...',
    },
    {
      title: 'Temporal synchrony is an effective cue for grouping and segmentation in the absence of form cues (2016)',
      authors: 'Reuben Rideaux, David R. Badcock, Alan Johnston and Mark Edwards',
      url: 'https://doi.org/10.1167/16.6.1',
      description:
        'The synchronous change of a feature across multiple discrete elements, i.e., temporal synchrony, has been shown to be a powerful cue for grouping and segmentation. This has been demonstrated with both static and dynamic stimuli for a range of tasks. However, in addition to temporal synchrony, stimuli in previous research have included other cues which can also facilitate grouping and segmentation, such as good continuation and coherent spatial configuration...',
    },
    {
      title: 'The cost of parallel consolidation into visual working memory (2016)',
      authors: 'Reuben Rideaux and Mark Edwards',
      url: 'https://doi.org/10.1167/jov.21.2.11',
      description:
        'A growing body of evidence indicates that information can be consolidated into visual working memory in parallel. Initially, it was suggested that color information could be consolidated in parallel while orientation was strictly limited to serial consolidation (Liu & Becker, 2013). However, we recently found evidence suggesting that both orientation and motion direction items can be consolidated in parallel, with different levels of accuracy...',
    },
    {
      title: 'Evidence for parallel consolidation of motion direction and orientation into visual short-term memory (2015)',
      authors: 'Reuben Rideaux, Deborah Apthorp and Mark Edwards',
      url: 'https://doi.org/10.1167/15.2.17',
      description:
        'Recent findings have indicated the capacity to consolidate multiple items into visual short-term memory in parallel varies as a function of the type of information. That is, while color can be consolidated in parallel, evidence suggests that orientation cannot. Here we investigated the capacity to consolidate multiple motion directions in parallel and reexamined this capacity using orientation. This was achieved by determining the shortest exposure duration necessary to consolidate a single item...',
    },
    {
      title: 'Information extraction during simultaneous motion processing (2014)',
      authors: 'Reuben Rideaux and Mark Edwards',
      url: 'https://doi.org/10.1016/j.visres.2013.11.007',
      description:
        'When confronted with multiple moving objects the visual system can process them in two stages: an initial stage in which a limited number of signals are processed in parallel (i.e. simultaneously) followed by a sequential stage. We previously demonstrated that during the simultaneous stage, observers could discriminate between presentations containing up to 5 vs. 6 spatially localized motion signals (Edwards & Rideaux, 2013). Here we investigate what information is actually extracted during the simultaneous stage...',
    },
    {
      title: 'How many motion signals can be simultaneously perceived? (2013)',
      authors: 'Mark Edwards and Reuben Rideaux',
      url: 'https://doi.org/10.1016/j.visres.2012.10.004',
      description:
        'Previous research indicates that the maximum number of motion signals that can be simultaneously perceived is 2, if they are defined only by direction differences, or 3 if they also differ in speed or depth (Greenwood & Edwards, 2006b). Those previous studies used transparent, spatially-sparse stimuli. Here we investigate this motion-number perception limit using spatially-localised stimuli that drive either the standard or form-specific motion systems (Edwards, 2009)...',
    },
  ];

  return (
    <Box>
      {/* Outer box for full-width background */}
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
            Motion Processing and Visual Working Memory
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
            These papers highlight how the visual system handles motion signals, how many motion signals can be processed simultaneously, and the constraints on storing visual information in working memory.
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

export default Trek;
