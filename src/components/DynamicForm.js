import React from 'react';
import { Box } from '@mui/material';
import { siteInputs } from '../siteData';

const DynamicForm = ({ site }) => {
    return (
        <Box>
            {siteInputs[site] || <div>Select a site to see the form</div>}
        </Box>
    );
};

export default DynamicForm;
