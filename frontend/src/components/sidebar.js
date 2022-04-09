import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const MainListItems = () => (
  <React.Fragment>
    <Link to='/dashboard'>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Twoje Dane" />
      </ListItemButton>
    </Link>
    <Link to='/regionData'>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Dane Zbiorowe" />
      </ListItemButton>
    </Link>
    <Link to='/waterQuality'>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Jakość Wody" />
      </ListItemButton>
    </Link>
    <Link to='/spongeHouse'>
      <ListItemButton>
        <ListItemIcon>
          <OtherHousesIcon />
        </ListItemIcon>
        <ListItemText primary="Sponge House" />
      </ListItemButton>
    </Link>
    <div style={{ flex: 1 }}></div>
    <Link to='/notifications'>
      <ListItemButton>
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary="Powiadomienia" />
      </ListItemButton>
    </Link>
    <Link to='/messages'>
      <ListItemButton>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Wiadomości" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const SecondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
