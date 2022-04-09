import { Box } from "@mui/material";

export const SIDEBAR_WIDTH = '240px';

export const SidebarWrapper = ({ children }) => {
  return <Box
    sx={{
      position: 'fixed',
      top: '0',
      height: '100vh',
      display: "flex",
      flexDirection: "column",
      width: SIDEBAR_WIDTH,
      paddingTop: '10px',
      borderRight: (theme) => `solid 1px ${theme.secondaryBackgroundColor}`,
      background: (theme) => `${theme.secondaryBackgroundColor}`
    }}>
    {children}
  </Box>;
}
