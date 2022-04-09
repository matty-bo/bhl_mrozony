import { Box, Typography, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useEffect, useState } from 'react';
import { userWatermeterId } from '../utils/env';
import { get } from '../utils/requests';
import { DashboardBarChart } from './barChart/barChart';
import { LineChart } from './lineChart/lineChart';

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

export const ChartBox = (props) => {
  const { barChart, lineChart } = props;

  const currDate = new Date();
  const [date, setDate] = useState({
    year: currDate.getFullYear(),
    month: currDate.getMonth() + 1,
    day: currDate.getDate(),
    date: currDate
  });
  const [monthData, setMonthData] = useState(null);
  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    const {day, month, year} = date;

    get(`watermeters/${ userWatermeterId }?year=${ year }&month=${ month }`)
      .then((resp) => { setMonthData(resp); });

    get(`watermeters/${ userWatermeterId }?year=${ year }&month=${ month }&day=${ day }`)
      .then((resp) => { setDailyData(resp); });
  }, [date]);

  
  const UsageInfo = (props) => {
    const { averageValue, averageRegionValue, averageUserValue, hasCalendar } = props;
    return (
      <Box>
        {hasCalendar &&
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
              value={date.date}
              onChange={(newValue) => {
                setDate({
                  year: newValue.getFullYear(),
                  month: newValue.getMonth() + 1,
                  day: newValue.getDate(),
                  date: newValue
                });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        }

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

  return (
    <Box sx={{
      borderRadius: '8px',
      boxShadow: (theme) => `0 0 5px ${theme.greyColor}`,
      backgroundColor: (theme) => `${theme.lightGreyColor}`,
      minHeight: '120px',
      margin: '15px',
      padding: '15px',
      width: '100%'
    }}>
      <InfoBoxTitle label='Zużycie wody'></InfoBoxTitle>
      {barChart && dailyData && <Box sx={{ display: 'flex', paddingTop: '10px' }}>
        <Box sx={{
          width: '50%'
        }}>
          <DashboardBarChart data={dailyData}></DashboardBarChart>
        </Box>
        <Box sx={{
          width: '50%',
          paddingLeft: '20px'
        }}>
          <UsageInfo
            averageUserValue={dailyData.usage_mean}
            averageValue={dailyData.global_usage_mean}
            averageRegionValue={dailyData.region_usage_mean}
            hasCalendar>
          </UsageInfo>
        </Box>
      </Box>}

      {lineChart && monthData && <Box sx={{ display: 'flex', paddingTop: '10px' }}>
        <Box sx={{
          width: '50%'
        }}>
          <LineChart data={monthData}></LineChart>
        </Box>
        <Box sx={{
          width: '50%',
          paddingLeft: '20px'
        }}>
          <UsageInfo
            averageUserValue={monthData.usage_mean}
            averageValue={monthData.global_usage_mean}
            averageRegionValue={monthData.region_usage_mean}>
          </UsageInfo>
        </Box>
      </Box>}
    </Box>
  );
}