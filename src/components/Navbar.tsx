import React from "react";
import {
  AppBar, Toolbar, MenuItem, Link as MuiLink, Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { routes } from "../routes";

export const Navbar: React.FC = () => (
  <AppBar position="relative" style={{ marginBottom: "2em" }}>
    <Toolbar>
      <Link to="/">
        <img src="/images/logo-64.png" width="32" alt="CS Club Logo" />
      </Link>
      {routes.map(({ path, label }) => (
        <MenuItem key={path}>
          <MuiLink component={Link} to={path}>
            <Typography color="textSecondary">{label}</Typography>
          </MuiLink>
        </MenuItem>
      ))}
    </Toolbar>
  </AppBar>
);
