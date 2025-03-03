/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';

const Sidebar = ({ pages, open, variant, onClose }) => {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 280,
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SidebarNav pages={pages} />
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  pages: PropTypes.object,
};

export default Sidebar;