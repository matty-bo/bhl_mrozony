import React from 'react';
import { Box } from '@mui/system';
import { ChartBox } from '../../components/chartBox';
import { MainListItems } from '../../components/sidebar';
import { SidebarWrapper } from './dashboard.styles';

export const Dashboard = () => {
  return(
    <Box sx={{
      display: 'flex'
    }}>
      <SidebarWrapper>
        <MainListItems></MainListItems>
      </SidebarWrapper>
      <ChartBox barChart lineChart></ChartBox>
    </Box>
  );
}