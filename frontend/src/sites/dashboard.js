import React from 'react';
import { Box } from '@mui/system';
import { InfoBox } from '../components/infoBox';
import { MainListItems } from '../components/sidebar';

export const Dashboard = () => {
  return(
    <Box sx={{
      display: 'flex'
    }}>
      <Box sx={{ minWidth: '200px', paddingTop: '10px', borderRight: 'solid 1px black' }}>
        <MainListItems></MainListItems>
      </Box>
      <InfoBox contentType='barChart'></InfoBox>
    </Box>
  );
}