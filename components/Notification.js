import React from 'react';
import { Snackbar, Button } from '@mui/material';

const Notification = ({ notification, handleNotificationClose }) => {
  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={6000}
      onClose={handleNotificationClose}
      message={notification.message}
      action={
        notification.url && (
          <Button color="secondary" size="small" href={notification.url}>
            Download
          </Button>
        )
      }
    />
  );
};

export default Notification;
