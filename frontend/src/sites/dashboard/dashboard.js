import { Box } from '@mui/system';
import React from 'react';
import { ChartBox } from '../../components/chartBox';

export const Dashboard = () => {
  return (
    <Box sx={{
      display: 'flex'
    }}>
      <ChartBox barChart lineChart></ChartBox>
    </Box>
  );
}