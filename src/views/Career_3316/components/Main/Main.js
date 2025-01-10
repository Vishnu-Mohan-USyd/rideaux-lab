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

  // We’ll store the Qualifications in an array to create fancy bullet points.
  const qualifications = [
    'Candidates with Ph.D. degrees in fields relevant to vision science are encouraged to apply.',
    'Ideal candidates should be well-trained in psychophysical studies, experimental design, human behaviour data collection, and statistics.',
    'Scientific writing skills are essential.',
    'Experience with EEG and/or VR is not required but desirable.',
  ];

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
              Our perception of the world does not solely rely on what our eyes see. Our actions
              play a crucial role in shaping how we perceive the world around us. Three of the most
              frequent actions are eye movements (saccades), reaching/grasping, and walking. The
              first two are well studied and known to influence perception. During saccades, for
              example, vision is briefly lost ("saccadic suppression") and when reaching, our eye
              gaze diverts to the target and away from other objects. Despite its fundamental role
              in our daily lives, little is known about how walking influences perception.
              <p />
              This project combines multiple technologies (virtual reality, electroencephalography, eye
              tracking, motion platform, artificial intelligence) to test dynamic perception in
              free-walking observers in virtual multisensory environments. It will reveal how walking
              modulates perception at the step rate, the influence of intention (active vs passive
              action) and establish the neural mechanisms underlying the perception/action link.
              <p />
              Understanding the influence of walking on our perception holds the potential to improve
              public safety and unlock myriad benefits in our daily lives. For example, the discovery
              of saccadic suppression informed digital display design to improve user experiences
              (e.g., exploiting saccadic masking, reduced motion blur.). The outcomes from this
              project could be harnessed to inform public safety measures/policy and enhance the
              efficiency of digital displays, communication systems, and device feedback mechanisms,
              thereby enriching user experiences.
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
              A full time 3-year fixed term postdoctoral position is open in the Lab of Dr.
              Reuben Rideaux at the School of Psychology, University of Sydney, Australia. The
              position is available immediately.
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: 1 }}>
              The selected candidate will work with Dr Rideaux and Prof David Alais on the project
              “Seeing the world one step at a time”. This project combines multiple technologies
              (virtual reality, electroencephalography, eye tracking, motion platform, artificial
              intelligence) to test dynamic perception in free-walking healthy human observers in
              virtual multisensory environments.
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: 1 }}>
              The School of Psychology consistently ranks among the best in the world. In the most
              recent QS World University Rankings, the School ranked in the Top 3 Psychology
              departments in Australia and the Top 30 in the world, with the University of Sydney
              ranking in the Top 20 universities in the world.
            </Typography>

            {/* Qualifications header (unchanged) */}
            <Typography component={'p'} sx={{ marginBottom: 1 }}>
              <strong>Qualifications</strong>
            </Typography>

            {/* Replace the textual asterisks with bullet points */}
            <Grid container spacing={1} sx={{ marginBottom: 2 }}>
              {qualifications.map((item, idx) => (
                <Grid item xs={12} key={idx}>
                  <Box component={ListItem} disableGutters width={'auto'} padding={0}>
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        sx={{ width: 20, height: 20 }}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Typography component={'p'} sx={{ marginBottom: 1 }}>
              We welcome applicants with diverse backgrounds, regardless of nationality, gender,
              orientation, or disability status.
            </Typography>
          </Box>

          {/* Want to find out more? */}
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Want to find out more?
            </Typography>
            <Typography component={'p'}>
              Interested in this opportunity? Want to know what to do next? Please submit inquiries
              and applications to{' '}
              <Link href="mailto:reuben.rideaux@sydney.edu.au" color="error">
                reuben.rideaux@sydney.edu.au
              </Link>.
              <br />
              Applications will be reviewed and considered until the position is filled.
            </Typography>
          </Box>

          {/* Opportunity ID */}
          {/*<Box marginBottom={3}>*/}
          {/*  <Typography variant={'h5'} fontWeight={700} gutterBottom>*/}
          {/*    Opportunity ID*/}
          {/*  </Typography>*/}
          {/*  <Typography>*/}
          {/*    The opportunity ID for this research opportunity is 3316*/}
          {/*  </Typography>*/}
          {/*</Box>*/}

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
