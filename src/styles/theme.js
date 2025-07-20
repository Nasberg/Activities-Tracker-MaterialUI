import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { teal, amber } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
      dark: "#00756c",
      light: "#63d7cb",
    },
    secondary: {
      main: amber[700],
      dark: "#c67100",
      light: "#ffd149",
    },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: "1.5rem",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
