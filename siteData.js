import React from 'react';
import { TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';



export const countryWebsites = {
    Germany: [
        { value: 'versteigerungskalender', text: 'www.versteigerungskalender.de' },
        { value: 'another-site', text: 'www.another-site.de' }
    ],
    USA: [
        { value: 'us-site1', text: 'www.us-site1.com' },
        { value: 'us-site2', text: 'www.us-site2.com' }
    ],
    France: [
        { value: 'fr-site1', text: 'www.fr-site1.fr' },
        { value: 'fr-site2', text: 'www.fr-site2.fr' }
    ]
};


export const siteInputs = {
    versteigerungskalender: (
        <>
            <FormControl fullWidth margin="normal">
                <InputLabel id="sector-label">Filter by sector</InputLabel>
                <Select labelId="sector-label" name="sector" id="sector" label="Filter by sector">
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="40098">Agriculture & Animals</MenuItem>
                    <MenuItem value="40142">Architects & Planning Offices</MenuItem>
                    <MenuItem value="40116">Automotive & Bikes</MenuItem>
                    <MenuItem value="40100">Ancillary construction trades</MenuItem>
                    <MenuItem value="40102">Contractors</MenuItem>
                    <MenuItem value="40106">Office & IT Services</MenuItem>
                    <MenuItem value="40108">Chemicals, Plastics, Paints</MenuItem>
                    <MenuItem value="40110">Printing & Publishing</MenuItem>
                    <MenuItem value="40112">Retail, Wholesale & Online Trade</MenuItem>
                    <MenuItem value="40114">Energy & Environment</MenuItem>
                    <MenuItem value="40118">Financial Services & Private Equity Firms</MenuItem>
                    <MenuItem value="40104">Research & Education</MenuItem>
                    <MenuItem value="40122">Garden & Landscaping</MenuItem>
                    <MenuItem value="40124">Glass</MenuItem>
                    <MenuItem value="40128">Craft</MenuItem>
                    <MenuItem value="40130">House Services</MenuItem>
                    <MenuItem value="40132">Woodworking & Trade</MenuItem>
                    <MenuItem value="40134">Hotel & Gastronomy, Food Production</MenuItem>
                    <MenuItem value="40136">Real estate</MenuItem>
                    <MenuItem value="40138">Import/Export</MenuItem>
                    <MenuItem value="40140">Industry</MenuItem>
                    <MenuItem value="40144">Cosmetics & Studios</MenuItem>
                    <MenuItem value="99867">Mechanical engineering</MenuItem>
                    <MenuItem value="40152">Medicine & Care</MenuItem>
                    <MenuItem value="40154">Personnel services</MenuItem>
                    <MenuItem value="40156">Security service</MenuItem>
                    <MenuItem value="40160">Sports & Leisure</MenuItem>
                    <MenuItem value="40162">Steel & Metal</MenuItem>
                    <MenuItem value="40164">Textile trade and production</MenuItem>
                    <MenuItem value="40166">Tourism & Travel</MenuItem>
                    <MenuItem value="40168">Transport & Logistics</MenuItem>
                    <MenuItem value="40174">Car Washes & Cleaning</MenuItem>
                    <MenuItem value="40176">Advertising & Marketing</MenuItem>
                </Select>
            </FormControl>
            <TextField fullWidth margin="normal" id="keywords" name="keywords" label="Keywords" placeholder="Enter keywords" />
        </>
    ),
    'another-site': (
        <TextField fullWidth margin="normal" id="category" name="category" label="Category" placeholder="Enter category" />
    ),
    'us-site1': (
        <TextField fullWidth margin="normal" id="product" name="product" label="Product" placeholder="Enter product" />
    ),
    'us-site2': (
        <TextField fullWidth margin="normal" id="service" name="service" label="Service" placeholder="Enter service" />
    ),
    'fr-site1': (
        <TextField fullWidth margin="normal" id="sector" name="sector" label="Sector" placeholder="Enter sector" />
    ),
    'fr-site2': (
        <TextField fullWidth margin="normal" id="location" name="location" label="Location" placeholder="Enter location" />
    )
};
