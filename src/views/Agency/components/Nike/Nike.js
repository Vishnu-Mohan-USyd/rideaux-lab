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

const Nike = () => {
  const theme = useTheme();

  const publications = [
    {
      title: 'Neural tuning instantiates prior expectations in the human visual system (2023)',
      authors: 'William J. Harrison, Paul M. Bays and Reuben Rideaux',
      url: 'https://www.nature.com/articles/s41467-023-41027-w',
      description:
        'Perception is often modelled as a process of active inference, whereby prior expectations are combined with noisy sensory measurements to estimate the structure of the world. This mathematical framework has proven critical to understanding perception, cognition, motor control, and social interaction...',
    },
    {
      title: 'Distinct early and late neural mechanisms regulate feature-specific sensory adaptation in the human visual system (2023)',
      authors: 'Reuben Rideaux, Rebecca K. West, Dragan Rangelov and Jason B. Mattingley',
      url: 'https://doi.org/10.1073/pnas.2216192120',
      description:
        'Sensory adaptation is widely assumed to reflect a form of efficient coding in the brain, but its underlying neural mechanisms are debated. On one account, sensitivity to prolonged or repeated input is reduced due to neuronal fatigue. Alternatively, adaptation might reflect sharpening of neuronal selectivity over time. To adjudicate between these accounts, we recorded whole-brain activity from human observers before and after they adapted to visual grating stimuli, and used inverted encoding to characterize multivariate changes in neural representations...',
    },
    {
      title: 'Spatial structure, phase, and the contrast of natural images (2022)',
      authors: 'Reuben Rideaux, Rebecca K. West, Thomas S. A. Wallis, Peter J. Bex, Jason B. Mattingley and William J. Harrison',
      url: 'https://doi.org/10.1167/jov.22.1.4',
      description:
        'The sensitivity of the human visual system is thought to be shaped by environmental statistics. A major endeavor in vision science, therefore, is to uncover the image statistics that predict perceptual and cognitive function. When searching for targets in natural images, for example, it has recently been proposed that target detection is inversely related to the spatial similarity of the target to its local background. We tested this hypothesis by measuring observers’ sensitivity to targets that were blended with natural image backgrounds...',
    },
    {
      title: 'Adaptation to Binocular Anticorrelation Results in Increased Neural Excitability (2020)',
      authors: 'Reuben Rideaux, Elizabeth Michael, Andrew E. Welchman',
      url: 'https://doi.org/10.1162/jocn_a_01471',
      description:
        'Throughout the brain, information from individual sources converges onto higher order neurons. For example, information from the two eyes first converges in binocular neurons in area V1. Some neurons are tuned to similarities between sources of information, which makes intuitive sense in a system striving to match multiple sensory signals to a single external cause—that is, establish causal inference. However, there are also neurons that are tuned to dissimilar information...',
    },
    {
      title: 'Contextual effects on binocular matching are evident in primary visual cortex (2019)',
      authors: 'Reuben Rideaux and Andrew E. Welchman',
      url: 'https://doi.org/10.1016/j.visres.2019.04.001',
      description:
        'Global context can dramatically influence local visual perception. This phenomenon is well-documented for monocular features, e.g., the Kanizsa triangle. It has been demonstrated for binocular matching: the disambiguation of the Wallpaper Illusion via the luminance of the background. For monocular features, there is evidence that global context can influence neuronal responses as early as V1. However...',
    },
    {
      title: 'Border ownership-dependent tilt aftereffect for shape defined by binocular disparity and motion parallax (2019)',
      authors: 'Reuben Rideaux and William J Harrison',
      url: 'https://doi.org/10.1152/jn.00111.2019',
      description:
        'Discerning objects from their surrounds (i.e., figure-ground segmentation) in a way that guides adaptive behaviors is a fundamental task of the brain. Neurophysiological work has revealed a class of cells in the macaque visual cortex that may be ideally suited to support this neural computation: border ownership cells (Zhou H, Friedman HS, von der Heydt R. J Neurosci 20: 6594-6611, 2000). These orientation-tuned cells appear to respond conditionally to the borders of objects. A behavioral correlate supporting the existence of these cells in humans was demonstrated with two-dimensional luminance-defined objects...',
    },
    {
      title: 'Voluntary control of illusory contour formation (2019)',
      authors: 'William J. Harrison and Reuben Rideaux',
      url: 'https://link.springer.com/article/10.3758/s13414-019-01678-8',
      description:
        'The extent to which visual inference is shaped by attentional goals is unclear. Voluntary attention may simply modulate the priority with which information is accessed by the higher cognitive functions involved in perceptual decision making. Alternatively, voluntary attention may influence fundamental visual processes, such as those involved in segmenting an incoming retinal signal into a structured scene of coherent objects, thereby determining perceptual organization...',
    },
    {
      title: 'Proscription supports robust perceptual integration by suppression in human visual cortex (2018)',
      authors: 'Reuben Rideaux and Andrew E. Welchman',
      url: 'https://www.nature.com/articles/s41467-018-03400-y',
      description:
        'Perception relies on integrating information within and between the senses, but how does the brain decide which pieces of information should be integrated and which kept separate? Here we demonstrate how proscription can be used to solve this problem: certain neurons respond best to unrealistic combinations of features to provide ‘what not’ information that drives suppression of unlikely perceptual interpretations...',
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
            Visual Perception, Sensory Processing, and Adaptation
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
            These publications emphasize how the visual system processes or adapts to stimuli—
            disparity, motion, natural image statistics, and illusions. They often employ
            psychophysics, behavioral measures, or neuroimaging correlates of perception.
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

export default Nike;
