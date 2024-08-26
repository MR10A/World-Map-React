import React from 'react';
import { Box } from '@mui/material';
import WorldMap from './WorldMap';

const MapContainer = ({ onSelectCountry, themeMode }) => {
  return (
    <Box sx={{ display: 'flex',width: '100%', height: '100%', flexGrow: 1, overflow: 'hidden', backgroundColor: themeMode === 'dark' ? '#14213D' : 'white' }}>
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <Box sx={{ width: '70%', height: 'auto', margin: 'auto' }}>
          <WorldMap onSelectCountry={onSelectCountry} themeMode={themeMode} />
        </Box>
      </Box>
    </Box>
  );
};

export default MapContainer;
