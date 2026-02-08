import React, { useContext } from "react";
import { NavLink } from "react-router";

import { Drawer, List, ListItemButton } from "@mui/material";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Home,
  Info,
} from "@mui/icons-material";

import { ThemeContext } from "../theme/ThemeProvider";
import HeroesIcon from "../assets/icons/Heroes";

import { ROUTES } from "./constants";

import {
  StyledDrawer,
  StyledListItemText,
  StyledListItemIcon,
  StyledIconButton,
} from "./styles";

const DrawerNavigation = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <StyledIconButton onClick={toggleTheme}>
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </StyledIconButton>

      <List>
        <ListItemButton
          className={({ isActive }) => isActive && "active"}
          component={NavLink}
          to={ROUTES.home}
        >
          <StyledListItemIcon>
            <Home />

            <StyledListItemText primary="Home" />
          </StyledListItemIcon>
        </ListItemButton>

        <ListItemButton
          className={({ isActive }) => isActive && "active"}
          component={NavLink}
          to={ROUTES.about}
        >
          <StyledListItemIcon>
            <Info />

            <StyledListItemText primary="About" />
          </StyledListItemIcon>
        </ListItemButton>

        <ListItemButton
          className={({ isActive }) => isActive && "active"}
          component={NavLink}
          to={ROUTES.heroes}
        >
          <StyledListItemIcon>
            <HeroesIcon />

            <StyledListItemText primary="Heroes" />
          </StyledListItemIcon>
        </ListItemButton>
      </List>
    </StyledDrawer>
  );
};

export default DrawerNavigation;

