import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  AppBar, Badge, Box, IconButton, Menu, MenuItem, Toolbar, Typography
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../contexts/AppContext';
import { notifications } from './notifications/NotificationsView';


export const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);

  const { logout } = React.useContext(appContext);

  const isMenuOpen = Boolean(anchorEl);
  const isNotifMenuOpen = Boolean(notificationAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setNotificationAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogout = useCallback(() => {
    logout();
  }, [logout])

  const handleToggleNotification = (event) => {
    setNotificationAnchorEl(event.currentTarget)
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>Log out</MenuItem>
    </Menu>
  );

  const maxTitleWordsCount = 20
  const maxContentWordsCount = 40;
  const notifMenuId = 'notification-menu'

  const renderNotificationMenu = (
    <Menu
      anchorEl={notificationAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={notifMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isNotifMenuOpen}
      onClose={handleMenuClose}
    >
      {notifications.slice(0,3).map((notif, i) => 
        <MenuItem key={i}>
          <Box>
            <Typography sx={{ fontWeight: '600' }}>
              {notif.title.length > maxTitleWordsCount ? `${notif.title.slice(0, maxTitleWordsCount)}...`
                : notif.title}
            </Typography>
            <Typography sx={{ fontWeight: '200', fontSize: '.9em' }}>{notif.data.length > maxContentWordsCount ? `${notif.data.slice(0, maxContentWordsCount)}...`
              : notif.data}
            </Typography>
          </Box>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label={`show ${ notifications.length } new notifications`}
          color="inherit"
        >
          <Badge badgeContent={ notifications.length } color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to='dashboard'>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
            >
              Wodociągi
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label={`show ${ notifications.length } new notifications`}
              color="inherit"
            >
              <Badge badgeContent={ notifications.length } color="error">
                <NotificationsIcon onClick={handleToggleNotification} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderNotificationMenu}
      {renderMenu}
    </Box>
  );
}
