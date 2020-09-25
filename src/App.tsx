import React from "react";
import { Grid, MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { routes } from "./routes";
import { theme } from "./theme";

export const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Grid container justify="center">
        <Grid item sm={8} md={6} lg={3}>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route exact key={path} path={path} component={component} />
            ))}
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  </MuiThemeProvider>
);
