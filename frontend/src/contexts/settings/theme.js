import { createTheme } from "@mui/material/styles";

const white = "#fff";
const primaryColor = "#14b8a6";
const secondaryBackgroundColor = "#14b8a63b";
const lightGreyColor = "#55555517";
const greyColor = "#555";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: white,
    }
  },
  secondaryBackgroundColor: secondaryBackgroundColor,
  lightGreyColor: lightGreyColor,
  greyColor: greyColor,
})
