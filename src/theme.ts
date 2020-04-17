import { createMuiTheme } from "@material-ui/core";
import "typeface-open-sans";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Source Code Pro, monospace",
  },
  palette: {
    primary: {
      main: "#499B46",
    },
    background: {
      default: "#EEEEEE",
    },
    text: {
      secondary: "#FFFFFF",
    },
  },
});
