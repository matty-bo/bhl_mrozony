import { Box, Typography } from '@mui/material';
import React from 'react';
import { DashboardBarChart } from './barChart/barChart';
import { LineChart } from './lineChart/lineChart';

// TODO: remove mocked data
const getInitialValue = () => 8 + Math.random() * 20;
const getNextValue = (value) => value + Math.floor(Math.random() * 5);

const InfoBoxTitle = (props) => {
  const { label } = props;

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

const UsageInfo = (props) => {
  const { averageValue, averageRegionValue, averageUserValue } = props;

  return (
    <Box>
      <Typography sx={{ fontWeight: '500', margin: '.5em 0' }}>
        {`Średnie zużycie godzinowe: ${averageUserValue.toFixed(2)}`}
      </Typography>
      <Typography sx={{ fontWeight: '500', margin: '.5em 0' }}>
        {`Średnie zużycie godzinowe (w twojej okolicy): ${averageRegionValue.toFixed(2)}`}
      </Typography>
      <Typography sx={{ fontWeight: '500', margin: '.5em 0' }}>
        {`Średnie zużycie godzinowe (ogólnie): ${averageValue.toFixed(2)}`}
      </Typography>
    </Box>
  );
}

export const ChartBox = (props) => {
  const initialValue = getInitialValue();
  const { barChart, lineChart } = props;

  return (
    <Box sx={{
      borderRadius: '8px',
      boxShadow: (theme) => `0 0 5px ${theme.greyColor}`,
      backgroundColor: (theme) => `${theme.lightGreyColor}`,
      minHeight: 120,
      margin: '15px',
      padding: '15px',
      width: '100%'
    }}>
      <InfoBoxTitle label='Zużycie wody'></InfoBoxTitle>
      {barChart && <Box sx={{ display: 'flex', paddingTop: '10px' }}>
        <Box sx={{
          width: '50%'
        }}>
          <DashboardBarChart></DashboardBarChart>
        </Box>
        <Box sx={{
          width: '50%',
          paddingLeft: '20px'
        }}>
          <UsageInfo
            averageUserValue={initialValue}
            averageValue={getNextValue(initialValue)}
            averageRegionValue={getNextValue(initialValue)}>
          </UsageInfo>
        </Box>
      </Box>}

      {lineChart && <Box sx={{ display: 'flex', paddingTop: '10px' }}>
        <Box sx={{
          width: '50%'
        }}>
          <LineChart></LineChart>
        </Box>
        <Box sx={{
          width: '50%',
          paddingLeft: '20px'
        }}>
          <UsageInfo
            averageUserValue={initialValue}
            averageValue={getNextValue(initialValue)}
            averageRegionValue={getNextValue(initialValue)}>
          </UsageInfo>
        </Box>
      </Box>}
    </Box>
  );
}