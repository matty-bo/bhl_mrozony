import React from 'react';
import { Box, Typography } from '@mui/material';
import { DashboardBarChart } from './barChart';

const InfoBoxTitle = (props) => {
  const {label} = props;

  return (
    <Typography sx={{
      fontSize: '1.05em',
      textTransform: 'uppercase',
      borderColor: '#ffffff',
      borderBottom: 'solid 2px',
      paddingBottom: '5px'
    }}>
      {label}
    </Typography>
  );
}

export const InfoBox = () => {
  return(
    <Box sx={{
      color: '#ffffff',
      borderRadius: '8px',
      border: 'solid 1px #1976d2',
      backgroundColor: 'rgba(25, 118, 210, 0.5)',
      minHeight: 120,
      margin: '15px 5%',
      padding: '15px'
    }}>
      <InfoBoxTitle label='Zużycie wody'></InfoBoxTitle>
      <DashboardBarChart></DashboardBarChart>
    </Box>
  );
}