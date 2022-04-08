import React from 'react';
import { Box, Typography } from '@mui/material';
import { DashboardBarChart } from './barChart';
import { LineChart } from './lineChart';
import { toPrecision } from '../utils/precision';

// TODO: remove mocked data
const getInitialValue = () => 8 + Math.random() * 20;
const getNextValue = (value) => value + Math.floor(Math.random() * 5);

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
  const {averageValue, averageRegionValue, averageUserValue} = props;

  return (
    <Box>
      <Typography sx={{ fontWeight: '500', margin: '.5em 0'  }}>
        { `Średnie zużycie godzinowe: ${ averageUserValue.toFixed(2) }` }
      </Typography>
      <Typography sx={{ fontWeight: '500', margin: '.5em 0' }}>
        { `Średnie zużycie godzinowe (w twojej okolicy): ${ averageRegionValue.toFixed(2) }` }
      </Typography>
      <Typography sx={{ fontWeight: '500', margin: '.5em 0'  }}>
        { `Średnie zużycie godzinowe (ogólnie): ${ averageValue.toFixed(2) }` }
      </Typography>
    </Box>
  );
}

export const InfoBox = (props) => {
  const initialValue = getInitialValue();
  const {contentType} = props;

  return(
    <Box sx={{
      color: '#ffffff',
      borderRadius: '8px',
      border: 'solid 1px #1976d2',
      backgroundColor: 'rgba(25, 118, 210, 0.5)',
      minHeight: 120,
      margin: '15px',
      padding: '15px',
      width: '100%'
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
          <DailyUsageInfo
            averageUserValue={initialValue}
            averageValue={getNextValue(initialValue)}
            averageRegionValue={getNextValue(initialValue)}>
          </DailyUsageInfo>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', paddingTop: '10px' }}>
        <Box sx={{
          width: '50%'
        }}>
          { contentType === 'barChart' && <LineChart></LineChart> }
        </Box>
        <Box sx={{
          width: '50%',
          paddingLeft: '20px'
        }}>
          <DailyUsageInfo
            averageUserValue={initialValue}
            averageValue={getNextValue(initialValue)}
            averageRegionValue={getNextValue(initialValue)}>
          </DailyUsageInfo>
        </Box>
      </Box>
    </Box>
  );
}