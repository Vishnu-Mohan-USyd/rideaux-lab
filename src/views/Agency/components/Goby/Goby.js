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

const Goby = () => {
  const theme = useTheme();

  // Complete publication data
  const publications = [
    {
      title:
        'Violated predictions enhance the representational fidelity of visual features in perception (2025, Journal of Vision)',
      authors:
        'Reuben Rideaux, Phuong Dang, Liam Jackel-David, Dragan Rangelov and Jason B. Mattingley',
      url: 'https://doi.org/10.1101/2024.03.27.587109',
      description:
        'The study shows that when sensory predictions are violated, visual feature representations become sharper, suggesting expectation errors refine perceptual coding.',
    },
    {
      title:
        'The influence of temporal context on vision over multiple time scales (2025, eLife)',
      authors: 'Kyungkoo Lee and Reuben Rideaux',
      url: 'https://doi.org/10.7554/eLife.106614',
      description:
        'This article demonstrates how visual perception is shaped by temporal context spanning from milliseconds to minutes, revealing adaptive mechanisms across multiple timescales.',
    },
    {
      title:
        'Distinct neurochemical predictors for different phases of decision-making learning (2025, Cerebral Cortex)',
      authors:
        'Molly Gordon, Shane E. Ehrhardt, Reuben Rideaux, Małgorzata Marjańska, Dinesh Deelchand, Zahra Eftekhari, Paul E. Dux and Hannah L. Filmer',
      url: 'https://doi.org/10.1093/cercor/bhaf144',
      description:
        'Using magnetic resonance spectroscopy, the authors identify separate neurochemical markers that forecast early acquisition and later consolidation during decision-making training.',
    },
    {
      title:
        'Multimodal evidence challenges the effectiveness of probabilistic cueing for establishing sensory expectations (2025, Imaging Neuroscience)',
      authors: 'Zhicheng Hu, Duy Tran and Reuben Rideaux',
      url: 'https://doi.org/10.1101/2025.03.22.644773',
      description:
        'Across behavioral and neuroimaging measures, the authors find limited support for probabilistic cueing as a mechanism to set sensory expectations.',
    },
    {
      title: 'Inverted encoding of neural responses to audiovisual stimuli reveals super-additive multisensory enhancement (2024, eLife)',
      authors: 'Zak Buhmann, Amanda K Robinson, Jason B Mattingley and Reuben Rideaux',
      url: 'https://doi.org/10.7554/eLife.97230.2',
      description:
        'A central challenge for the brain is how to combine separate sources of information from different sensory modalities to optimally represent objects and events in the external world, such as combining someone’s speech and lip movements to better understand them in a noisy environment. At the level of individual neurons, audiovisual stimuli often elicit super-additive interactions, where the neural response is greater than the sum of auditory and visual responses. However...',
    },
    {
      title: 'Neural tuning instantiates prior expectations in the human visual system (2023, Nature Communications)',
      authors: 'William J. Harrison, Paul M. Bays and Reuben Rideaux',
      url: 'https://www.nature.com/articles/s41467-023-41027-w',
      description:
        'Perception is often modelled as a process of active inference, whereby prior expectations are combined with noisy sensory measurements to estimate the structure of the world. This mathematical framework has proven critical to understanding perception, cognition, motor control, and social interaction...',
    },
    {
      title: 'Distinct early and late neural mechanisms regulate feature-specific sensory adaptation in the human visual system (2023, PNAS)',
      authors: 'Reuben Rideaux, Rebecca K. West, Dragan Rangelov and Jason B. Mattingley',
      url: 'https://doi.org/10.1073/pnas.2216192120',
      description:
        'Sensory adaptation is widely assumed to reflect a form of efficient coding in the brain, but its underlying neural mechanisms are debated. On one account, sensitivity to prolonged or repeated input is reduced due to neuronal fatigue. Alternatively, adaptation might reflect sharpening of neuronal selectivity over time. To adjudicate between these accounts, we recorded whole-brain activity from human observers before and after they adapted to visual grating stimuli, and used inverted encoding to characterize multivariate changes in neural representations...',
    },
    {
      title: 'Spatial structure, phase, and the contrast of natural images (2022, Journal of Vision)',
      authors: 'Reuben Rideaux, Rebecca K. West, Thomas S. A. Wallis, Peter J. Bex, Jason B. Mattingley and William J. Harrison',
      url: 'https://doi.org/10.1167/jov.22.1.4',
      description:
        'The sensitivity of the human visual system is thought to be shaped by environmental statistics. A major endeavor in vision science, therefore, is to uncover the image statistics that predict perceptual and cognitive function. When searching for targets in natural images, for example, it has recently been proposed that target detection is inversely related to the spatial similarity of the target to its local background. We tested this hypothesis by measuring observers’ sensitivity to targets that were blended with natural image backgrounds...',
    },
    {
      title: 'How multisensory neurons solve causal inference (2021, PNAS)',
      authors: 'Reuben Rideaux, Katherine R. Storrs, Guido Maiello and Andrew E. Welchman',
      url: 'https://doi.org/10.1073/pnas.2106235118',
      description:
        'Sitting in a static railway carriage can produce illusory self-motion if the train on an adjoining track moves off. While our visual system registers motion, vestibular signals indicate that we are stationary. The brain is faced with a difficult challenge: is there a single cause of sensations (I am moving) or two causes (I am static, another train is moving)? If a single cause, integrating signals produces a more precise estimate of self-motion, but if not, one cue should be ignored. In many cases, this process of causal inference works without error, but how does the brain achieve it?...',
    },
    {
      title: 'Functional Interactions between Sensory and Memory Networks for Adaptive Behavior (2021, Cerebral Cortex)',
      authors: 'Vasilis M Karlaftis, Joseph Giorgio, Elisa Zamboni, Polytimi Frangou, Reuben Rideaux, Joseph J Ziminski and Zoe Kourtzi',
      url: 'https://doi.org/10.1093/cercor/bhab160',
      description:
        'The brain\'s capacity to adapt to sensory inputs is key for processing sensory information efficiently and interacting in new environments. Following repeated exposure to the same sensory input, brain activity in sensory areas is known to decrease as inputs become familiar, a process known as adaptation. Yet, the brain-wide mechanisms that mediate adaptive processing remain largely unknown. Here, we combine multimodal brain imaging (functional magnetic resonance imaging [fMRI], magnetic resonance spectroscopy) with behavioral measures...',
    },
    {
      title: 'Fine-scale computations for adaptive processing in the human brain (2020, eLife)',
      authors: 'Elisa Zamboni, Valentin G Kemper, Nuno Reis Goncalves, Ke JiaVasilis M Karlaftis, Samuel J Bell, Joseph Giorgio, Reuben Rideaux, Rainer Goebel, Zoe Kourtzi',
      url: 'https://doi.org/10.7554/eLife.57637',
      description:
        'Adapting to the environment statistics by reducing brain responses to repetitive sensory information is key for efficient information processing. Yet, the fine-scale computations that support this adaptive processing in the human brain remain largely unknown. Here, we capitalise on the sub-millimetre resolution of ultra-high field imaging to examine functional magnetic resonance imaging signals across cortical depth and discern competing hypotheses about the brain mechanisms (feedforward vs. feedback) that mediate adaptive processing...',
    },
    {
      title: 'But Still It Moves: Static Image Statistics Underlie How We See Motion (2020, Journal of Neuroscience)',
      authors: 'Reuben Rideaux and Andrew E. Welchman',
      url: 'https://doi.org/10.1523/JNEUROSCI.2760-19.2020',
      description:
        'Seeing movement promotes survival. It results from an uncertain interplay between evolution and experience, making it hard to isolate the drivers of computational architectures found in brains. Here we seek insight into motion perception using a neural network (MotionNet) trained on moving images to classify velocity. The network recapitulates key properties of motion direction and speed processing in biological brains, and we use it to derive, and test, understanding of motion (mis)perception at the computational, neural, and perceptual levels...',
    },
    {
      title: 'Adaptation to Binocular Anticorrelation Results in Increased Neural Excitability (2020, Journal of Cognitive Neuroscience)',
      authors: 'Reuben Rideaux, Elizabeth Michael, Andrew E. Welchman',
      url: 'https://doi.org/10.1162/jocn_a_01471',
      description:
        'Throughout the brain, information from individual sources converges onto higher order neurons. For example, information from the two eyes first converges in binocular neurons in area V1. Some neurons are tuned to similarities between sources of information, which makes intuitive sense in a system striving to match multiple sensory signals to a single external cause—that is, establish causal inference. However, there are also neurons that are tuned to dissimilar information...',
    },
    {
      title: 'Contextual effects on binocular matching are evident in primary visual cortex (2019, Vision Research)',
      authors: 'Reuben Rideaux and Andrew E. Welchman',
      url: 'https://doi.org/10.1016/j.visres.2019.04.001',
      description:
        'Global context can dramatically influence local visual perception. This phenomenon is well-documented for monocular features, e.g., the Kanizsa triangle. It has been demonstrated for binocular matching: the disambiguation of the Wallpaper Illusion via the luminance of the background. For monocular features, there is evidence that global context can influence neuronal responses as early as V1. However...',
    },
    {
      title: 'Border ownership-dependent tilt aftereffect for shape defined by binocular disparity and motion parallax (2019, Journal of Neurophysiology)',
      authors: 'Reuben Rideaux and William J Harrison',
      url: 'https://doi.org/10.1152/jn.00111.2019',
      description:
        'Discerning objects from their surrounds (i.e., figure-ground segmentation) in a way that guides adaptive behaviors is a fundamental task of the brain. Neurophysiological work has revealed a class of cells in the macaque visual cortex that may be ideally suited to support this neural computation: border ownership cells (Zhou H, Friedman HS, von der Heydt R. J Neurosci 20: 6594-6611, 2000). These orientation-tuned cells appear to respond conditionally to the borders of objects. A behavioral correlate supporting the existence of these cells in humans was demonstrated with two-dimensional luminance-defined objects...',
    },
    {
      title: 'Voluntary control of illusory contour formation (2019, Attention, Perception, & Psychophysics)',
      authors: 'William J. Harrison and Reuben Rideaux',
      url: 'https://link.springer.com/article/10.3758/s13414-019-01678-8',
      description:
        'The extent to which visual inference is shaped by attentional goals is unclear. Voluntary attention may simply modulate the priority with which information is accessed by the higher cognitive functions involved in perceptual decision making. Alternatively, voluntary attention may influence fundamental visual processes, such as those involved in segmenting an incoming retinal signal into a structured scene of coherent objects, thereby determining perceptual organization...',
    },
    {
      title: 'Parallel consolidation into visual working memory results in reduced precision representations (2018, Journal of Vision)',
      authors: 'Reuben Rideaux, Emma Baker and Mark Edwards',
      url: 'https://doi.org/10.1016/j.visres.2018.06.005',
      description:
        'Information can be consolidated into visual working memory in parallel, i.e. two items can be consolidated in the same time required to consolidate one. However, while motion direction items consolidated in parallel are encoded at a reduced precision, no such reduction has been reported for colour. Here we examine two possible explanations for the inconsistency between the phenomena associated with consolidating these features in parallel...',
    },
    {
      title: 'Temporal synchrony is an effective cue for grouping and segmentation in the absence of form cues (2016, Journal of Vision)',
      authors: 'Reuben Rideaux, David R. Badcock, Alan Johnston and Mark Edwards',
      url: 'https://doi.org/10.1167/16.6.1',
      description:
        'The synchronous change of a feature across multiple discrete elements, i.e., temporal synchrony, has been shown to be a powerful cue for grouping and segmentation. This has been demonstrated with both static and dynamic stimuli for a range of tasks. However, in addition to temporal synchrony, stimuli in previous research have included other cues which can also facilitate grouping and segmentation, such as good continuation and coherent spatial configuration...',
    },
    {
      title: 'The cost of parallel consolidation into visual working memory (2016, Journal of Vision)',
      authors: 'Reuben Rideaux and Mark Edwards',
      url: 'https://doi.org/10.1167/jov.21.2.11',
      description:
        'A growing body of evidence indicates that information can be consolidated into visual working memory in parallel. Initially, it was suggested that color information could be consolidated in parallel while orientation was strictly limited to serial consolidation (Liu & Becker, 2013). However, we recently found evidence suggesting that both orientation and motion direction items can be consolidated in parallel, with different levels of accuracy...',
    },
    {
      title: 'Evidence for parallel consolidation of motion direction and orientation into visual short-term memory (2015, Journal of Vision)',
      authors: 'Reuben Rideaux, Deborah Apthorp and Mark Edwards',
      url: 'https://doi.org/10.1167/15.2.17',
      description:
        'Recent findings have indicated the capacity to consolidate multiple items into visual short-term memory in parallel varies as a function of the type of information. That is, while color can be consolidated in parallel, evidence suggests that orientation cannot. Here we investigated the capacity to consolidate multiple motion directions in parallel and reexamined this capacity using orientation. This was achieved by determining the shortest exposure duration necessary to consolidate a single item...',
    },
    {
      title: 'Information extraction during simultaneous motion processing (2014, Vision Research)',
      authors: 'Reuben Rideaux and Mark Edwards',
      url: 'https://doi.org/10.1016/j.visres.2013.11.007',
      description:
        'When confronted with multiple moving objects the visual system can process them in two stages: an initial stage in which a limited number of signals are processed in parallel (i.e. simultaneously) followed by a sequential stage. We previously demonstrated that during the simultaneous stage, observers could discriminate between presentations containing up to 5 vs. 6 spatially localized motion signals (Edwards & Rideaux, 2013). Here we investigate what information is actually extracted during the simultaneous stage...',
    },
    {
      title: 'How many motion signals can be simultaneously perceived? (2013, Vision Research)',
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
            Prioritization and integration of sensory information within and
            between sensory modalities.
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
            This research investigates unisensory and multisensory information processing in the brain, and how this effectively supports perception and action.
          </Typography>
        </Box>
      </Box>

      {/* Publications as accordions */}
      {publications.map((pub, index) => {
        // Split the title to extract year and journal
        const titleParts = pub.title.split(' (');
        const mainTitle = titleParts[0];
        let year = '';
        let journal = '';

        if (titleParts.length > 1) {
          const yearJournal = titleParts[1].replace(')', '');
          const splitIndex = yearJournal.indexOf(', ');
          if (splitIndex !== -1) {
            year = yearJournal.substring(0, splitIndex);
            journal = yearJournal.substring(splitIndex + 2);
          } else {
            year = yearJournal;
          }
        }

        return (
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
                {mainTitle}
                {year && (
                  <>
                    {' '}
                    (
                    {year}
                    {journal && (
                      <>
                        ,{' '}
                        <Typography
                          component="span"
                          sx={{
                            fontStyle: 'italic',
                            fontWeight: 400, // Thinner font weight
                            color: '#f0847d', // Different color
                          }}
                        >
                          {journal}
                        </Typography>
                      </>
                    )}
                    )
                  </>
                )}
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
        );
      })}
    </Box>
  );
};

export default Goby;
