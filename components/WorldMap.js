import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Box, Typography } from '@mui/material';
import worldGeoData from '../countries.geojson';

const lightModeStyles = {
  default: {
    fill: '#FFD700', // Gold
    stroke: '#FFFFFF',
    strokeWidth: 0.75,
    outline: 'none',
  },
  hover: {
    fill: '#FF4500', // OrangeRed
    stroke: '#FFFFFF',
    strokeWidth: 0.75,
    outline: 'none',
  },
  pressed: {
    fill: '#8B0000', // DarkRed
    stroke: '#FFFFFF',
    strokeWidth: 0.75,
    outline: 'none',
  },
};

const darkModeStyles = {
  default: {
    fill: '#FFD700', // DarkGreen
    stroke: '#000000', // Black border
    strokeWidth: 0.75,
    outline: 'none',
  },
  hover: {
    fill: '#FF4500', // ForestGreen
    stroke: '#000000', // Black border
    strokeWidth: 0.75,
    outline: 'none',
  },
  pressed: {
    fill: '#32CD32', // LimeGreen
    stroke: '#000000', // Black border
    strokeWidth: 0.75,
    outline: 'none',
  },
};

function WorldMap({ onSelectCountry, themeMode }) {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (geo) => {
    setHoveredCountry(geo.properties.ADMIN);
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const styles = themeMode === 'dark' ? darkModeStyles : lightModeStyles;

  return (
    <Box sx={{ width: '100%', height: '400px', position: 'relative', backgroundColor: themeMode === 'dark' ? '#14213D' : 'white' }}>
      <ComposableMap>
        <Geographies geography={worldGeoData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => onSelectCountry(geo.properties.ADMIN)}
                onMouseEnter={() => handleMouseEnter(geo)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                style={styles}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {hoveredCountry && (
        <Typography
          sx={{
            position: 'absolute',
            top: mousePosition.y,
            left: mousePosition.x,
            bgcolor: 'white',
            padding: '2px 8px',
            borderRadius: '4px',
            boxShadow: 1,
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          {hoveredCountry}
        </Typography>
      )}
    </Box>
  );
}

export default WorldMap;
