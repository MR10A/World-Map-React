import React from 'react';
import { Box, Typography } from '@mui/material';

const AnalysisResult = ({ result }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">Analysis Result</Typography>
      {result.error ? (
        <Typography color="error">{result.error}</Typography>
      ) : (
        <Typography>{JSON.stringify(result, null, 2)}</Typography>
      )}
    </Box>
  );
};

export default AnalysisResult;
