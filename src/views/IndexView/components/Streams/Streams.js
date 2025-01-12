// Make sure to install @mui/lab if you haven't:
// npm install @mui/lab@^5
// or
// yarn add @mui/lab@^5

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

const mock = [
  {
    title: 'Prioritization and integration of sensory information within and between sensory modalities',
    description:
      'This research investigates unisensory and multisensory information processing in the brain, and how this effectively supports perception and action.',
  },
  {
    title: 'Relationships between neurochemistry, cognition, and behaviour.',
    description:
      'This research focuses on understanding the mechanistic role of neural metabolites, particularly GABA and glutamate, in perception, cognition, and action.',
  },
  {
    title: 'Computational, MR imaging/spectroscopy, and neural decoding methods development.',
    description:
      'This research seeks to develop new methods, or improve existing methods, for studying the brain.',
  },
];

const Streams = () => {
  return (
    <Box>
      {/* Header */}
      <Box marginBottom={4} textAlign="center">
        <Typography
          sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}
          gutterBottom
          color="secondary"
        >
          RESEARCH STREAMS
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          We focus on a few different streams of research
        </Typography>
        <Typography variant="h6" color="text.secondary">
          To address research questions, we use a multimodal approach:
        </Typography>
      </Box>

      <Timeline position="alternate">
        {mock.map((item, i) => (
          <TimelineItem key={i}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              {/* Optional place for date/time info */}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              {i < mock.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: 2, px: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
                {item.title}
              </Typography>
              <Typography color="text.secondary" paragraph>
                {item.description}
              </Typography>
              <Button
                size="large"
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
                      strokeLinejoin="round" //
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Box>
                }
              >
                Learn more
              </Button>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Streams;
