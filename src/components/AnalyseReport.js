import React, { useState } from 'react';
import { Box, Button, TextareaAutosize, Typography, CircularProgress, useTheme } from '@mui/material';
import AnalysisResult from './AnalysisResult';

const AnalyseReport = () => {
  const [reportData, setReportData] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const theme = useTheme();

  const handleAnalyzeReport = async () => {
    setLoading(true);
    try {
      // Simulate an API call to analyze the report
      const response = await fetch('http://your-flask-api-endpoint/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ report: reportData }),
      });
      const result = await response.json();
      setAnalysisResult(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAnalysisResult({ error: 'An error occurred while analyzing the report.' });
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Analyse Report</Typography>
      <TextareaAutosize
        minRows={10}
        placeholder="Enter report data here..."
        value={reportData}
        onChange={(e) => setReportData(e.target.value)}
        style={{
          width: '100%',
          marginTop: '10px',
          padding: '10px',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderColor: theme.palette.divider,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAnalyzeReport}
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Analyze'}
      </Button>
      {analysisResult && <AnalysisResult result={analysisResult} />}
    </Box>
  );
};

export default AnalyseReport;
