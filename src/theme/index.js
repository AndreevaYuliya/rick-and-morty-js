import { createTheme } from "@mui/material/styles";

import { TRANSITION_CLASSES, BUBBLE_ANIMATION } from "./constants";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6ca8ff",
      light: "#9cc6ff",
      dark: "#3b73c2",
    },
    secondary: {
      main: "#ffc857",
      light: "#ffe08d",
      dark: "#c79523",
    },
    background: {
      default: "#0e1624",
      paper: "#121c2d",
    },
    text: {
      primary: "#e6ecf5",
      secondary: "#a9b8d0",
    },
    transparent: "transparent",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...TRANSITION_CLASSES,
        ...BUBBLE_ANIMATION,
        ":root": {
          "--theme-bubble-color": "#6ca8ff",
          "--bubble-top": "24px",
          "--bubble-left": "151px",
          "--bubble-right": "auto",
          "--bubble-bottom": "auto",
          "--bubble-scale-start": "0",
          "--bubble-scale-end": "80",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: TRANSITION_CLASSES[".MuiDrawer-paper"],
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1e9cee",
      light: "#6ec0fb",
      dark: "#0f6bb0",
    },
    secondary: {
      main: "#ffb400",
      light: "#ffd666",
      dark: "#c68400",
    },
    background: {
      default: "#dff2ff",
      paper: "#ffffff",
      transparent: "transparent",
    },
    text: {
      primary: "#0f85d8",
      secondary: "#143a54",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...TRANSITION_CLASSES,
        ...BUBBLE_ANIMATION,
        ":root": {
          "--theme-bubble-color": "#dff2ff",
          "--bubble-top": "24px",
          "--bubble-left": "151px",
          "--bubble-right": "auto",
          "--bubble-bottom": "auto",
          "--bubble-scale-start": "0",
          "--bubble-scale-end": "80",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: TRANSITION_CLASSES[".MuiDrawer-paper"],
      },
    },
  },
});

