import React, { useState } from 'react';
import { ThemeProvider, createTheme, Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress, Snackbar, Switch, FormControlLabel } from '@mui/material';
import Header from './components/Header';
import MapContainer from './components/MapContainer';
import DynamicForm from './components/DynamicForm';
import { countryWebsites } from './siteData';
import Notification from './components/Notification';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FFA500', // Orange
    },
    secondary: {
      main: '#FF0000', // Red
    },
    background: {
      default: '#FFFFFF', // White
    },
    text: {
      primary: '#000000', // Black
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFA500', // Orange
    },
    secondary: {
      main: '#FF0000', // Red
    },
    background: {
      default: '#080e1b', // Dark background
    },
    text: {
      primary: '#FFFFFF', // White
    },
  },
});

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSite, setSelectedSite] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', url: '' });
  const [darkMode, setDarkMode] = useState(false);

  const handleSelectCountry = (countryName) => {
    setSelectedCountry(countryName);
    setSelectedSite('');
    setDrawerOpen(true);
  };

  const handleSelectSite = (event) => {
    setSelectedSite(event.target.value);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleFormSubmit = async () => {
    setLoading(true);
    const formData = new FormData(document.getElementById('dynamic-form'));

    try {
      const response = await fetch('http://your-flask-api-endpoint/scrap', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setLoading(false);
      setNotification({ open: true, message: 'Scraping completed!', url: data.download_url });
    } catch (error) {
      setLoading(false);
      setNotification({ open: true, message: 'An error occurred while scraping.', url: '' });
    }
  };

  const handleNotificationClose = () => {
    setNotification({ ...notification, open: false });
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', backgroundColor: darkMode ? '#14213D' : 'white' }}>
        <Header
          darkMode={darkMode}
          handleDarkModeToggle={handleDarkModeToggle}
          toggleDrawer={toggleDrawer}
        />
        <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
          <Box sx={{ flexGrow: 1, transition: 'margin 0.3s', marginRight: drawerOpen ? '300px' : 0 }}>
            <MapContainer
              onSelectCountry={handleSelectCountry}
              themeMode={darkMode ? 'dark' : 'light'}
            />
          </Box>
          {drawerOpen && (
            <Box sx={{ width: 300, flexShrink: 0, bgcolor: darkMode ? '#080e1b' : '#FFFFFF', transition: 'width 0.3s' }}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6">
                  Select a Site in {selectedCountry}
                </Typography>
                <FormControl fullWidth sx={{ mt: 2 }}>
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
                <Box id="dynamic-form" sx={{ mt: 2 }}>
                  <DynamicForm site={selectedSite} />
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Button variant="contained" color="primary" onClick={handleFormSubmit} disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Scrap'}
                  </Button>
                  <Button variant="contained" color="secondary" onClick={toggleDrawer(false)}>
                    Close
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        <Notification
          notification={notification}
          handleNotificationClose={handleNotificationClose}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
