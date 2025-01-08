/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const mock = [
  {
    id: 'phd-researcher-2024',  // Added unique identifier
    title: 'PhD Researcher',
    location: 'Sydney',
    type: 'Full time',
    team: 'Dr Reuben Rideaux',
    subtitle: 'Seeing the world one step at a time (3596)',
    role: 'design',
    applicationUrl: '/career-opening'  // Added application route
  },
  {
    id: 'research-assistant-2024',  // Added unique identifier
    title: 'Research Associate',
    location: 'Sydney',
    type: 'Full time',
    team: 'Dr Reuben Rideaux',
    subtitle: 'Behavioural and neural investigations of human sensory and cognitive processes (3316)',
    role: 'support',
    applicationUrl: '/career-3316'  // Added application route
  },
];

const Jobs = () => {
  const theme = useTheme();
  const navigate = useNavigate();  // Hook for navigation

  // Add state for filters
  const [roleFilter, setRoleFilter] = useState('');
  const [teamFilter, setTeamFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Handle job application with scroll to top
  const handleApply = (applicationUrl) => {
    window.scrollTo(0, 0);
    navigate(applicationUrl);
  };

  // Filter jobs based on selected criteria
  const filteredJobs = useMemo(() => {
    return mock.filter(job => {
      const matchesRole = !roleFilter || job.role === roleFilter;
      const matchesTeam = !teamFilter || job.team === teamFilter;
      const matchesLocation = !locationFilter || job.location === locationFilter;
      return matchesRole && matchesTeam && matchesLocation;
    });
  }, [roleFilter, teamFilter, locationFilter]);

  // Handle filter changes
  const handleRoleChange = (event) => {
    setRoleFilter(event.target.value);
  };

  const handleTeamChange = (event) => {
    setTeamFilter(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          color={'text.secondary'}
          sx={{ textTransform: 'uppercase' }}
          variant={'subtitle2'}
          fontWeight={600}
        >
          Open positions
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Current lab openings
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          '.MuiOutlinedInput-root': {
            background: theme.palette.background.paper,
          },
        }}
      >
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
            <InputLabel id="role-filter-label">Roles</InputLabel>
            <Select
              labelId="role-filter-label"
              label="Roles"
              value={roleFilter}
              onChange={handleRoleChange}
            >
              <MenuItem value="">
                <em>All roles</em>
              </MenuItem>
              <MenuItem value={'design'}>PhD Researcher</MenuItem>
              <MenuItem value={'engineering'}>Engineering</MenuItem>
              <MenuItem value={'product'}>Internships</MenuItem>
              <MenuItem value={'support'}>Research Assistant</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
            <InputLabel id="team-filter-label">Teams</InputLabel>
            <Select
              labelId="team-filter-label"
              label="Teams"
              value={teamFilter}
              onChange={handleTeamChange}
            >
              <MenuItem value="">
                <em>All teams</em>
              </MenuItem>
              <MenuItem value={'Dr Reuben Rideaux'}>Dr Reuben Rideaux</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
            <InputLabel id="location-filter-label">Locations</InputLabel>
            <Select
              labelId="location-filter-label"
              label="Locations"
              value={locationFilter}
              onChange={handleLocationChange}
            >
              <MenuItem value="">
                <em>All locations</em>
              </MenuItem>
              <MenuItem value={'Sydney'}>Sydney</MenuItem>
              <MenuItem value={'Queensland'}>Queensland</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        flex={'1 1 100%'}
        justifyContent={{ sm: 'space-between' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        marginY={4}
      >
        <Box marginBottom={{ xs: 1, sm: 0 }}>
          <Typography variant={'h6'} fontWeight={700}>
            Research and Development
          </Typography>
          <Typography color={'text.secondary'}>
            We're currently looking for researchers and lab assistants.
          </Typography>
        </Box>
        <Box
          paddingY={1 / 2}
          paddingX={1}
          bgcolor={'secondary.main'}
          borderRadius={2}
          marginRight={1}
        >
          <Typography
            variant={'caption'}
            fontWeight={700}
            sx={{ color: 'common.black' }}
          >
            {filteredJobs.length} openings
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          background: theme.palette.background.paper,
          borderRadius: 2,
        }}
      >
        {filteredJobs.map((item, i) => (
          <Grid
            item
            xs={12}
            key={item.id}
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&:last-child': {
                borderBottom: 0,
              },
            }}
          >
            <Box padding={2} display={'flex'} alignItems={'center'}>
              <Box
                display={'flex'}
                flexDirection={{ xs: 'column', sm: 'row' }}
                flex={'1 1 100%'}
                justifyContent={{ sm: 'space-between' }}
                alignItems={{ sm: 'center' }}
              >
                <Box marginBottom={{ xs: 1, sm: 0 }}>
                  <Typography variant={'subtitle1'} fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography color={'text.secondary'}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Typography color={'text.secondary'}>
                  {`${item.team} / ${item.location}`}
                </Typography>
              </Box>
              <Box marginLeft={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => handleApply(item.applicationUrl)}
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width={12}
                      height={12}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </Box>
                  }
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Jobs;