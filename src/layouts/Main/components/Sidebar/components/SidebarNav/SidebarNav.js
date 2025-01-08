/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import NavItem from './components/NavItem';
import ThemeModeToggler from 'components/ThemeModeToggler'; // <-- Import your own toggler

const SidebarNav = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  // Destructure the page groups for readability:
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      // If you do want this to act as a vertical sidebar,
      // you can set a fixed width, or 100% height, etc.
      // for demonstration, let's keep it simple:
      width={1}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      // Some spacing or styling:
      sx={{
        height: '100%', // if you want full viewport height
        p: 2,
      }}
    >
      {/* Logo area */}
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Sidebar Nav"
        width={{ xs: 100, md: 120 }}
        marginBottom={2}
      >
        <Box
          component={'img'}
          src={
            // The same logic from Topbar:
            mode === 'light' && !colorInvert
              ? '/rideauxlab_logo.svg'
              : '/rideauxlab_logo.svg'
          }
          height={1}
          width={1}
        />
      </Box>

      {/* Nav Items (vertical stack) */}
      <Box display="flex" flexDirection="column" flex="1 1 auto">
        <NavItem
          title={'Research'}
          id={'landing-pages'}
          href="/"
          colorInvert={colorInvert}
        />
        <Box mt={1}>
          <NavItem
            title={'People'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box mt={1}>
          <NavItem
            title={'Publications'}
            href="/agency"
            colorInvert={colorInvert}
          />
        </Box>
        <Box mt={1}>
          <NavItem
            title={'Contact'}
            href="/contact-sidebar-map"
            id={'blog-pages'}
            colorInvert={colorInvert}
          />
        </Box>
        {/* If you still want to show the other sections (secondary, account, etc.) */}
      </Box>

      {/* Footer area (Toggler, Mobile button, etc.) */}
      <Box display="flex" flexDirection="column" marginTop={2}>
        {/* Theme toggler, if you'd like it in the sidebar */}
        <Box marginBottom={1}>
          <ThemeModeToggler />
        </Box>

        {/* Mobile menu button or any other button you want.
            This is the same from Topbar, so it calls `onSidebarOpen`.
            Often, you'd have this in the Topbar to open *this* sidebar,
            but you can keep it for symmetry or for a nested structure. */}
        <Button
          onClick={onSidebarOpen}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  colorInvert: PropTypes.bool,
};

export default SidebarNav;
