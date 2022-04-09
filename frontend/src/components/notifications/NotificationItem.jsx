import { Box, Typography } from "@mui/material";
import React from "react";

export function Notification(params) {
  const {notification} = params;
  const {data, date, title} = notification;

  return (<Box sx={{
    borderRadius: '8px',
    boxShadow: (theme) => `0 0 5px ${theme.greyColor}`,
    backgroundColor: (theme) => `${theme.lightGreyColor}`,
    minHeight: '120px',
    margin: '15px',
    padding: '15px'
  }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
      <Typography sx={{fontWeight: 'bolder'}}>{title}</Typography>
      <Typography sx={{fontWeight: 'bolder', paddingRight: '20px'}}>{date}</Typography>
    </Box>
    <Typography>{data}</Typography>
  </Box>);

}
