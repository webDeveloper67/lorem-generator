import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {},
  typography: {},
  palette: {
    primary: {
      light: "#ff784e",
      main: "#ff5722",
      dark: "#b23c17",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffa733",
      main: "#ff9100",
      dark: "#b26500",
      contrastText: "#000",
    },
  },
});

export default theme;
