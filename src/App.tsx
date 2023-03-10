import { createTheme, CssBaseline, StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom';
import { blueGrey } from "@mui/material/colors";
import React from "react";
import { Routestrap } from "./Routestrap";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/candal';
import '@fontsource/permanent-marker';
import '@fontsource/lexend';

const App = () => {
  const muiTheme = React.useMemo<Theme>(() => createTheme({
    palette: {
      info: {
        main: "#fff",
        dark: blueGrey[100],
        contrastText: blueGrey[700],
      },
      primary: {
        light: "#67d5ff",
        main: "#0ea5e9",
        dark: "#025391",
        contrastText: blueGrey[50],
      },
      secondary: {
        main: "#fcbe12"
      },
    },
    typography: {
      fontFamily: 'Roboto'
    }
  }), []);

  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={muiTheme}>
          <Routestrap />
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
}

export default App
