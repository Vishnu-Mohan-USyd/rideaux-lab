/* eslint-disable no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

const Main = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      {/* Top Header and Action Buttons */}
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={700} variant={'h4'} gutterBottom>
            Behavioural and neural investigations of human sensory and cognitive processes
          </Typography>
          <Typography variant={'h6'}>
            School of Psychology, The University of Sydney
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button variant="contained" color="primary" size="large">
            Apply now
          </Button>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            Refer a friend
          </Box>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />

      <Grid container spacing={isMd ? 4 : 2}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          {/* Summary Section */}
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Summary
            </Typography>
            <Typography component={'p'}>
              The overarching aim of this program of research is to better understand the
              neural and behavioural correlates of perceptual and cognitive functions. We will
              take a convergent approach to examining these functions by undertaking experiments
              that use three different but complementary research methodologies:
              <strong> (1) behavioural measurements,</strong>
              <strong> (2) neural recordings,</strong>
              and
              <strong> (3) computational modelling.</strong>
            </Typography>
          </Box>

          {/* Synopsis Section */}
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Synopsis
            </Typography>
            <Typography component={'p'}>
              The human brain has a remarkable ability to perceive and process information, and
              to co‐ordinate appropriate actions in the form of motor responses. Despite the enormous
              strides that have been made in understanding human perceptual and cognitive processes
              over the last 20 years, there are still many fundamental gaps in our understanding of how
              the brain regulates the processes underlying our interaction with and perception of the
              world. A central aim of the current project is to better understand how human perception
              and cognition.
            </Typography>
            <Typography component={'p'} sx={{ marginTop: 2 }}>
              We now have the capacity to image the brain using methods such as
              electroencephalography (EEG) and functional magnetic resonance imaging (fMRI) as people
              undertake various perceptual, cognitive and motor tasks. This project will use different
              techniques, alone and in combination, to better understand the neural processes that
              underpin perception, cognition and motor control.
            </Typography>
          </Box>

          {/* Additional Information Section */}
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Additional information
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: 1 }}>
              <strong>Project keywords:</strong> neuroscience; psychology; perception; cognition; artificial
              intelligence; AI; functional magnetic resonance imaging; fMRI; electroencephalography; EEG;
              magnetic resonance spectroscopy; MRS; eye tracking
            </Typography>
          </Box>

          {/* Want to find out more? */}
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Want to find out more?
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography component="span">
                  Interested in this opportunity? Want to know what to do next? Find out all you need
                  to know about the{' '}
                  <Link
                    href="https://www.sydney.edu.au/study/how-to-apply/postgraduate-research.html"
                    color="error"
                  >
                    application process
                  </Link>{' '}
                  including how to approach a potential supervisor and{' '}
                  <Link
                    href="https://www.sydney.edu.au/study/how-to-apply/postgraduate-research/how-to-write-a-research-proposal-for-a-strong-phd-application.html"
                    color="error"
                  >
                    develop a research proposal
                  </Link>.
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography>
                  Browse for other opportunities within the{' '}
                  <Link
                    href="http://sydney.edu.au/science/psychology/research/"
                    color="error"
                  >
                    School of Psychology
                  </Link>
                  .
                </Typography>
              </Box>
              <Box component="li">
                <Typography>
                  Contact us to find out what's involved in applying for a PhD.{' '}
                  <Link
                    href="https://sydneyuni.service-now.com/sas?id=sc_cat_item_public&sys_id=185a07f6dbde2810379991a3e296199c&sysparm_rou_code=RPPHD&sysparm_student_type=Domestic&sysparm_category=Admission%20to%20the%20University"
                    color="error"
                  >
                    Domestic students
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="https://sydneyuni.service-now.com/sas?id=sc_cat_item_public&sys_id=185a07f6dbde2810379991a3e296199c&sysparm_rou_code=RPPHD&sysparm_student_type=International&sysparm_category=Admission%20to%20the%20University"
                    color="error"
                  >
                    international students
                  </Link>
                  .
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Opportunity ID */}
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Opportunity ID
            </Typography>
            <Typography>
              The opportunity ID for this research opportunity is 3316
            </Typography>
          </Box>

          {/* Other Opportunities */}
          <Box>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Other opportunities with Dr Reuben Rideaux
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li">
                <Typography>
                  Seeing the world one step at a time
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Sidebar Content */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card} bgcolor={'primary.main'}>
                <CardContent>
                  <Box
                    component={Link}
                    href="https://www.sydney.edu.au/science/about/our-people/academic-staff/reuben-rideaux.html"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: 'common.white',
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: 'common.white',
                        marginRight: 1,
                        marginBottom: 0,
                      }}
                    >
                      More about Dr Reuben Rideaux
                    </Typography>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
