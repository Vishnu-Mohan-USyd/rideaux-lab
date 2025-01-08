import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const CaseStudy1 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState(false);

  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  const handlePdfError = () => {
    setIsLoading(false);
    setPdfError(true);
  };

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={
        theme.palette.mode === 'light' ? colors.blue[50] : colors.blue[900]
      }
      data-aos={'fade-up'}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12}>
              {/* PDF Container */}
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: '50vh',
                }}
              >
                {/* Loading State */}
                {isLoading && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'background.paper',
                      zIndex: 1,
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}

                {/* Error State */}
                {pdfError && (
                  <Alert
                    severity="error"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 1,
                      maxWidth: '90%',
                    }}
                  >
                    Failed to load PDF. Please try refreshing the page.
                  </Alert>
                )}

                {/* Inline PDF Viewer */}
                <Box
                  component="iframe"
                  src="/papers/msi.pdf#view=FitH"
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    visibility: isLoading || pdfError ? 'hidden' : 'visible',
                  }}
                  title="Multisensory Integration Research Paper"
                  onLoad={handlePdfLoad}
                  onError={handlePdfError}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Key Findings
              </Typography>
              <Typography component={'p'}>
                We found that the brain decides whether to combine or separate sensory signals by comparing the activity levels of two types of brain cells - one type that likes matching signals and another that prefers conflicting signals.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                _______________
              </Typography>
              <Typography component={'p'}>
                Surprisingly, both types of brain cells contribute to understanding both self-motion and environmental motion, rather than each type being dedicated to just one task as previously thought.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
            height={1}
          >
            <Box>
              <Typography variant={'h4'} fontWeight={700} gutterBottom>
                Multisensory Integration
              </Typography>
              <Typography
                color={
                  theme.palette.mode === 'light'
                    ? 'text.secondary'
                    : 'text.primary'
                }
              >
                We combined neurophysiological recordings from macaque MSTd with a deep neural network model ("MultiNet") trained to process visual and vestibular inputs for motion estimation, allowing them to systematically investigate the computational principles underlying causal inference.
              </Typography>
            </Box>
            <Box
              component={Card}
              marginTop={{ xs: 2, md: 0 }}
              boxShadow={0}
              borderRadius={2}
            >
              <CardContent sx={{ padding: { xs: 2, sm: 4 } }}>
                <Typography
                  variant={'h6'}
                  fontWeight={700}
                  gutterBottom
                  sx={{ marginBottom: 2 }}
                >
                  Methods
                </Typography>
                <Typography component={'p'}>
                  Recordings of brain cell activity in macaque were combined with a neural network designed to simulate how the brain processes motion signals from both vision and inner ear balance sensors, allowing us to understand how the brain makes sense of these different sensory inputs.
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaseStudy1;