import React from 'react';
import Box from '@mui/material/Box';

const Gallery = () => {
  return (
    <Box
      component="img"
      src="/assets/auckland-lab-trip.svg"
      alt="Rideaux Lab members overlooking Auckland during a lab trip"
      width={1}
      sx={{
        display: 'block',
        maxHeight: { xs: 360, sm: 520, md: 640 },
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: 2,
      }}
    />
  );
};

export default Gallery;
