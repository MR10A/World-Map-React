import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, FormControlLabel, Switch, Modal } from '@mui/material';
import AnalyseReport from './AnalyseReport';

const Header = ({ darkMode, handleDarkModeToggle, toggleDrawer }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Button color="inherit" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>Scrap</Button>
            <Button color="inherit" sx={{ mr: 2 }} onClick={handleOpenModal}>Analyse Report</Button>
          </Box>
          <Typography variant="h6" component="div">
            Intelligent Sourcing
          </Typography>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={handleDarkModeToggle} />}
            label="Dark Mode"
          />
        </Toolbar>
      </AppBar>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="analyse-report-modal-title"
        aria-describedby="analyse-report-modal-description"
      >
        <Box sx={{ width: '50%', margin: 'auto', mt: '10%', p: 2, bgcolor: 'background.paper', boxShadow: 24 }}>
          <AnalyseReport />
        </Box>
      </Modal>
    </>
  );
};

export default Header;
