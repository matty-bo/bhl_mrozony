import React from 'react';
import { Box } from '@mui/system';
import { InfoBox } from '../components/infoBox';

export const Dashboard = () => {
  return(
    <Box>
      <InfoBox></InfoBox>
      <InfoBox></InfoBox>
      <InfoBox></InfoBox>
    </Box>
  );
}