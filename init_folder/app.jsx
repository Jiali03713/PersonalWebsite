import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import './app.css';

export function App() {
    return (
        <Box>
            <img src="/image.png" alt="Description" style={{ width: "95vw", height: "auto" }} />
            {/* NavBar */}
            <Box className="navbar">
                <Typography variant='h6'> Home</Typography>
                <Typography variant='h6'> Music </Typography>
                <Typography variant='h6'> chat </Typography>
            </Box>
            <Box className="starting-page">
                <Typography  variant="h3"> Welcome to my page!</Typography>
            </Box>
        </Box>
    );
}