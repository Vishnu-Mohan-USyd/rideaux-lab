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

const Larq = () => {
  const theme = useTheme();

  // Example publication data (with authors added)
  const publications = [
    {
      title: 'Neurochemical Predictors of Generalized Learning Induced by Brain Stimulation and Training (2024)',
      authors: 'Shane E. Ehrhardt, Yohan Wards, Reuben Rideaux, Małgorzata Marjańska, Jin Jin, Martijn A. Cloos, Dinesh K. Deelchand, Helge J. Zöllner, Muhammad G. Saleh, Steve C. N. Hui, Tonima Ali, Thomas B. Shaw, Markus Barth, Jason B. Mattingley, Hannah L. Filmer and Paul E. Dux',
      url: 'https://www.jneurosci.org/content/44/21/e1676232024',
      description:
        'Methods of cognitive enhancement for humans are most impactful when they generalize across tasks. However, the extent to which such “transfer” is possible via interventions is widely debated. In addition, the contribution of excitatory and inhibitory processes to such transfer is unknown. Here, in a large-scale neuroimaging individual differences study with humans (both sexes), we paired...',
    },
    {
      title: 'Neurochemical and functional interactions for improved perceptual decisions through training (2022)',
      authors: 'Ke Jia, Polytimi Frangou, Vasilis M. Karlaftis, Joseph J. Ziminski, Joseph Giorgio, Reuben Rideaux, Elisa Zamboni, Victoria Hodgson, Uzay Emir and Zoe Kourtzi',
      url: 'https://journals.physiology.org/doi/full/10.1152/jn.00308.2021?rfr_dat=cr_pub++0pubmed&url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org',
      description:
        'Learning and experience are known to improve our ability to make perceptual decisions. Yet, our understanding of the brain mechanisms that support improved perceptual decisions through training remains limited. Here, we test the neurochemical and functional interactions that support learning for perceptual decisions in the context of an orientation identification task...',
    },
    {
      title: 'On the relationship between GABA+ and glutamate across the brain (2022)',
      authors: 'Reuben Rideaux , Shane E. Ehrhardt , Yohan Wards , Hannah L. Filmer , Jin Jin , Dinesh K. Deelchand , Małgorzata Marjańska , Jason B. Mattingley, Paul E. Dux',
      url: 'https://www.sciencedirect.com/science/article/pii/S1053811922003949?via%3Dihub',
      description:
        'Equilibrium between excitation and inhibition (E/I balance) is key to healthy brain function. Conversely, disruption of normal E/I balance has been implicated in a range of central neurological pathologies. Magnetic resonance spectroscopy (MRS) provides a non-invasive means of quantifying in vivo concentrations of excitatory and inhibitory neurotransmitters, which could be used as diagnostic biomarkers...',
    },
    {
      title: 'No balance between glutamate+glutamine and GABA+ in visual or motor cortices of the human brain: A magnetic resonance spectroscopy study (2021)',
      authors: 'Reuben Rideaux',
      url: 'https://doi.org/10.1016/j.neuroimage.2021.118191',
      description:
        'Theoretical work, supported by electrophysiological evidence, asserts that a balance between excitation and inhibition (E/I) is critical for healthy brain function. In magnetic resonance spectroscopy (MRS) studies, the ratio of excitatory (glutamate) and inhibitory (γ-aminobutyric acid, GABA) neurotransmitters is often used as a proxy for this E/I balance. Recent MRS work found a positive correlation between GABA+ and Glx (glutamate+glutamine) in medial parietal cortex...',
    },
    {
      title: 'Temporal Dynamics of GABA and Glx in the Visual Cortex (2020)',
      authors: 'Reuben Rideaux',
      url: 'https://www.eneuro.org/content/7/4/ENEURO.0082-20.2020',
      description:
        'Magnetic resonance spectroscopy (MRS) can be used in vivo to quantify neurometabolite concentration and provide evidence for the involvement of different neurotransmitter systems (e.g., inhibitory and excitatory) in sensory and cognitive processes. The relatively low signal-to-noise ratio of MRS measurements has shaped the types of questions that it has been used to address. In particular, temporal resolution is often sacrificed in MRS studies to achieve a signal sufficient to produce a reliable estimate of neurometabolite concentration...',
    },
    {
      title: 'Mixed-polarity random-dot stereograms alter GABA and Glx concentration in the early visual cortex (2019)',
      authors: 'Reuben Rideaux, Nuno R. Goncalves and Andrew E. Welchman',
      url: 'https://doi.org/10.1152/jn.00208.2019',
      description:
        'The offset between images projected onto the left and right retina (binocular disparity) provides a powerful cue to the three-dimensional structure of the environment. It was previously shown that depth judgements are better when images comprise both light and dark features, rather than only light or only dark elements. Since Harris and Parker (Nature 374: 808–811, 1995) discovered the “mixed-polarity benefit,”...',
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
            Neurochemistry (GABA, Glutamate) and Spectroscopy in Relation to Brain Function
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
            These papers use magnetic resonance spectroscopy (MRS) to explore how neurochemicals
            (e.g., GABA, glutamate) in different brain regions are linked to perception, learning,
            and other cognitive processes.
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

export default Larq;
