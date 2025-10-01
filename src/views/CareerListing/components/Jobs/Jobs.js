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

export const mock = [];

const Jobs = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [roleFilter, setRoleFilter] = useState('');
  const [teamFilter, setTeamFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Handle application navigation based on URL type
  const handleApply = (applicationUrl, isExternal) => {
    if (isExternal) {
      window.open(applicationUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.scrollTo(0, 0);
      navigate(applicationUrl);
    }
  };

  // Dynamically generate filter options based on mock data
  const roles = useMemo(() => {
    const uniqueRoles = mock.map(job => job.role);
    return Array.from(new Set(uniqueRoles));
  }, []);

  const teams = useMemo(() => {
    const uniqueTeams = mock.map(job => job.team);
    return Array.from(new Set(uniqueTeams));
  }, []);

  const locations = useMemo(() => {
    const uniqueLocations = mock.map(job => job.location);
    return Array.from(new Set(uniqueLocations));
  }, []);

  // Filter jobs based on selected filters
  const filteredJobs = useMemo(() => {
    return mock.filter(job => {
      const matchesRole = !roleFilter || job.role === roleFilter;
      const matchesTeam = !teamFilter || job.team === teamFilter;
      const matchesLocation = !locationFilter || job.location === locationFilter;
      return matchesRole && matchesTeam && matchesLocation;
    });
  }, [roleFilter, teamFilter, locationFilter]);

  // Handlers for filter changes
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
    <Box padding={4}>
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
          Current Lab Openings
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
        {/* Role Filter */}
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="role-filter-label">Roles</InputLabel>
            <Select
              labelId="role-filter-label"
              label="Roles"
              value={roleFilter}
              onChange={handleRoleChange}
            >
              <MenuItem value="">
                <em>All Roles</em>
              </MenuItem>
              {roles.map(role => (
                <MenuItem key={role} value={role}>
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Team Filter */}
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="team-filter-label">Teams</InputLabel>
            <Select
              labelId="team-filter-label"
              label="Teams"
              value={teamFilter}
              onChange={handleTeamChange}
            >
              <MenuItem value="">
                <em>All Teams</em>
              </MenuItem>
              {teams.map(team => (
                <MenuItem key={team} value={team}>
                  {team}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Location Filter */}
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="location-filter-label">Locations</InputLabel>
            <Select
              labelId="location-filter-label"
              label="Locations"
              value={locationFilter}
              onChange={handleLocationChange}
            >
              <MenuItem value="">
                <em>All Locations</em>
              </MenuItem>
              {locations.map(location => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
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
            We are not currently hiring. Please check back for future opportunities.
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
            {filteredJobs.length} Openings
          </Typography>
        </Box>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          background: theme.palette.background.paper,
          borderRadius: 2,
          padding: 2,
        }}
      >
        {filteredJobs.length > 0 ? (
          filteredJobs.map((item) => (
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
                    onClick={() => handleApply(item.applicationUrl, item.isExternal)}
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
                    Enquire
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center" color="text.secondary">
              There are currently no lab openings. Please check back later.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Jobs;
