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
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={700} variant={'h4'} gutterBottom>
            Seeing the world one step at a time
          </Typography>
          <Typography variant={'h6'}>School of Psychology, The University of Sydney</Typography>
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
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Summary
            </Typography>
            <Typography component={'p'}>
              Our perception of the world does not solely rely on what our eyes see. Our actions play a crucial role in shaping how we perceive the world around us. Three of the most frequent actions are eye movements (saccades), reaching/grasping, and walking. The first two are well studied and known to influence perception. During saccades, for example, vision is briefly lost ("saccadic suppression") and when reaching, our eye gaze diverts to the target and away from other objects. Despite its fundamental role in our daily lives, little is known about how walking influences perception.
              <p/>
              This project combines multiple technologies (virtual reality, electroencephalography, eye tracking, motion platform, artificial intelligence) to test dynamic perception in free-walking observers in virtual multisensory environments. It will reveal how walking modulates perception at the step rate, the influence of intention (active vs passive action) and establish the neural mechanisms underlying the perception/action link.
              <p/>
              Understanding the influence of walking on our perception holds the potential to improve public safety and unlock myriad benefits in our daily lives. For example, the discovery of saccadic suppression informed digital display design to improve user experiences (e.g., exploiting saccadic masking, reduced motion blur.). The outcomes from this project could be harnessed to inform public safety measures/policy and enhance the efficiency of digital displays, communication systems, and device feedback mechanisms, thereby enriching user experiences.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Additional Information
            </Typography>
            <Typography component={'p'}>
              This opportunity/project is a part of Faculty of Science Australian Research Council (ARC) Scholarship scheme and will be advertised on the Scholarship Office website starting mid- January 2025. The selected applicant is expected to commence their candidature in March (RP2) 2025 onward. Successful applicants will be supervised by Dr Reuben Rideaux and focus primarily on their own PhD projects. They will also have the opportunity to participate in any activities held at the University of Sydney under ARC Discovery Project (DP). Candidate will be enrolled in School of Psychology, Faculty of Science at University of Sydney.
            </Typography>
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              {[
                'The application process is separate from applying for admission to the University of Sydney.',
                'The scholarship will only be awarded once the successful scholarship applicant has received an unconditional offer of admission.',
                'International applicants are responsible for securing any necessary visas and costs to enable study based in Sydney.',
              ].map((item, i) => (
                <Grid item xs={12} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        width={20}
                        height={20}
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
          </Box>
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Want to find out more?
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography component="span">
                  Interested in this opportunity? Want to know what to do next? Find out all you need to know about the{' '}
                  <Link href="https://www.sydney.edu.au/study/how-to-apply/postgraduate-research.html" color="error">application process</Link> including how to approach a potential{' '}
                  supervisor and
                  <Link href="https://www.sydney.edu.au/study/how-to-apply/postgraduate-research/how-to-write-a-research-proposal-for-a-strong-phd-application.html" color="error"> develop a research proposal</Link>.
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography>
                  Browse for other opportunities within the{' '}
                  <Link href="http://sydney.edu.au/science/psychology/research/" color="error">School of Psychology</Link>.
                </Typography>
              </Box>
              <Box component="li">
                <Typography>
                  Contact us to find out what's involved in applying for a PhD.{' '}
                  <Link href="https://sydneyuni.service-now.com/sas?id=sc_cat_item_public&sys_id=185a07f6dbde2810379991a3e296199c&sysparm_rou_code=RPPHD&sysparm_student_type=Domestic&sysparm_category=Admission%20to%20the%20University" color="error">Domestic students</Link> and{' '}
                  <Link href="https://sydneyuni.service-now.com/sas?id=sc_cat_item_public&sys_id=185a07f6dbde2810379991a3e296199c&sysparm_rou_code=RPPHD&sysparm_student_type=International&sysparm_category=Admission%20to%20the%20University" color="error">international students</Link>.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Opportunity ID
            </Typography>
            <Typography>
              The opportunity ID for this research opportunity is 3596
            </Typography>
          </Box>
          <Box>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Other opportunities with Dr Reuben Rideaux
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li">
                <Typography>
                  Behavioural and neural investigations of human sensory and cognitive processes
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
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
                      color: 'common.white'
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: 'common.white',
                        marginRight: 1,
                        marginBottom: 0
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