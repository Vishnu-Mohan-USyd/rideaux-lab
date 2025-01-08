/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Award } from 'lucide-react';

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
        'This grant explores novel, non-invasive brain-imaging techniques to identify how dietary preferences are formed.',
    },
    {
      id: 2,
      dateRange: '2025-2028',
      organization: 'Australian Research Council Discovery Project Grant',
      title: 'Seeing the world one step at a time',
      logo: '/assets/arc_1.svg',
      additionalInfo:
        'Investigating how incremental visual perception occurs in the human brain, focusing on ocular micro-movements.',
    },
    {
      id: 3,
      dateRange: '2024-2029',
      organization: 'National Health and Medical Research Council Emerging Leader 1 Investigator Award',
      title: 'Using artificial intelligence to understand impaired sensory processing in autism',
      logo: '/assets/nhmrc_tran.png',
      additionalInfo:
        'Developing AI-driven models to detect subtle changes in sensory processing in individuals with autism spectrum disorder.',
    },
    {
      id: 4,
      dateRange: '2024-2027',
      organization: 'Australian Research Council Discovery Project Grant',
      title: 'Creating a non-invasive window into the mind',
      logo: '/assets/arc_1.svg',
      additionalInfo:
        'Using portable EEG and advanced machine learning to decode mental states in real time.',
    },
    {
      id: 5,
      dateRange: '2021-2025',
      organization: 'Australian Research Council Discovery Early Career Research Award',
      title: 'Understanding how the brain combines sensory information',
      logo: '/assets/arc_1.svg',
      additionalInfo:
        'Exploring the neural mechanisms of multisensory integration using cutting-edge imaging techniques.',
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
        Grants and Funding
      </Typography>

      <Box width="100%" maxWidth={900}>
        {grants.map((grant) => (
          <Accordion
            key={grant.id}
            sx={{
              borderRadius: 2,
              marginBottom: 2,
              overflow: 'hidden',
              border: `1px solid ${
                theme.palette.mode === 'dark' ? '#444' : '#ccc'
              }`,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems="center"
                gap={2}
                width="100%"
              >
                <Box
                  component="img"
                  src={grant.logo}
                  alt={`${grant.organization} logo`}
                  sx={{
                    width: 60,
                    height: 'auto',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'none',
                  }}
                />

                <Box display="flex" flexDirection="column" flexGrow={1} gap={0.5}>
                  {/* Row with an Award icon + date */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <Award size={20} className="text-yellow-500" />
                    <Typography variant="subtitle2" color="text.secondary">
                      {grant.dateRange}
                    </Typography>
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {grant.organization}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {grant.title}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" color="text.secondary">
                {grant.additionalInfo || 'No additional details provided.'}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default GrantsDisplay;
