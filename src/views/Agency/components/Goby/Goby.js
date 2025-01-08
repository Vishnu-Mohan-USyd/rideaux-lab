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

  // Example publication data
  const publications = [
    {
      title: 'Initial experiences with Direct Imaging of Neuronal Activity (DIANA) in humans (2023)',
      authors: 'Shota Hodono, Reuben Rideaux, Timo van Kerkoerle, Martijn A. Cloos',
      url: 'https://doi.org/10.1162/imag_a_00013',
      description:
        'Functional MRI (fMRI) has been widely used to study activity patterns in the human brain. It infers neuronal activity from the associated hemodynamic response, which fundamentally limits its spatiotemporal specificity. In mice, the Direct Imaging of Neuronal Activity (DIANA) method revealed MRI signals that correlated with extracellular electric activity, showing high spatiotemporal specificity...',
    },
    {
      title: 'Comparison of seven modelling algorithms for γ-aminobutyric acid–edited proton magnetic resonance spectroscopy (2022)',
      authors:
        'Alexander R. Craven, Pallab K. Bhattacharyya, William T. Clarke, Ulrike Dydak, Richard A. E. Edden, Lars Ersland, Pravat K. Mandal, Mark Mikkelsen, James B. Murdoch, Jamie Near, Reuben Rideaux, Deepika Shukla, Min Wang, Martin Wilson, Helge J. Zöllner, Kenneth Hugdahl, Georg Oeltzschner',
      url: 'https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/full/10.1002/nbm.4702',
      description:
        'Edited MRS sequences are widely used for studying γ-aminobutyric acid (GABA) in the human brain. Several algorithms are available for modelling these data, deriving metabolite concentration estimates through peak fitting or a linear combination of basis spectra. The present study compares seven such algorithms, using data obtained in a large multisite study...',
    },
    {
      title: 'Comparison of methods for spectral alignment and signal modelling of GABA-edited MR spectroscopy data (2021)',
      authors: 'Reuben Rideaux, Mark Mikkelsen , Richard A.E. Edden',
      url: 'https://doi.org/10.1016/j.neuroimage.2021.117900',
      description:
        'Many methods exist for aligning and quantifying magnetic resonance spectroscopy (MRS) data to measure in vivo γ-aminobutyric acid (GABA). Research comparing the performance of these methods is scarce partly due to the lack of ground-truth measurements. The concentration of GABA is approximately two times higher in grey matter than in white matter. Here we use the proportion of grey matter within the MRS voxel as a proxy for ground-truth GABA...',
    },
    {
      title: 'Low- and High-resolution Dynamic Analyses for Magnetic Resonance Spectroscopy Data (2021)',
      authors: 'Reuben Rideaux',
      url: 'https://doi.org/10.21769/BioProtoc.3892',
      description:
        'Magnetic resonance spectroscopy (MRS) can be used to measure in vivo concentrations of neurometabolites. This information can be used to identify neurotransmitter involvement in healthy (e.g., perceptual and cognitive processes) and unhealthy brain function (e.g., neurological and psychiatric illnesses). The standard approach for analyzing MRS data is to combine spectral transients acquired over a ~10 min scan to yield a single estimate that reflects the average metabolite concentration during that period...',
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
            Neural Imaging Methods and Data Analysis Approaches
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
            These studies introduce or compare novel methods and tools for neuroimaging,
            spectroscopy, and measurement of neural activity. They often focus on the technical
            or methodological aspects of measuring brain signals.
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

export default Goby;
