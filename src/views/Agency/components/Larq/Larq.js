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

  // Complete publication data
  const publications = [
    {
      title: 'Neurochemical Predictors of Generalized Learning Induced by Brain Stimulation and Training (2024, Journal of Neuroscience)',
      authors: 'Shane E. Ehrhardt, Yohan Wards, Reuben Rideaux, Małgorzata Marjańska, Jin Jin, Martijn A. Cloos, Dinesh K. Deelchand, Helge J. Zöllner, Muhammad G. Saleh, Steve C. N. Hui, Tonima Ali, Thomas B. Shaw, Markus Barth, Jason B. Mattingley, Hannah L. Filmer and Paul E. Dux',
      url: 'https://www.jneurosci.org/content/44/21/e1676232024',
      description:
        'Methods of cognitive enhancement for humans are most impactful when they generalize across tasks. However, the extent to which such “transfer” is possible via interventions is widely debated. In addition, the contribution of excitatory and inhibitory processes to such transfer is unknown. Here, in a large-scale neuroimaging individual differences study with humans (both sexes), we paired...',
    },
    {
      title: 'Individual Differences in Decision Strategy Relate to Neurochemical Excitability and Cortical Thickness (2023, Journal of Neuroscience)',
      authors: 'Hannah L. Filmer, Kathleen Loughnan, Jennifer X. Seeto, Timothy Ballard, Shane E. Ehrhardt, Thomas B. Shaw, Yohan Wards, Reuben Rideaux, Li-Ann Leow, David K. Sewell and Paul E. Dux',
      url: 'https://www.jneurosci.org/content/43/42/7006.long',
      description:
        'The speed-accuracy trade-off (SAT), whereby faster decisions increase the likelihood of an error, reflects a cognitive strategy humans must engage in during the performance of almost all daily tasks. To date, computational modeling has implicated the latent decision variable of response caution (thresholds), the amount of evidence required for a decision to be made, in the SAT...',
    },
    {
      title: 'On the relationship between GABA+ and glutamate across the brain (2022, NeuroImage)',
      authors: 'Reuben Rideaux , Shane E. Ehrhardt , Yohan Wards , Hannah L. Filmer , Jin Jin , Dinesh K. Deelchand , Małgorzata Marjańska , Jason B. Mattingley, Paul E. Dux',
      url: 'https://www.sciencedirect.com/science/article/pii/S1053811922003949?via%3Dihub',
      description:
        'Equilibrium between excitation and inhibition (E/I balance) is key to healthy brain function. Conversely, disruption of normal E/I balance has been implicated in a range of central neurological pathologies. Magnetic resonance spectroscopy (MRS) provides a non-invasive means of quantifying in vivo concentrations of excitatory and inhibitory neurotransmitters, which could be used as diagnostic biomarkers...',
    },
    {
      title: 'Neurochemical and functional interactions for improved perceptual decisions through training (2022, Journal of Neurophysiology)',
      authors: 'Ke Jia, Polytimi Frangou, Vasilis M. Karlaftis, Joseph J. Ziminski, Joseph Giorgio, Reuben Rideaux, Elisa Zamboni, Victoria Hodgson, Uzay Emir and Zoe Kourtzi',
      url: 'https://journals.physiology.org/doi/full/10.1152/jn.00308.2021?rfr_dat=cr_pub++0pubmed&url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org',
      description:
        'Learning and experience are known to improve our ability to make perceptual decisions. Yet, our understanding of the brain mechanisms that support improved perceptual decisions through training remains limited. Here, we test the neurochemical and functional interactions that support learning for perceptual decisions in the context of an orientation identification task...',
    },
    {
      title: 'No balance between glutamate+glutamine and GABA+ in visual or motor cortices of the human brain: A magnetic resonance spectroscopy study (2021, NeuroImage)',
      authors: 'Reuben Rideaux',
      url: 'https://doi.org/10.1016/j.neuroimage.2021.118191',
      description:
        'Theoretical work, supported by electrophysiological evidence, asserts that a balance between excitation and inhibition (E/I) is critical for healthy brain function. In magnetic resonance spectroscopy (MRS) studies, the ratio of excitatory (glutamate) and inhibitory (γ-aminobutyric acid, GABA) neurotransmitters is often used as a proxy for this E/I balance. Recent MRS work found a positive correlation between GABA+ and Glx (glutamate+glutamine) in medial parietal cortex...',
    },
    {
      title: 'Temporal Dynamics of GABA and Glx in the Visual Cortex (2020, eNeuro)',
      authors: 'Reuben Rideaux',
      url: 'https://www.eneuro.org/content/7/4/ENEURO.0082-20.2020',
      description:
        'Magnetic resonance spectroscopy (MRS) can be used in vivo to quantify neurometabolite concentration and provide evidence for the involvement of different neurotransmitter systems (e.g., inhibitory and excitatory) in sensory and cognitive processes. The relatively low signal-to-noise ratio of MRS measurements has shaped the types of questions that it has been used to address. In particular, temporal resolution is often sacrificed in MRS studies to achieve a signal sufficient to produce a reliable estimate of neurometabolite concentration...',
    },
    {
      title: 'Mixed-polarity random-dot stereograms alter GABA and Glx concentration in the early visual cortex (2019, Journal of Neurophysiology)',
      authors: 'Reuben Rideaux, Nuno R. Goncalves and Andrew E. Welchman',
      url: 'https://doi.org/10.1152/jn.00208.2019',
      description:
        'The offset between images projected onto the left and right retina (binocular disparity) provides a powerful cue to the three-dimensional structure of the environment. It was previously shown that depth judgements are better when images comprise both light and dark features, rather than only light or only dark elements. Since Harris and Parker (Nature 374: 808–811, 1995) discovered the “mixed-polarity benefit,”...',
    },
    {
      title: 'Proscription supports robust perceptual integration by suppression in human visual cortex (2018, Nature Communications)',
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
            Relationships between neurochemistry, cognition, and behaviour.
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
            This research focuses on understanding the mechanistic role of neural metabolites, particularly GABA and glutamate, in perception, cognition, and action.
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

export default Larq;
