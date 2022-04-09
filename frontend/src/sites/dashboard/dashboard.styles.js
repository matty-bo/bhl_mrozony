import { Box } from "@mui/material";

export const SidebarWrapper = ({ children }) => <Box sx={{ minWidth: '200px', paddingTop: '10px', borderRight: (theme) => `solid 1px ${theme.secondaryBackgroundColor}`, background: (theme) => `${theme.secondaryBackgroundColor}` }}>{children}</Box>;