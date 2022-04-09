import { Box } from "@mui/material";

export const SidebarWrapper = ({ children }) => {
  return <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      minWidth: '200px',
      paddingTop: '10px',
      borderRight: (theme) => `solid 1px ${theme.secondaryBackgroundColor}`,
      background: (theme) => `${theme.secondaryBackgroundColor}`
    }}>
    {children}
  </Box>;
}
