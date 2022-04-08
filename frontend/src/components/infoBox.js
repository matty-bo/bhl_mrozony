import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { DashboardBarChart } from './barChart';

const InfoBoxTitle = (props) => {
  const {label} = props;

  return (
    <Typography sx={{
      fontSize: '1.05em',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderColor: '#ffffff',
      borderBottom: 'solid 2px',
      paddingBottom: '5px'
    }}>
      {label}
    </Typography>
  );
}

const DailyUsageInfo = (props) => {
  return (
    <Box>
      <Typography sx={{ fontWeight: 'bolder' }}>
        Średnie zużycie godzinowe: 18.5
      </Typography>
    </Box>
  );
}

export const InfoBox = (props) => {
  const {contentType} = props;

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
      <Box sx={{ display: 'flex', paddingTop: '10px' }}>
        <Box sx={{
          width: '50%'
        }}>
          { contentType === 'barChart' && <DashboardBarChart></DashboardBarChart> }
        </Box>
        <Box sx={{
          width: '50%',
          paddingLeft: '20px'
        }}>
          <DailyUsageInfo></DailyUsageInfo>
        </Box>
      </Box>
    </Box>
  );
}