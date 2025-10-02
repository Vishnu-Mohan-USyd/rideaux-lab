/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Box,
  // eslint-disable-next-line no-unused-vars
  Typography,
  useTheme,
} from '@mui/material';

const GrantsDisplay = () => {
  const theme = useTheme();

  const grants = [
    {
      id: 1,
      dateRange: '2025-2026',
      organization: 'The University of Sydney Core Funds Grant',
      title: 'Measuring dietary biases using non-invasive decoding of brain activity',
      logo: '/assets/usyd_logo.svg',
      additionalInfo:
        'Advances in non-invasive decoding of brain activity hold potential benefit\n' +
        'to   various   fields,   including   brain-computer   interfaces   (e.g.   to   control\n' +
        'assistive devices), fundamental and clinical neuroscience research (e.g. to\n' +
        'understand healthy and unhealthy patterns of brain activity), ethical and\n' +
        'legal applications (e.g. to assess truthfulness or intent), and consumer\n' +
        'research   and   marketing   (e.g.   to   assess   effectiveness   of   marketing\n' +
        'strategies). Unlike invasive techniques, progress in non-invasive methods\n' +
        'can be widely applied to achieve significant benefit across society. This\n' +
        'project   seeks   to   develop   methods   for   assessing   dietary   biases   using\n' +
        'decoding of brain activity from electroencephalographical recordings.',
    },
    {
      id: 2,
      dateRange: '2025-2028',
      organization: 'Australian Research Council Discovery Project Grant',
      title: 'Seeing the world one step at a time',
      logo: '/assets/arc_1.svg',
      additionalInfo:
        'Our knowledge of perception comes from static experiments, yet our lives\n' +
        'are   very   active   (eg:   reaching,   walking).   Recent   work   shows   close\n' +
        'perception/action links and that action can shape perception. This project\n' +
        'uses   new   technologies   to   test   dynamic   perception   in   free-walking\n' +
        'observers in virtual multisensory environments. It will reveal how walking\n' +
        'modulates perception at the step rate, the influence of intention (active vs\n' +
        'passive   action)   and   establish   the   neural   mechanisms   underlying   the\n' +
        'perception/action link. It will advance our knowledge of how the brain\n' +
        'integrates its twin functions of perceiving the world and acting upon it and\n' +
        'will generate useful knowledge for information transfer and time-critical\n' +
        'responses in active contexts.',
    },
    {
      id: 3,
      dateRange: '2024-2029',
      organization: 'National Health and Medical Research Council Emerging Leader 1 Investigator Award',
      title: 'Using artificial intelligence to understand impaired sensory processing in autism',
      logo: '/assets/nhmrc_tran.png',
      additionalInfo:
        'Our perception of the world is shaped by combining information from our\n' +
        'senses. Deficits in multisensory integration are thought to underlie some of\n' +
        'the core impairments of brain disorders such as autism and schizophrenia.\n' +
        'This research will characterise the brain mechanisms and consequences of\n' +
        'multisensory integration impairments using machine learning and brain\n' +
        'imaging. Ultimately, this project seeks to inform targeted interventions\n' +
        'and help us to better treat people with brain disorders.',
    },
    {
      id: 4,
      dateRange: '2024-2027',
      organization: 'Australian Research Council Discovery Project Grant',
      title: 'Creating a non-invasive window into the mind',
      logo: '/assets/arc_1.svg',
      additionalInfo:
        'This project aims to create better tools to study the human mind. This\n' +
        'project expects to generate new knowledge that can be used to non-\n' +
        'invasively   image   neuronal   activity.   Expected   outcomes   include   the\n' +
        'development   of   unique   new   Magnetic   Resonance   Imaging   (MRI)\n' +
        'instruments to study neuronal activity in both highly controlled laboratory\n' +
        'conditions and in humans, with the spatial and temporal resolution needed\n' +
        'to   study   the   neuronal   circuitry   that   drives   low   and   high-level   brain\n' +
        'functions, i.e., creating a window into the mind. In the future, outcomes\n' +
        'from this study could improve our understanding of mental disorders,\n' +
        'advance   computer   brain   interface   technology,   and   inspire   the   next\n' +
        'paradigm shift in artificial intelligence.',
    },
    {
      id: 5,
      dateRange: '2021-2025',
      organization: 'Australian Research Council Discovery Early Career Research Award',
      title: 'Understanding how the brain combines sensory information',
      logo: '/assets/arc_1.svg',
      additionalInfo:
        'To combine or not to combine information? Combining different types of\n' +
        'sensory information, a.k.a. cues, in a way that yields accurate judgements\n' +
        'and guides effective behaviours is a fundamental cognitive task, but how\n' +
        'this is instantiated in the brain is unknown. Disrupted cue combination is\n' +
        'associated with negative health outcomes ranging from cybersickness in\n' +
        'virtual reality applications to pathological delusions and hallucinations.\n' +
        'This project aims to develop a biological explanation of how the healthy\n' +
        'human brain combines cues by using advanced computational modelling,\n' +
        'neuroimaging, and psychophysical techniques.',
    },
    {
      id: 6,
      dateRange: '2018-2021',
      organization: 'Leverhulme Trust Early Career Research Fellowship ',
      title: 'Perceiving in depth: The intersection of minds and machines',
      logo: '/assets/lhulme.svg',
      additionalInfo:
        'Perceiving the three-dimensional (3D) structure of the world represents a\n' +
        'fundamentally   difficult   challenge   in   inferring   depth   from   ambiguous\n' +
        'sensory inputs. The inverse problem of estimating 3D structure from 2D\n' +
        'images is ill-posed: sensations are typically compatible with a vast range of\n' +
        'plausible physical causes, so how does the brain select the appropriate\n' +
        'interpretation? The computational difficulty of the problem is illustrated by\n' +
        'the limited success of artificial systems, yet the brain is able to achieve\n' +
        'rapid and robust perception.  A principal strategy used by the brain to\n' +
        'compute depth is to combine cues within modalities (e.g., 3D cues of\n' +
        'binocular disparity, texture, perspective, blur, etc.) and between sensory\n' +
        'modalities (e.g., vision with touch or audition). While individual cues are\n' +
        'ambiguous and subject to random variability (i.e., noise), by integrating\n' +
        'them, the brain gains two benefits: (i) ambiguity can be reduced and (ii)\n' +
        'depth estimates become better because noise is reduced. These processes\n' +
        'are fundamental to successful everyday behaviour, yet we have a poor\n' +
        'understanding of the neural mechanisms that support integration. This\n' +
        'project uses convergent approaches from cognitive neuroscience, machine\n' +
        'learning and state-of-the-art brain imaging to tackle the problem of depth\n' +
        'perception.',
    },
    {
      id: 7,
      dateRange: '2018-2021',
      organization: 'Isaac Newton Trust Fellowship',
      title: 'The intersection of minds and machines',
      logo: '/assets/ints.svg',
      additionalInfo:
        'Perceiving the three-dimensional (3D) structure of the world represents a\n' +
        'fundamentally   difficult   challenge   in   inferring   depth   from   ambiguous\n' +
        'sensory inputs. The inverse problem of estimating 3D structure from 2D\n' +
        'images is ill-posed: sensations are typically compatible with a vast range of\n' +
        'plausible physical causes, so how does the brain select the appropriate\n' +
        'interpretation? The computational difficulty of the problem is illustrated by\n' +
        'the limited success of artificial systems, yet the brain is able to achieve\n' +
        'rapid and robust perception.  A principal strategy used by the brain to\n' +
        'compute depth is to combine cues within modalities (e.g., 3D cues of\n' +
        'binocular disparity, texture, perspective, blur, etc.) and between sensory\n' +
        'modalities (e.g., vision with touch or audition). While individual cues are\n' +
        'ambiguous and subject to random variability (i.e., noise), by integrating\n' +
        'them, the brain gains two benefits: (i) ambiguity can be reduced and (ii)\n' +
        'depth estimates become better because noise is reduced. These processes\n' +
        'are fundamental to successful everyday behaviour, yet we have a poor\n' +
        'understanding of the neural mechanisms that support integration. This\n' +
        'project uses convergent approaches from cognitive neuroscience, machine\n' +
        'learning and state-of-the-art brain imaging to tackle the problem of depth\n' +
        'perception.',
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      sx={{ padding: 2 }}
    >
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Funding
      </Typography>

      <Box width="100%" maxWidth={900}>
        {grants.map((grant) => (
          <Box
            key={grant.id}
            sx={{
              borderRadius: 2,
              marginBottom: 2,
              padding: 2,
              border: `1px solid ${
                theme.palette.mode === 'dark' ? '#444' : '#ccc'
              }`,
            }}
          >
            <Typography variant="body1" color="text.primary" sx={{ fontWeight: 600 }}>
              {grant.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GrantsDisplay;
