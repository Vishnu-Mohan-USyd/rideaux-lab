import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const NavItem = ({ title, id, items, href, colorInvert = false }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeLink, setActiveLink] = useState('');
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    setMounted(true);
    if (window) {
      setActiveLink(window.location.pathname);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // If href is provided, render a simple link instead of a dropdown
  if (href) {
    return (
      <Box
        component="a"
        href={href}
        sx={{
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <Typography color={colorInvert ? 'common.white' : 'text.primary'}>
          {title}
        </Typography>
      </Box>
    );
  }

  const handleMouseEnter = (event) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 300);
  };

  const handleClick = (event) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  if (!mounted) {
    return (
      <Box
        display={'flex'}
        alignItems={'center'}
        sx={{ cursor: 'pointer' }}
      >
        <Typography color={colorInvert ? 'common.white' : 'text.primary'}>
          {title}
        </Typography>
        <ExpandMoreIcon
          sx={{
            marginLeft: theme.spacing(1/4),
            width: 16,
            height: 16,
            color: colorInvert ? 'common.white' : 'text.primary',
          }}
        />
      </Box>
    );
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          aria-describedby={id}
          sx={{ cursor: 'pointer' }}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Typography color={colorInvert ? 'common.white' : 'text.primary'}>
            {title}
          </Typography>
          <ExpandMoreIcon
            sx={{
              marginLeft: theme.spacing(1/4),
              width: 16,
              height: 16,
              transform: open ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s',
              color: colorInvert ? 'common.white' : 'text.primary',
            }}
          />
        </Box>
        {items && items.length > 0 && mounted && (
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement="bottom-start"
            sx={{ zIndex: 1200 }}
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <Paper
              sx={{
                maxWidth: items.length > 12 ? 350 : 250,
                padding: 2,
                marginTop: 2,
                borderRadius: 2,
                borderTop: `3px solid ${theme.palette.primary.main}`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            >
              <Grid container spacing={0.5}>
                {items.map((p, i) => (
                  <Grid item key={i} xs={items.length > 12 ? 6 : 12}>
                    <Box
                      component="a"
                      href={p.href}
                      sx={{
                        textDecoration: 'none',
                        display: 'block',
                        padding: 1,
                        borderRadius: 1,
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        },
                        ...(activeLink === p.href && {
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                        }),
                      }}
                    >
                      <Typography
                        variant="body2"
                        color={activeLink === p.href ? 'primary' : 'textPrimary'}
                      >
                        {p.title}
                      </Typography>
                      {p.isNew && (
                        <Box
                          padding={0.5}
                          display={'inline-flex'}
                          borderRadius={1}
                          bgcolor={'primary.main'}
                          marginLeft={2}
                        >
                          <Typography
                            variant={'caption'}
                            sx={{ color: 'common.white', lineHeight: 1 }}
                          >
                            new
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Popper>
        )}
      </Box>
    </ClickAwayListener>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  items: PropTypes.array,
  href: PropTypes.string,
  colorInvert: PropTypes.bool,
};

export default NavItem;