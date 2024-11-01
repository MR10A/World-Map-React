import React from 'react';
import { Drawer, Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress } from '@mui/material';
import DynamicForm from './DynamicForm';
import { countryWebsites } from '../siteData';

const SiteDrawer = ({ selectedCountry, selectedSite, drawerOpen, handleSelectSite, toggleDrawer, handleFormSubmit, loading }) => {
  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 300 }}
        role="presentation"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
      >
        <Typography variant="h6" sx={{ p: 2 }}>
          Select a Site in {selectedCountry}
        </Typography>
        <FormControl fullWidth sx={{ p: 2 }}>
          <InputLabel id="site-select-label">Site</InputLabel>
          <Select
            labelId="site-select-label"
            id="site-select"
            value={selectedSite}
            onChange={handleSelectSite}
            label="Site"
          >
            {countryWebsites[selectedCountry]?.map((site, index) => (
              <MenuItem key={index} value={site.value}>
                {site.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box id="dynamic-form" sx={{ p: 2 }}>
          <DynamicForm site={selectedSite} />
        </Box>
        <Box display="flex" justifyContent="space-between" p={2}>
          <Button variant="contained" color="primary" onClick={handleFormSubmit} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Scrap'}
          </Button>
          <Button variant="contained" color="secondary" onClick={toggleDrawer(false)}>
            Close
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SiteDrawer;
