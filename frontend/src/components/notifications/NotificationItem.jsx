import { Box, Typography } from "@mui/material";
import React from "react";

export function Notification(params) {
  const {notification} = params;
  const {data, title} = notification;

  return (<Box sx={{
    borderRadius: '8px',
    boxShadow: (theme) => `0 0 5px ${theme.greyColor}`,
    backgroundColor: (theme) => `${theme.lightGreyColor}`,
    minHeight: 120,
    margin: '15px',
    padding: '15px'
  }}>
    <Typography sx={{fontWeight: 'bolder', paddingBottom: '5px'}}>{title}</Typography>
    <Typography>{data}</Typography>
  </Box>);

}
