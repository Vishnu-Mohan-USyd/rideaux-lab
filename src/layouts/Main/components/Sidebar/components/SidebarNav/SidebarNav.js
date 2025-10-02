/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import NavItem from './components/NavItem';  // This will be the Accordion version
import ThemeModeToggler from 'components/ThemeModeToggler';

const SidebarNav = ({ pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages || {};

  return (
    <Box>
      {/* Logo area */}
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
        marginBottom={2}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? '/LAB_LOGO.svg'
              : '/LAB_LOGO.svg'
          }
          height={1}
          width={1}
        />
      </Box>

      {/* Nav Items */}
      <Box marginBottom={2}>
        <NavItem
          title={'Research'}
          href="/"
          colorInvert={colorInvert}
        />
      </Box>
      <Box marginBottom={2}>
        <NavItem
          title={'People'}
          items={companyPages || []}
          colorInvert={colorInvert}
        />
      </Box>
      <Box marginBottom={2}>
        <NavItem
          title={'Publications'}
          href="/publications"
          colorInvert={colorInvert}
        />
      </Box>
      <Box marginBottom={2}>
        <NavItem
          title={'Contact'}
          href="/contact-us"
          colorInvert={colorInvert}
        />
      </Box>

      {/* Theme Toggler */}
      <Box marginTop="auto" paddingY={2}>
        <ThemeModeToggler />
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default SidebarNav;